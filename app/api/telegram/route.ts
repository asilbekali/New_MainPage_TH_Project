import { NextRequest, NextResponse } from "next/server";
import { sendTelegramMessage } from "@/service/telegram.service";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, phone, email } = body;

    if (!firstName || !lastName || !phone || !email) {
      return NextResponse.json(
        { success: false, error: "Barcha maydonlarni to'ldiring" },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString("uz-UZ", {
      timeZone: "Asia/Tashkent",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const result = await sendTelegramMessage({
      firstName,
      lastName,
      phone,
      email,
      timestamp,
    });

    return NextResponse.json({
      success: true,
      message: "Murojaat yuborildi!",
      result
    });
  } catch (err: any) {
    console.error("API error:", err);
    return NextResponse.json(
      { success: false, error: "Serverda xatolik yuz berdi" },
      { status: 500 }
    );
  }
}