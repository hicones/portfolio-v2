import type { Metadata } from "next";
import { Inter, Poppins, Fira_Code } from "next/font/google";
import "@/styles/globals.css";
import { ScrollProgressBar } from "@/components/app/scroll-progress-bar";

const inter = Inter({ subsets: ["latin"] });
const firaCode = Fira_Code({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hicones Tech",
  description: "hicones.tech portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${poppins.className} ${firaCode.className} antialiased`}
        cz-shortcut-listen="true"
      >
        <div className="min-h-screen">
          {children}

          <ScrollProgressBar />
        </div>
      </body>
    </html>
  );
}
