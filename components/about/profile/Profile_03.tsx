// components/profile/Profile_03.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import ProfileCard from "@/components/ui/ItemCard/ProfileCard_01";
import SectionContent from "@/components/ui/frame/SectionContent";

const Profile_03 = () => {
  return (
    <>
      <SectionContent className="">
        <section className="md:max-w-[1200px] mx-auto md:flex ">
          <div className="md:w-1/2">
            <ContentHeadline subTitle="Company Profile" mainTitle="会社概要" />
          </div>

          <div className="md:w-1/2 ">
            <div className="space-y-5">
              <ProfileCard label="社名" value="株式会社アールビー" />
              <ProfileCard label="代表者" value="蘆澤　政詩" />
              <ProfileCard
                label="所在地"
                value={`〒400-0027 山梨県甲府市富士見1−2−13`}
              />
              <ProfileCard label="設立" value="2024年6月24日" />
              <ProfileCard label="資本金" value="1,000,000円" />

              <ProfileCard label="Tel・Fax" value="055−244−3646" />
              <ProfileCard
                label="ホームページ　URL"
                value="URLが入ります。URLが入ります。URLが入ります。"
              />

              <ProfileCard label="法人番号" value="7090001018794" />
            </div>
          </div>
        </section>
      </SectionContent>
      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.827853707453!2d139.76454987585436!3d35.68124052997326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sfr!4v1728031590235!5m2!1sja!2sfr"
          width="1200"
          height="500"
          style={{ border: "0" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />
      </div>
    </>
  );
};

export default Profile_03;
