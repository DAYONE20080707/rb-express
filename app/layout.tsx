import "./globals.css";
import type { Metadata, Viewport } from "next";
import ToastProvider from "@/components/providers/ToastProvider";
import { Noto_Sans_JP, Outfit } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

// Noto Sans JP フォントの設定
const notoSansJP = Noto_Sans_JP({
  weight: ["200", "300", "400", "500", "600", "700", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

// 英字 フォントの設定
const outfit = Outfit({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-en",
});

export const metadata: Metadata = {
  title: {
    template: "%s | 株式会社アールビー",
    default: "株式会社アールビー | 軽貨物配送サービス",
  },
  description:
    "株式会社アールビーは、山梨県甲府市を拠点に、スポット便・チャーター便・宅配など、お客様のニーズに合わせた軽貨物配送サービスを提供しています。山梨県内はもちろん、全国への配送にも柔軟に対応。確実で迅速な配送サービスで、暮らしとビジネスを支えます。",
  keywords: [
    "軽貨物配送",
    "スポット便",
    "チャーター便",
    "宅配",
    "山梨県",
    "甲府市",
    "配送サービス",
    "物流",
    "株式会社アールビー",
  ],
  openGraph: {
    title: "株式会社アールビー | 軽貨物配送サービス",
    description:
      "山梨県甲府市を拠点に、スポット便・チャーター便・宅配など、お客様のニーズに合わせた軽貨物配送サービスを提供しています。",
    type: "website",
    locale: "ja_JP",
  },
  icons: {
    icon: "/common/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  return (
    <html lang="ja">
      <body className={`font-notoSansJP text-baseColor ${outfit.variable}`}>
        <GoogleTagManager gtmId="GTM-5VZQPT43" />
        <ToastProvider />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
