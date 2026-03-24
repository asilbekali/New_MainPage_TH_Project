import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
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
    <html lang={locale}>
      <head>
        <meta name="google-adsense-account" content="ca-pub-1116201113573585" />
        <Script
          id="adsense-script"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1116201113573585"
          strategy="beforeInteractive"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased container2`}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ResponsiveAppBar />
          <main className="mt-7.5" style={{ paddingTop: "80px" }}>
            {children}
          </main>
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
