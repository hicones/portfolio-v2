import type { Metadata } from "next";
import { Inter, Fira_Code, Urbanist } from "next/font/google";
import "@/styles/globals.css";
import { ScrollProgressBar } from "@/components/app/scroll-progress-bar";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const inter = Inter({ subsets: ["latin"] });
const firaCode = Fira_Code({ subsets: ["latin"] });
const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hicones Tech",
  description: "hicones.tech portfolio website",
  icons: {
    icon: "/assets/hi.svg",
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${inter.className} ${firaCode.className} ${urbanist.className} antialiased`}
        cz-shortcut-listen="true"
      >
        <NextIntlClientProvider messages={messages}>
          <div className="min-h-screen">
            {children}

            <ScrollProgressBar />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
