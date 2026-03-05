import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import ResponsiveAppBar from "@/components/Navbar";
import "../../styles/background.css";


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
  const { locale } = await params;
  const messages = await getMessages();
  
  return (
    <html  lang={locale}>
      <body  className={`${geistSans.variable} ${geistMono.variable} antialiased container2`}>
        <NextIntlClientProvider messages={messages} locale={locale} >
          <ResponsiveAppBar />
          <main className='mt-[30px]' style={{ paddingTop: '80px' }}> 
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}