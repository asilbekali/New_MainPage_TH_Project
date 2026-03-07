import { getNextAdmin } from "@/data/admin";

interface UserData {
  firstName: string;
  lastName: string;
  phone: string;
  timestamp: string;
}

function getAdminName(adminId: string): string {
  const admins = process.env.ADMINS?.split(",") || [];
  for (const item of admins) {
    const [id, name] = item.trim().split("|");
    if (id === adminId) return name || "Admin";
  }
  return "Admin";
}

// 1. CALLBACKNI QAYTA ISHLASH 
export async function handleCallback(callbackQuery: any) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const callbackData = callbackQuery.data; 
  const messageId = callbackQuery.message.message_id;
  const chatId = callbackQuery.message.chat.id;
  const messageText = callbackQuery.message.text;

  // Ma'lumotlarni ajratib olamiz: adminId|phone|fullName
  const [adminId, phone, fullName] = callbackData.split("|");
  const adminName = getAdminName(adminId);

  // Admin xabarini yangilash
  const updatedText =
    `${messageText}\n\n` +
    `━━━━━━━━━━━━━━━━━━\n` +
    `✅ <b>BU MIJOZ BILAN BOG'LANILDI</b>\n` +
    `👤 <b>Admin:</b> ${adminName}`;

  await fetch(`https://api.telegram.org/bot${token}/editMessageText`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      message_id: messageId,
      text: updatedText,
      parse_mode: "HTML",
    }),
  });

  // Tugmalarni o'chirish
  await fetch(`https://api.telegram.org/bot${token}/editMessageReplyMarkup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      message_id: messageId,
      reply_markup: { inline_keyboard: [] },
    }),
  });

  // HISOBOT KANALIGA YUBORISH
  const channelId = process.env.TELEGRAM_CHANNEL_ID;
  if (channelId) {
    const now = new Date();
    const callTime = now.toLocaleString("uz-UZ", {
      timeZone: "Asia/Tashkent",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).replace(',', '');

    const logText =
      `⚡️ <b>HISOBOT: QO'NG'IROQ AMALGA OSHIRILDI</b>\n` +
      `───────────────────\n\n` +
      `👨‍💻 <b>Admin:</b> <code>${adminName}</code>\n` +
      `👤 <b>Mijoz ismi:</b> <b>${fullName}</b>\n` +
      `📞 <b>Mijoz tel:</b> <code>${phone}</code>\n` +
      `⏰ <b>Vaqt:</b> ${callTime}\n\n` +
      `📊 <b>Holat:</b> #Boglanildi`;

    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: Number(channelId),
        text: logText,
        parse_mode: "HTML",
      }),
    });
  }

  // Popup bildirishnoma
  await fetch(`https://api.telegram.org/bot${token}/answerCallbackQuery`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      callback_query_id: callbackQuery.id,
      text: "✅ Hisobot guruhga yuborildi!",
    }),
  });
}


// 2. YANGI REGISTRATSIYA
export async function sendTelegramMessage(user: UserData) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const archiveChannelId = process.env.TELEGRAM_ARCHIVE_CHANEL;
  const admin = getNextAdmin();
  
  if (!token || !admin) throw new Error("Bot token yoki admin topilmadi");

  const fullName = `${user.firstName} ${user.lastName}`;

  // Arxiv formati
  const archiveText = 
    `🆕 <b>YANGI MUROJAAT TUSHDI</b>\n` +
    `───────────────────\n\n` +
    `👤 <b>Mijoz ismi:</b> ${fullName}\n` +
    `📞 <b>Tel:</b> <code>${user.phone}</code>\n` +
    `📅 <b>Sana:</b> ${user.timestamp}\n\n` +
    `<b>biriktirilgan admin:</b> ${admin.name}`;

  // Adminga boradigan xabar
  const adminText =
   `🚀 <b>YANGI MUROJAAT TUSHDI</b>\n` +
    `───────────────────\n\n` +
    `👤 <b>Ism:</b> <b>${fullName}</b>\n` +
    `📞 <b>Tel:</b> <code>${user.phone}</code>\n` +
    `📅 <b>Sana:</b> ${user.timestamp}\n\n` +
    `👨‍💻 <b>Mas'ul admin:</b> <u>${admin.name}</u>\n\n` +
    `<i>Iltimos, mijoz bilan tezroq bog'laning!</i>`;

  // Arxivga yuborish
  if (archiveChannelId) {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: Number(archiveChannelId),
        text: archiveText,
        parse_mode: "HTML",
      }),
    });
  }

  // Adminga yuborish (Tugma ichiga adminId|phone|fullName)
  const body = {
    chat_id: Number(admin.id),
    text: adminText,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "📞 Bog'landim (Tasdiqlash)",
            callback_data: `${admin.id}|${user.phone}|${fullName}`,
          },
        ],
      ],
    },
  };

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  
  return await res.json();
}