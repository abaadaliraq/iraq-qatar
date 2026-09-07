import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "مقترح البيت العراقي القطري في بيت التحفيات | بغداد",
  description:
    "تصور مقترح لتحويل بيت التحفيات في بغداد إلى بيت عراقي–قطري بطابع بغدادي، يحتضن الفنون والمعارض والمزادات والفعاليات ويستقبل الفنانين والمثقفين والوفود والزوار القطريين.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
