// components/header/Header_05

"use client";

import Link from "next/link";
import { useState } from "react";
import Menu from "@/components/ui/navigation/Menu";
import ContactButton from "@/components/ui/button/ContactButton";
import CompanyInfo from "@/components/ui/navigation/CompanyInfo";
import HeaderContent from "../ui/frame/HeaderContent";
import SnsIconButton from "@/components/ui/button/SnsIconButton";
import { SnsButton } from "@/components/ui/button/SnsButton";

const Header_05 = () => {
  const { companyName } = CompanyInfo[0];

  // メニュー開閉状態を管理
  const [isMenuOpen, setIsMenuOpen] = useState(false); // メニュー開閉状態
  const [isAnimating, setIsAnimating] = useState(false); // フェードアニメーション用状態

  const handleMenuToggle = () => {
    if (isMenuOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsAnimating(false);
      }, 200); // アニメーションの長さに合わせて調整
    } else {
      setIsMenuOpen(true);
    }
  };

  const filteredMenu = Menu.filter((item) => item.name !== "お問い合わせ");

  return (
    <div className="">
      <HeaderContent className="max-w-[1200px] fixed top-5 left-1/2 transform -translate-x-1/2 z-10 w-full transition-all duration-300">
        <div className="w-full h-11 md:h-20 flex items-center justify-between mx-auto pl-10  bg-white transition-all duration-300">
          {/* ロゴ */}
          <Link href="/" className="w-[150px] md:w-[237px]">
            <div className="text-lg font-bold ">
              {CompanyInfo[0].companyName("primary")}
            </div>
          </Link>

          {/* デスクトップ用メニュー */}
          <ul className="hidden md:flex items-center space-x-10 ml-10 tracking-[0.03em] text-accentColor h-full">
            {filteredMenu.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>
                  <div>{item.nameJa}</div>
                </Link>
              </li>
            ))}
            {/* <div className="flex items-center ">
              {SnsButton.slice(0, 3).map((sns, index) => (
                <SnsIconButton
                  key={index}
                  href={sns.href}
                  src={sns.src}
                  alt={sns.name}
                  className="text-white hover:text-accentColor transition-colors duration-200"
                />
              ))}
            </div> */}
            <li className=" h-full">
              <ContactButton className="" >お問い合わせ</ContactButton>
            </li>
          </ul>

          {/* ハンバーガーメニューボタン */}
          <button
            className={`block md:hidden text-baseColor transition-transform duration-300 ${
              isMenuOpen ? "rotate-90" : "rotate-0"
            }`}
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* スマホ用メニュー */}
        <div
          className={`absolute top-20 left-0 w-full h-screen bg-gray-800 bg-opacity-70 text-white md:hidden transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          } ${isAnimating ? "pointer-events-auto" : ""}`}
        >
          <ul className="flex flex-col items-center space-y-6 py-10">
            {filteredMenu.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>
                  <div onClick={handleMenuToggle}>{item.nameJa}</div>
                </Link>
              </li>
            ))}
            {/* <div className="flex items-center ">
              {SnsButton.slice(0, 3).map((sns, index) => (
                <SnsIconButton
                  key={index}
                  href={sns.href}
                  src={sns.name === "Line" ? sns.src : sns.src_w || sns.src}
                  alt={sns.name}
                  className="text-white hover:text-accentColor transition-colors duration-200"
                />
              ))}
            </div> */}
            {/* ContactButton */}
            <li>
              <ContactButton className="w-full py-4 font-normal" />
            </li>
          </ul>
        </div>
      </HeaderContent>
    </div>
  );
};

export default Header_05;
