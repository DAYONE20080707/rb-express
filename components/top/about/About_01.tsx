// components/message/About_01.tsx

"use client"

import MoreLinkButton from "@/components/ui/button/MoreButton"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import Image from "next/image"
import AboutSection from "@/components/ui/module/AboutSection_01"
import SectionContent from "@/components/ui/frame/SectionContent"

// メッセージ
const About_01 = () => {
  return (
    <>
      <SectionContent id="about" className="!pb-0 !px-0 bg-accentColor">
        {/* widthがフルサイズでない場合は指定する */}
        <section className="w-full md:max-w-[1240px] mx-auto px-5">
          <ContentHeadline
            subTitle="Who we are"
            mainTitle=""
            subTitleClassName=""
            titleClassName=""
          />
        </section>
        <AboutSection
          title="全国へつながる\n
軽配送ネットワーク"
          description={`株式会社アールビーでは、山梨県内はもちろん全国への配送にも対応しています。
            スポット便からチャーター便まで、急ぎの案件や柔軟な対応が求められる場面でも、確実で安定した配送サービスをご提供しております。
当社のこだわりは、単に荷物を届けるだけではない「誠実で丁寧な応対」。お客様からお預かりした荷物を大切に扱い、気持ちよく取引できる関係性を重視しています。
信頼できる配送パートナーとして、これからも質の高いサービスを目指してまいります。`}
          buttonHref="/about"
          // 以下は任意
          // imageUrl="/path/to/image.jpg"
          // position="代表取締役"
          // name="山田太郎"
        />
      </SectionContent>
    </>
  )
}

export default About_01
