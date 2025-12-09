// components/ui/frame/ContentHeadline.tsx
import React from "react";
import classNames from "classnames";
import { ContentHeadlineProps } from "@/types";
import Image from "next/image";

const ContentHeadline: React.FC<ContentHeadlineProps> = ({
  mainTitle,
  description,
  subTitle,
  className = "",
  titleClassName = "",
  subTitleClassName = "",
  ImageSrc,
  ImageWidth,
  ImageHeight,
  id,
}) => {
  return (
    <section
      id={id}
      className={classNames(
        "w-full md:max-w-[1200px] mb-12 md:mb-16 tracking-wide",
        className
      )}
    >
      {ImageSrc && (
        <Image
          src={ImageSrc}
          width={ImageWidth}
          height={ImageHeight}
          alt={String(mainTitle)}
          className="mb-4"
        />
      )}
      <p
        className={classNames(
          "text-sm md:text-lg font-extrabold tracking-[0.03em] font-en text-accentLight",
          subTitleClassName
        )}
      >
        {subTitle}
      </p>
      <h1
        className={classNames(
          "text-4xl md:text-[40px] leading-[150%] mt-2 md:mt-5 tracking-[0.05em] font-semibold text-accentColor whitespace-pre-line",
          titleClassName
        )}
      >
        {mainTitle}
      </h1>

      {description && <h2>{description}</h2>}
    </section>
  );
};

export default ContentHeadline;
