"use client";

import Link from "next/link";
import MoreLinkButton from "@/components/ui/button/MoreButton";
import SectionContent from "@/components/ui/frame/SectionContent";
import ToTopButton from "@/components/ui/button/ToTopButton";

const Thanks_01 = () => {
  return (
    <SectionContent className="">
      <div className="md:max-w-[1240px] mx-auto text-center">
        {/* チェックマークアイコン */}
        <div className="flex justify-center mb-6 md:mb-10">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-accentColor flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              className="text-accentColor"
            >
              <path
                d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                fill="#009789"
              />
            </svg>
          </div>
        </div>

        {/* タイトル */}
        <h2 className="text-2xl md:text-[40px] font-medium text-baseColor mb-6 md:mb-10 tracking-[0.05em]">
          お問い合わせが送信されました
        </h2>

        {/* メッセージ */}
        <p className="text-base md:text-xl text-baseColor !leading-[200%] mb-10 md:mb-16 max-w-3xl mx-auto tracking-[0.05em]">
          お問い合わせいただき、誠にありがとうございます。
          <br className="hidden md:block" />
          お問い合わせ内容を確認後、3営業日以内に担当者からご連絡致しますので、
          <br />
          今しばらくお待ちくださいませ。
        </p>

        {/* トップページへ戻るボタン */}
        <div className="flex justify-center">
          <ToTopButton href="/">
            トップページへ戻る
          </ToTopButton>
        </div>
      </div>
    </SectionContent>
  );
};

export default Thanks_01;
