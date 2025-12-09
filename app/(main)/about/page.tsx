import Lowerkv_01 from "@/components/lowerkv/Lowerkv_01"
import Lowerkv_02 from "@/components/lowerkv/Lowerkv_02"
import Lowerkv_03 from "@/components/lowerkv/Lowerkv_03"
import Lowerkv_04 from "@/components/lowerkv/Lowerkv_04"
import About_01 from "@/components/about/about/About_01"
import About_02 from "@/components/about/about/About_02"
import About_03 from "@/components/about/about/About_03"
import About_04 from "@/components/about/about/About_04"
import Purpose_01 from "@/components/about/purpose/Purpose_01"
import History_01 from "@/components/about/history/History_01"
import Message_01 from "@/components/about/message/Message_01"
import Message_02 from "@/components/about/message/Message_02"
import Message_03 from "@/components/about/message/Message_03"
import Message_04 from "@/components/about/message/Message_04"
import Profile_01 from "@/components/top/profile/Profile_01"
import Profile_02 from "@/components/top/profile/Profile_02"
import Profile_03 from "@/components/top/profile/Profile_03"
import Profile_04 from "@/components/top/profile/Profile_04"

// 私たちについて
const AboutPage = () => {
  return (
    <div>
      <Lowerkv_02 
       subTitle="Company" 
       mainTitle="会社概要" 
       backgroundImage="./common/lowerkv_about.jpg"/>
      <About_01 />
      <Purpose_01 />
      <History_01 />
      <Message_01 />
      <Profile_01 />
    </div>
  )
}

export default AboutPage
