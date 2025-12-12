import Lowerkv_02 from "@/components/lowerkv/Lowerkv_02";
import Contact_01 from "@/components/contact/contact/Contact_01";
import Cta_03 from "@/components/ui/module/cta/Cta_03";

// お問い合わせ
const ContactPage = () => {
  return (
    <div>
      <Lowerkv_02
        subTitle="Contact"
        mainTitle="お問い合わせ"
        backgroundImage="/common/lowerkv_contact.jpg"
      />
      <Contact_01 />
      <Cta_03 />
    </div>
  );
};

export default ContactPage;
