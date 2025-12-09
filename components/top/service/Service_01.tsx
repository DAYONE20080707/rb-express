// components/service/Service_01.tsx
"use client";

import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import ServiceCard from "@/components/ui/ItemCard/ServiceCard_01";
import { serviceData } from "@/components/data/top/ServiceData";
import SectionContent from "@/components/ui/frame/SectionContent";

const Service_01 = () => {
  // 表示するサービス数をserviceDataのIDを指定して表示
  const serviceIdsToDisplay = [1, 2, 3, 4, 5];

  // 指定したIDに基づいてデータをフィルタリング
  const servicesToDisplay = serviceData.filter((service) =>
    serviceIdsToDisplay.includes(service.id)
  );

  return (
    <>
      <SectionContent>
        <section className="md:max-w-[1200px] mx-auto space-y-10">
          <ContentHeadline
            subTitle="Our Service"
            mainTitle={`暮らしとビジネスを支える
              「確実」と「迅速」軽貨物配送サービス`}
          />

          <div className="space-y-8 md:space-y-20">
            {servicesToDisplay.map((service, index) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                subTitle={service.subTitle}
                title={service.title}
                description={service.description}
                image={service.image} // 画像パスを渡す
                href={service.href} // リンク先を渡す
                reverse={index % 2 === 1} // 偶数個目（インデックスが1, 3, 5...）で反転
              />
            ))}
          </div>
        </section>
      </SectionContent>
    </>
  );
};

export default Service_01;
