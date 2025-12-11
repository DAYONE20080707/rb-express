// components/message/About_01.tsx

"use client";

import MoreLinkButton from "@/components/ui/button/MoreButton";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import PageContent from "@/components/ui/frame/PageContent";
import SectionContent from "@/components/ui/frame/SectionContent";
import Image from "next/image";
import AboutSection from "@/components/ui/module/AboutSection_01";

// メッセージ
const About_01 = () => {
  return (
    <>
      <div className="bg-accentColor py-16 md:py-[120px]">
        <div className="md:flex items-start justify-between md:max-w-[1240px] mx-auto gap-10 px-5">
          <div className="md:w-[500px]">
            <ContentHeadline
              subTitle="Message"
              mainTitle={`信頼を運ぶ、
物流の未来へ`}
              subTitleClassName=""
              titleClassName=""
              variant="light"
            />
          </div>

          <div>
            <p className="text-white w-full md:max-w-[660px] leading-[180%] md:leading-[250%] text-base md:text-lg mt-10 md:mt-0 whitespace-pre-line tracking-[0.03em]">
              株式会社アールビーのホームページをご覧いただき、誠にありがとうございます。当社は山梨県甲府市を拠点に、スポット便・チャーター便・宅配など、お客様のニーズに合わせた軽貨物配送サービスを提供しております。山梨県内はもちろん、全国への配送にも柔軟に対応しています。私たちが大切にしているのは、「丁寧な対応」「確実な配送」「安心して任せられるサービス」です。お預かりした荷物を安全にお届けするのはもちろん、「またお願いしたい」と感じていただける対応を心がけています。代表自ら現場に立ち、取引先様への挨拶回りも行うなど、マナーと誠実さを大切にした姿勢は、当社のサービスの土台です。その姿勢を全スタッフで共有し、より良いサービスを追求しています。また、事業拡大に伴い新しい仲間の募集も行っています。未経験の方でも安心して働けるよう、サポート体制を整えています。これからも地域の皆さま、そして全国のお客様に信頼される会社を目指し、一つひとつの配送に真心を込めて取り組んでまいります。
            </p>
            <p className="text-white mt-10 text-base md:text-lg !leading-[250%] tracking-[0.03em] text-right">
              株式会社　アールビー
            </p>
          </div>
        </div>
      </div>
      <section className="md:w-full h-[250px] md:h-[560px] mx-auto flex justify-center relative ">
        <Image
          src="/about/about.jpg"
          alt="about"
          fill
          className="object-cover"
        />
      </section>
    </>
  );
};

export default About_01;
