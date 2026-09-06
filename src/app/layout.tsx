import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "مشروع إحياء الشارع التراثي في أبو نؤاس | العراق × قطر",
  description:
    "مقترح لشراكة عراقية–قطرية لإحياء وتأهيل واستثمار شارع تراثي في قلب بغداد، من خلال ترميم البيوت وإعادة توظيفها ضمن مشروع ثقافي وسياحي واستثماري متكامل.",
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
