import React from "react";
import MoreButton from "@/components/ui/button/MoreButton";
import Image from "next/image";

interface AboutSection_02Props {
  title: string; // 見出しテキスト
  description: string; // 本文
  buttonHref?: string; // ボタンリンク先（任意）
  imageUrl?: string; // 画像URL（任意）
  position?: string; // 役職（任意）
  name?: string; // 氏名（任意）
}

const AboutSection_02 = ({
  title,
  description,
  buttonHref,
  imageUrl,
  position,
  name,
}: AboutSection_02Props) => {
  // 文字列内の\nを<br />に変換する関数
  const convertNewLines = (text: string) => {
    return text.split("\\n").map((line, i) => (
      <React.Fragment key={i}>
        {line}
        {i !== text.split("\\n").length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className="flex flex-col-reverse md:flex-row justify-start md:space-x-20 pb-24">
      <div className="md:w-[36vw] md:max-w-[520px] h-[300px] md:h-auto relative mt-10 md:mt-0">
        <Image
          src={imageUrl || "/top/message/message_img.jpg"}
          alt={name || "message"}
          fill
          className="object-cover w-full h-full"
        />
      </div>
      <div className="md:max-w-[600px] ">
        <h3 className="text-3xl md:text-[40px] font-light leading-[160%] tracking-[0.03em]">
          {convertNewLines(title)}
        </h3>
        <p className="mt-10 !leading-[250%] tracking-[0.03em] md:text-lg whitespace-pre-line">
          {description}
        </p>
        {(position || name) && (
          <p className="mt-10 text-lg !leading-[250%]">
            {position}
            <br />
            {name}
          </p>
        )}
        {buttonHref && (
          <MoreButton href={buttonHref} className="mt-10" variant="blue" />
        )}
      </div>
    </div>
  );
};

export default AboutSection_02;
