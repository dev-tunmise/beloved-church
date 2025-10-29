import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { locales } from '@/i18n';
import { Footer } from "@/app/_components/footer";
import Navigation from "@/app/_components/navigation";
import WhatsAppButton from "@/app/_components/whatsapp-button";
import { Inter } from "next/font/google";
import cn from "classnames";
import "../globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

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
