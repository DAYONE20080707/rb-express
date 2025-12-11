// components/ui/itemCard/ServiceCard.tsx
import Image from "next/image";
import classNames from "classnames";
import ArrowRightLinkButton from "@/components/ui/button/ArroeRightLinkButton";

interface ServiceCardProps {
  id: number;
  subTitle: string;
  title: string;
  description: string;
  image: string; // 画像パスを受け取る
  href: string; // リンク先のURLを受け取る
  className?: string; // 任意のクラス名を受け取る
  imageContainerClass?: string; // 画像コンテナのクラスを受け取る
  showButton?: boolean; // ボタンの表示を制御するプロパティを追加
  reverse?: boolean; // 画像とテキストの順序を反転させる
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  subTitle,
  description,
  image,
  href,
  className = "",
  imageContainerClass = "",
  showButton = true, // デフォルトでボタンを表示する設定
  reverse = false, // デフォルトは通常の順序
}) => {
  return (
    <div
      className={classNames(
        "relative overflow-hidden flex flex-col gap-6 md:gap-20", // SPは常に縦並び（画像上、テキスト下）
        reverse ? "md:flex-row-reverse" : "md:flex-row", // デスクトップのみ反転
        className
      )}
    >
      <div className="md:w-1/2">
        <Image
          width={560}
          height={480}
          src={image}
          alt={`solution ${id}`}
          objectFit="cover"
          className="block object-top"
          priority
        />
      </div>

      <div className="md:w-1/2 space-y-3 relative text-black">
        <div className="font-bold text-[16px] text-left text-accentLight font-en">
          {subTitle}
        </div>
        <div className="font-medium text-xl md:text-[34px] leading-[150%] text-left text-accentColor whitespace-pre-line pb-8 border-b border-borderLight">
          {title}
        </div>
        <div className="mt-8 text-base md:text-lg text-baseColor !leading-[250%]">
          {description}
        </div>
        {/* {showButton && (
          <div className="text-black">
            <ArrowRightLinkButton href={href} label="" />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default ServiceCard;
