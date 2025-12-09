// components/ui/button/MoreLinkButton.tsx

import Link from "next/link";
import classNames from "classnames";

const MoreLinkButton = ({
  href = "/", // デフォルトの href を "/" に設定
  className = "",
  children = "View more", // デフォルトのテキスト
  variant = "blue", // デフォルトはblueバージョン
}: {
  href?: string;
  className?: string;
  children?: React.ReactNode;
  variant?: "blue" | "light";
}) => {

  // 矢印の色を決定
  const getArrowColor = () => {
    switch (variant) {
      case "light":
        return "#60BBC7"; // accentLight
      default: // blue
        return "#265695"; // accentColor
    }
  };

  return (
    <Link
      href={href}
      className={classNames(
        "bg-white text-accentColor tracking-[0.03em] cursor-pointer flex items-center justify-between w-full md:w-[300px] px-6 py-4 relative group",
        className
      )}
    >
      <span>{children}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle cx="12" cy="12" r="12" fill={getArrowColor()} />
        <path d="M6.25 12H17.75" stroke="white" />
        <path d="M13.75 8L17.75 12L13.75 16" stroke="white" />
      </svg>
    </Link>
  );
};

export default MoreLinkButton;
