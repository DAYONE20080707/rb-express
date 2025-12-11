import Lowerkv_02 from "@/components/lowerkv/Lowerkv_02";
import About_01 from "@/components/service/about/About_01";
import About_02 from "@/components/service/about/About_02";
import About_03 from "@/components/service/about/About_03";
import About_04 from "@/components/service/about/About_04";
import Service1_01 from "@/components/service/service1/Service_01";
import Service1_02 from "@/components/service/service1/Service_02";
import Service1_03 from "@/components/service/service1/Service_03";
import Service2_01 from "@/components/service/service2/Service_01";
import Service2_02 from "@/components/service/service2/Service_02";
import Service2_03 from "@/components/service/service2/Service_03";
import Service3_01 from "@/components/service/service3/Service_01";
import Service3_02 from "@/components/service/service3/Service_02";
import Service3_03 from "@/components/service/service3/Service_03";
import Cta_03 from "@/components/ui/module/cta/Cta_03";

// 事業内容
const ServicePage = () => {
  return (
    <div>
      <Lowerkv_02
        subTitle="Company"
        mainTitle="会社概要"
        backgroundImage="./common/lowerkv_about.jpg"
      />
      <About_01 />
      <Service1_01/>
      <Service2_01/>
      <Service3_01/>
      <Cta_03 />
    </div>
  );
};

export default ServicePage;
