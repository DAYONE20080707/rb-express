import LowerRecruit_01 from "@/components/recruit/recruit/LowerRecruit_01";
import Lowerkv_02 from "@/components/lowerkv/Lowerkv_02";
import Cta_03 from "@/components/ui/module/cta/Cta_03";

// よくある質問
const BlogPage = () => {
  return (
    <div>
      <Lowerkv_02
        subTitle="Recruit"
        mainTitle="採用情報"
        backgroundImage="./common/lowerkv_recruit-list.jpg"
      />
      <LowerRecruit_01 />
      <Cta_03 />
    </div>
  );
};

export default BlogPage;
