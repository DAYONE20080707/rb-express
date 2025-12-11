import Lowerkv_02 from "@/components/lowerkv/Lowerkv_02";
import RecruitDetail_01 from "@/components/recruit/recruitDetail/RecruitDetail_01";
import { blogsFetch } from "@/lib/api/blogsFetch";

interface RecruitDetailPageProps {
  params: Promise<{ id: string }>;
}

const RecruitDetailPage = async ({ params }: RecruitDetailPageProps) => {
  const { id } = await params;
  const post = await blogsFetch.get(id);

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
      <RecruitDetail_01 params={{ id }} />
    </>
  );
};

export default RecruitDetailPage;
