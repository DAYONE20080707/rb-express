"use client";

// Admin機能は現在使用していません

// import { ReactNode, useState } from "react"
// import { Menu } from "lucide-react"
// import { useStore } from "@/store/useStore"
// import { componentsConfig } from "@/lib/componentsConfig"
// import Navigation from "@/components/admin/Navigation"

// interface AdminLayoutProps {
//   children: ReactNode
//   sidebarContent: (props: any) => ReactNode
//   pageName: keyof typeof componentsConfig
// }

// const AdminLayout = ({
//   children,
//   sidebarContent,
//   pageName,
// }: AdminLayoutProps) => {
//   const [isSidebarVisible, setIsSidebarVisible] = useState(true)
//   const selectSection = useStore((state) => state.selectSection)
//   const selectedSections = useStore((state) => state.selectedSections)

//   const toggleSidebar = () => {
//     setIsSidebarVisible((prevState) => !prevState)
//   }

//   return (
//     <div className="flex">
//       {isSidebarVisible && <Navigation />}

//       <div className="fixed top-1 left-2 z-20">
//         <div className="bg-gray-50 p-1.5 rounded">
//           <Menu className="w-7 h-7 cursor-pointer" onClick={toggleSidebar} />
//         </div>
//       </div>

//       {isSidebarVisible && (
//         <aside className="w-40 mt-12 bg-gray-50 p-4 space-y-5 fixed h-[calc(100vh-3rem)] z-10 overflow-y-auto border-r">
//           {sidebarContent({ selectSection, selectedSections, pageName })}
//         </aside>
//       )}

//       <main
//         className={`flex-1 transition-all duration-300  w-screen md:w-auto ${
//           isSidebarVisible ? "ml-40 mt-12" : "ml-0 mt-0"
//         }`}
//       >
//         {children}
//       </main>
//     </div>
//   )
// }

import { ReactNode } from "react";

interface AdminLayoutProps {
  children: ReactNode;
  sidebarContent?: (props: any) => ReactNode;
  pageName?: any;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return <div>{children}</div>;
};

export default AdminLayout;
