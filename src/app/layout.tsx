import { Footer } from "@/app/_components/footer";
import Navigation from "@/app/_components/navigation";
import WhatsAppButton from "@/app/_components/whatsapp-button";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";
import { ThemeSwitcher } from "./_components/theme-switcher";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { cookies } from 'next/headers';
import { locales, type Locale } from '@/i18n';

import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Beloved New Beginning Ministries - Royal Grace & Purity",
  description: "Welcome to Beloved New Beginning Ministries. Experience God's love, watch sermons, read our blog, and explore our natural herbs collection.",
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://belovedchurch.com'),
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get locale from cookie or default to 'en'
  let locale = 'en';
  
  try {
    const cookieStore = await cookies();
    const localeCookie = cookieStore.get('NEXT_LOCALE');
    if (localeCookie && locales.includes(localeCookie.value as Locale)) {
      locale = localeCookie.value;
    }
  } catch (error) {
    // If cookies can't be read, use default 'en'
    console.log('Using default locale');
  }
  
  // Load messages for the selected locale
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/beloved-logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/beloved-logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/beloved-logo.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/images/beloved-logo.png"
          color="#000000"
        />
        <link rel="shortcut icon" href="/images/beloved-logo.png" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body
        className={cn(inter.className, "dark:bg-slate-900 dark:text-slate-400")}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navigation />
          <div className="min-h-screen">{children}</div>
          <WhatsAppButton />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
