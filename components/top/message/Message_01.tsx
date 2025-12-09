// components/message/Message_01.tsx

"use client";

import MoreLinkButton from "@/components/ui/button/MoreButton";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import SectionContent from "@/components/ui/frame/SectionContent";
import Image from "next/image";

// メッセージ
const Message_01 = () => {
  return (
    <>
      <SectionContent>
        {/* widthがフルサイズでない場合は指定する */}
        <section className=" md:max-w-[1200px] mx-auto ">
          <ContentHeadline subTitle="Who we are" mainTitle="私たちについて" />
          <div className=" flex justify-start mt-16">
            <h3 className=" w-[500px] text-5xl ">見出しテキスト</h3>
            <div>
              <p className=" w-[660px]">
                メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。
                メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。
                メッセージはいります。メッセージはいります。
                メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。
                メッセージはいります。メッセージはいります。
              </p>
              <MoreLinkButton href="/" />
            </div>
          </div>
        </section>
        <section className="w-[95%] h-[380px] mx-auto mt-24  flex justify-center relative">
          <Image
            src="/top/message/message_img.jpg"
            alt="message"
            fill
            className="object-cover"
          />
        </section>
      </SectionContent>
    </>
  );
};

export default Message_01;
