import type { Metadata } from "next";
import { Roboto, Lexend } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "700"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "Vinhomes Ocean Park Gia Lâm - Thông tin chính thức",
  description: "Dự án Vinhomes Ocean Park là đại đô thị do chủ đầu tư Vingroup triển khai trên địa bàn huyện Gia Lâm, Hà Nội.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${roboto.variable} ${lexend.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
