import Lowerkv_02 from "@/components/lowerkv/Lowerkv_02";
import Privacy1 from "@/components/privacy/Privacy_01"

// 私たちについて
const PrivacyPage = () => {
  return (
    <div>
      <Lowerkv_02
        subTitle="Company"
        mainTitle="会社概要"
        backgroundImage="./common/lowerkv_about.jpg"
      />
      <Privacy1 />
    </div>
  )
}

export default PrivacyPage
