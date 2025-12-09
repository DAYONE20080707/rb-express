import Footer_01 from "@/components/footer/Footer_01"
import Footer_02 from "@/components/footer/Footer_02"
import Header_01 from "@/components/header/Header_01"
import Header_02 from "@/components/header/Header_02"
import Header_03 from "@/components/header/Header_03"
import Header_04 from "@/components/header/Header_04"
import Header_05 from "@/components/header/Header_05"

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header_05 />
      <main className="flex-1">{children}</main>
      <Footer_01 />
    </div>
  )
}

export default MainLayout
