// components/ui/button/ToTopButton.tsx

import Link from "next/link";
import classNames from "classnames";

const ToTopButton = ({
  href = "/", // デフォルトの href を "/" に設定
  className = "",
  children,
}: {
  href?: string;
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className={classNames(
        "w-[80vw] max-w-[350px] py-4 px-0 bg-accentColor text-lg text-white hover:opacity-70 flex items-center justify-center font-semibold",
        className
      )}
    >
      <span>{children}</span>
    </Link>
  );
};

export default ToTopButton;
