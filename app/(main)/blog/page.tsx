import LowerBlog_01 from "@/components/blog/blog/Blog_01";
import LowerBlog_02 from "@/components/blog/blog/Blog_02";
import LowerBlog_03 from "@/components/blog/blog/Blog_03";
import Lowerkv_02 from "@/components/lowerkv/Lowerkv_02";
import Cta_03 from "@/components/ui/module/cta/Cta_03";

// よくある質問
const BlogPage = () => {
  return (
    <div>
      <Lowerkv_02
        subTitle="Company"
        mainTitle="会社概要"
        backgroundImage="./common/lowerkv_about.jpg"
      />
      <LowerBlog_01 />
      <Cta_03 />
    </div>
  );
};

export default BlogPage;
