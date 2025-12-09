// components/message/Message_03.tsx

"use client";

import MoreLinkButton from "@/components/ui/button/MoreButton";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import SectionContent from "@/components/ui/frame/SectionContent";
import Image from "next/image";

// メッセージ
const Message_03 = () => {
  return (
    <>
      <SectionContent>
        {/* widthがフルサイズでない場合は指定する */}
        <section className=" md:max-w-[1200px] mx-auto ">
          <ContentHeadline subTitle="Who we are" mainTitle="私たちについて" />
          <div className=" mt-16 flex justify-start space-x-20">
            <div className="w-[600px]">
              <h3 className="text-5xl ">見出しテキスト</h3>
              <p>
                メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。
                メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。
                メッセージはいります。メッセージはいります。
                メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。
                メッセージはいります。メッセージはいります。
              </p>
              <MoreLinkButton href="/" />
            </div>
            <div className=" w-[520px] h-[767px] relative">
              <Image
                src="/top/message/message_img.jpg"
                alt="message"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </SectionContent>
    </>
  );
};

export default Message_03;
