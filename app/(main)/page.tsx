import KeyVisual_01 from "@/components/top/kv/KeyVisual_01";
import About_01 from "@/components/top/about/About_01";
import Service_01 from "@/components/top/service/Service_01";
import News_01 from "@/components/top/news/News_01";
import Blog_01 from "@/components/top/blog/Blog_01";
import Cta_03 from "@/components/ui/module/cta/Cta_03";


// メインページ
const HomePage = () => {
  return (
    <div>
      <KeyVisual_01 />
      <About_01 />
      <div id="service">
        <Service_01 />
      </div>
      <News_01 />
      <Cta_03 />
    </div>
  );
};

export default HomePage;
