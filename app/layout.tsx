import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";

const editorialFont = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-editorial",
});

export const metadata: Metadata = {
  title: "Honeyvault Bakery Demo",
  description:
    "A premium fictional bakery portfolio demo for pastries, custom boxes, large orders, and booking inquiries.",
  icons: {
    icon: "/images/logo/Logo-Mark.png",
    shortcut: "/images/logo/Logo-Mark.png",
    apple: "/images/logo/Logo-Mark.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={editorialFont.variable}>
        <div className="page-frame">{children}</div>
      </body>
    </html>
  );
}
