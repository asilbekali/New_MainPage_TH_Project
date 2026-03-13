import { getNextAdmin } from "@/data/admin";

interface UserData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  timestamp: string;
}

// Admin ismini aniqlash uchun yordamchi funksiya
function getAdminName(adminId: string): string {
  const admins = process.env.ADMINS?.split(",") || [];
  for (const item of admins) {
    const [id, name] = item.trim().split("|");
    if (id === adminId) return name || "Admin";
  }
  return "Admin";
}

// 1. CALLBACKNI QAYTA ISHLASH (Tugma bosilganda)
export async function handleCallback(callbackQuery: any) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const callbackData = callbackQuery.data; 
  const messageId = callbackQuery.message.message_id;
  const chatId = callbackQuery.message.chat.id;
  const messageText = callbackQuery.message.text;

  // Ma'lumotlarni ajratib olamiz: adminId|phone|fullName|email
  const [adminId, phone, fullName, email] = callbackData.split("|");
  const adminName = getAdminName(adminId);

  // 1.1. Admin xabarini yangilash (Mijoz bilan bog'lanilganini ko'rsatish)
  const updatedText =
    `${messageText}\n\n` +
    `━━━━━━━━━━━━━━━━━━\n` +
    `✅ <b>BU MIJOZ BILAN BOG'LANILDI</b>\n` +
    `👤 <b>Admin:</b> ${adminName}`;

  try {
    // Xabar matnini o'zgartirish va tugmalarni o'chirish
    await fetch(`https://api.telegram.org/bot${token}/editMessageText`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        message_id: messageId,
        text: updatedText,
        parse_mode: "HTML",
        reply_markup: { inline_keyboard: [] }, // Tugmalarni shu yerning o'zida o'chirib ketamiz
      }),
    });

    // 1.2. Hisobot kanaliga log yuborish
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
        `✉️ <b>Email:</b> <code>${email}</code>\n` +
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

    // 1.3. Popup bildirishnoma (Telegram interfeysi uchun)
    await fetch(`https://api.telegram.org/bot${token}/answerCallbackQuery`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        callback_query_id: callbackQuery.id,
        text: "✅ Hisobot guruhga yuborildi!",
      }),
    });

  } catch (error) {
    console.error("Callback xatosi:", error);
  }
}

// 2. YANGI REGISTRATSIYA (Mijoz ariza qoldirganda)
export async function sendTelegramMessage(user: UserData) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const archiveChannelId = process.env.TELEGRAM_ARCHIVE_CHANEL;
  const admin = getNextAdmin();
  
  if (!token || !admin) throw new Error("Bot token yoki admin topilmadi");

  const fullName = `${user.firstName} ${user.lastName}`;

  // Arxiv uchun matn
  const archiveText = 
    `🆕 <b>YANGI MUROJAAT TUSHDI</b>\n` +
    `───────────────────\n\n` +
    `👤 <b>Mijoz ismi:</b> ${fullName}\n` +
    `📞 <b>Tel:</b> <code>${user.phone}</code>\n` +
    `📅 <b>Sana:</b> ${user.timestamp}\n\n` +
    `✉️ <b>Email:</b> <code>${user.email}</code>\n` +
    `👨‍💻 <b>Biriktirilgan admin:</b> ${admin.name}`;

  // Adminga boradigan xabar
  const adminText =
    `🚀 <b>YANGI MUROJAAT TUSHDI</b>\n` +
    `───────────────────\n\n` +
    `👤 <b>Ism:</b> <b>${fullName}</b>\n` +
    `📞 <b>Tel:</b> <code>${user.phone}</code>\n` +
    `✉️ <b>Email:</b> <code>${user.email}</code>\n` +
    `📅 <b>Sana:</b> ${user.timestamp}\n\n` +
    `👨‍💻 <b>Mas'ul admin:</b> <u>${admin.name}</u>\n\n` +
    `<i>Iltimos, mijoz bilan tezroq bog'laning!</i>`;

  // 2.1. Arxivga yuborish
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

  // 2.2. Adminga yuborish (Tugma bilan)
  const body = {
    chat_id: Number(admin.id),
    text: adminText,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "📞 Bog'landim (Tasdiqlash)",
            callback_data: `${admin.id}|${user.phone}|${fullName}|${user.email}`, 
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



// telegram bot ishlamayapti sababi admin aloqaga chiqdim tugmasini bosganda controller channelga jo'natmayapti va adminga ham xabar yubormayapti, shuning uchun callbackni qayta ishlash funksiyasini tekshirib chiqing va kerak bo'lsa loglarni qo'shing.