import Lowerkv_02 from "@/components/lowerkv/Lowerkv_02";
import About_01 from "@/components/about/about/About_01";
import About_02 from "@/components/about/about/About_02";
import About_03 from "@/components/about/about/About_03";
import About_04 from "@/components/about/about/About_04";
import Profile_03 from "@/components/about/profile/Profile_03";
import Cta_03 from "@/components/ui/module/cta/Cta_03";

// 私たちについて
const AboutPage = () => {
  return (
    <div>
      <Lowerkv_02
        subTitle="Company"
        mainTitle="会社概要"
        backgroundImage="./common/lowerkv_about.jpg"
      />
      <About_01 />
      <Profile_03 />
      <Cta_03/>
    </div>
  );
};

export default AboutPage;
