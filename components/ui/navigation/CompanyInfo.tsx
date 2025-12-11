//components/ui/navigation/CompanyInfo.tsx
import Image from "next/image"
export const CompanyInfo = [
  {
    companyName: (type: "primary" | "secondary" | "tertiary") => (
      <Image
        src={
          type === "primary"
            ? "/common/logo.png" // 1つ目のロゴパス（ヘッダーロゴ）
            : type === "secondary"
            ? "/common/logo_square.png" // 2つ目のロゴパス（フッターロゴ）
            : "/common/logo.png" // 3つ目のロゴパス（テキストなし）
        }
        alt="logo"
        width={200} // 適切な幅を指定
        height={40} // 適切な高さを指定
        className="w-full h-full object-contain"
      />
    ),
    companyNameText: "株式会社アールビー",
    companyPostalCode: "400-0027",
    companyAddress: "山梨県甲府市富士見1−2−13",
    companyTel: "000-000-0000",
    companyTelHref: "tel:0000000000",
    companyEmail: "info@company.co.jp",
  },
]

export default CompanyInfo
