"use client";

// Admin機能は現在使用していません

// import { componentsConfig } from "@/lib/componentsConfig";
// import Image from "next/image";

// interface SidebarProps {
//   pageName: keyof typeof componentsConfig;
//   selectSection: (section: string, value: string) => void;
//   selectedSections: Record<string, string>;
// }

// const Sidebar = ({
//   pageName,
//   selectSection,
//   selectedSections,
// }: SidebarProps) => {
//   const scrollToSection = (sectionId: string) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       const yOffset = -48; // 12 * 4 (mt-12 のスペースを考慮)
//       const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
//       window.scrollTo({ top: y, behavior: "smooth" });
//     }
//   };

//   const getImageClass = (isSelected: boolean) =>
//     `relative cursor-pointer object-cover ${
//       isSelected ? "border-2 border-blue-300" : ""
//     }`;

//   const overlayClass = (isSelected: boolean) =>
//     isSelected
//       ? "absolute inset-0 bg-blue-300 bg-opacity-50 pointer-events-none"
//       : "absolute inset-0 pointer-events-none";

//   const pageConfig = componentsConfig[pageName];

//   if (!pageConfig) {
//     return null;
//   }

//   return (
//     <>
//       {Object.entries(pageConfig.sections).map(([sectionKey, sectionData]) => (
//         <div key={sectionKey}>
//           <div className="font-bold text-sm">{sectionData.title}</div>
//           <div className="space-y-4">
//             {sectionData.options.map((option) => (
//               <div className="relative" key={option.id}>
//                 <Image
//                   src={option.src}
//                   alt={option.alt}
//                   onClick={() => {
//                     if (selectedSections[sectionKey] === option.id) {
//                       selectSection(sectionKey, "");
//                     } else {
//                       selectSection(sectionKey, option.id);
//                       scrollToSection(`${sectionKey}-section`);
//                     }
//                   }}
//                   className={getImageClass(
//                     selectedSections[sectionKey] === option.id
//                   )}
//                   width={128}
//                   height={72}
//                 />
//                 <div
//                   className={overlayClass(
//                     selectedSections[sectionKey] === option.id
//                   )}
//                 ></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

const Sidebar = (props: any) => {
  return null;
};

export default Sidebar;
