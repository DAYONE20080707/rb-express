import LowerNews_01 from "@/components/news/news/LowerNews_01";
import Lowerkv_02 from "@/components/lowerkv/Lowerkv_02";
import Cta_03 from "@/components/ui/module/cta/Cta_03";

// よくある質問
const BlogPage = () => {
  return (
    <div>
      <Lowerkv_02
        subTitle="News"
        mainTitle="お知らせ"
        backgroundImage="./common/lowerkv_recruit-list.jpg"
      />
      <LowerNews_01 />
      <Cta_03 />
    </div>
  );
};

export default BlogPage;
