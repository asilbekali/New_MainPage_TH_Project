import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import ResponsiveAppBar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; 
}) {
  // Next.js 15+ uchun paramsni kutish (await) kerak
  const { locale } = await params;
  const messages = await getMessages();
  
  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* NextIntlClientProvider context yaratib beradi */}
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ResponsiveAppBar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}