import type { Metadata } from "next";
import "@/styles/globals.css";
import { Noto_Sans, Sora, Lato } from "next/font/google";
import { cn } from "@/helpers/styles";

const noto = Noto_Sans({ subsets: ["latin"], variable: "--font-body" });
const sora = Sora({ subsets: ["latin"], variable: "--font-title" });
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Hicones Tech",
  icons: "/logo.svg",
  description: "Henrique Almeida's personal website",
  authors: [{ name: "Henrique Almeida", url: "https://hicones.tech" }],
  keywords: ["Henrique Almeida", "Hicones", "Portfolio", "Developer", "frontend"],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={cn(lato.variable, sora.variable, noto.variable)}>{children}</body>
    </html>
  );
}
