"use client";

import Image from "next/image";
import Breadcrumb from "@/components/ui/module/Breadcrumb";

interface Lowerkv_02Props {
  subTitle?: string;
  mainTitle: string;
  backgroundImage?: string;
  parentDirectoryName?: string;
  parentDirectoryLink?: string;
  breadcrumbTitle?: string;
}

// 私たちについて
const Lowerkv_02 = ({
  subTitle,
  mainTitle,
  backgroundImage = "/common/lowerkv.jpg",
  parentDirectoryName,
  parentDirectoryLink,
  breadcrumbTitle,
}: Lowerkv_02Props) => {
  return (
    <div
      className="h-[300px] md:h-[580px]"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url(${backgroundImage}) lightgray 50% / cover no-repeat`,
      }}
    >
      <div className="md:max-w-[1240px] mx-auto px-5 relative h-full flex flex-col pt-[50px] md:pt-[114px]">
        <Breadcrumb
          mainTitle={breadcrumbTitle || mainTitle}
          parentDirectoryName={parentDirectoryName}
          parentDirectoryLink={parentDirectoryLink}
        />
        <h1 className="mt-14 md:mt-[120px] text-sm md:text-lg font-black tracking-[0.05em] leading-[120%] text-white">
          {subTitle && (
            <span className="block font-en text-3xl md:text-[48px] font-bold mb-1 md:mb-4 ![line-height:120%]">
              {subTitle}
            </span>
          )}
          {mainTitle}
        </h1>
      </div>
    </div>
  );
};

export default Lowerkv_02;
