import Lowerkv_02 from "@/components/lowerkv/Lowerkv_02";
import NewsDetail_01 from "@/components/news/newsDetail/NewsDetail_01";
import { newsFetch } from "@/lib/api/newsFetch";

interface NewsDetailPageProps {
  params: Promise<{ id: string }>;
}

const NewsDetailPage = async ({ params }: NewsDetailPageProps) => {
  const { id } = await params;
  const post = await newsFetch.get(id);

  return (
    <>
      <Lowerkv_02
        subTitle="Recruit"
        mainTitle="採用情報"
        backgroundImage="/common/lowerkv_recruit-detail.jpg"
        parentDirectoryName="採用情報"
        parentDirectoryLink="/recruit"
        breadcrumbTitle={post?.title}
      />
      <NewsDetail_01 params={{ id }} />
    </>
  );
};

export default NewsDetailPage;
