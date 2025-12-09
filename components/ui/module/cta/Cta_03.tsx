// components/module/cta/Cta_03.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import PageContent from "@/components/ui/frame/PageContent";
import FreeButtonWhite from "@/components/ui/button/FreeButtonWhite";
import SectionContent from "../../frame/SectionContent";
import MoreLinkButton from "../../button/MoreButton";

const Cta_03 = () => {
  return (
    <>
      <SectionContent className="!py-0 !px-0 ">
        <section className="mx-auto grid md:grid-cols-2 overflow-hidden">
          <div className="text-white text-center bg-accentColor py-10 md:py-16 px-5">
            <p className="md:text-lg font-semibold mb-1 md:mb-4 font-en text-accentLight2">
              Recruit
            </p>
            <h4 className="text-3xl md:text-[40px] leading-[120%]">採用情報</h4>
            <p className="md:text-lg md:mt-12 leading-[160%]">
              採用情報一覧はこちらから
            </p>
            <div className="flex justify-center mt-6">
              <MoreLinkButton href="#service" className="md:!w-[350px]">
                view more
              </MoreLinkButton>
            </div>
          </div>
          <div className="text-white text-center bg-accentLight py-10 md:py-16 px-5">
            <p className="md:text-lg font-semibold mb-1 md:mb-4 font-en text-accentLight2">
              Contact
            </p>
            <h4 className="text-3xl md:text-[40px] leading-[120%]">
              お問い合わせ
            </h4>
            <p className="md:text-lg md:mt-12 leading-[160%]">
              求人お問い合わせはこちらから
            </p>
            <div className="flex justify-center mt-6">
              <MoreLinkButton href="/contact" className="md:!w-[350px]" variant="light">
                view more
              </MoreLinkButton>
            </div>
          </div>
        </section>
      </SectionContent>
    </>
  );
};

export default Cta_03;
