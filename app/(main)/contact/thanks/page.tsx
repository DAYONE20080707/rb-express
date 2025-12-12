import Thanks_01 from "@/components/contact/thanks/Thanks_01";
import Lowerkv_02 from "@/components/lowerkv/Lowerkv_02";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import PageContent from "@/components/ui/frame/PageContent";
import PageHeadline from "@/components/ui/frame/PageHeadline";
import Breadcrumb from "@/components/ui/module/Breadcrumb";
import Aside_01 from "@/components/ui/module/aside/Aside_01";
import Cta_03 from "@/components/ui/module/cta/Cta_03";

// お問い合わせ完了
const ThanksPage = () => {
  return (
    <div>
      <Lowerkv_02
        subTitle="Contact"
        mainTitle="お問い合わせ"
        backgroundImage="/common/lowerkv_contact.jpg"
      />
      <Thanks_01 />
      <Cta_03 />
    </div>
  );
};

export default ThanksPage;
