"use client";
import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextLink } from "@prismicio/next";
import { nanoid } from "nanoid";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * @typedef {import("@prismicio/client").Content.ProjectNavigationSlice} ProjectNavigationSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectNavigationSlice>} ProjectNavigationProps
 * @param {ProjectNavigationProps}
 */
const ProjectNavigation = ({ slice }) => {
  const pathname = usePathname();

 const components = {
   heading2: ({ children }) => (
     <h2 className="first:mt-0 last:mb-0 text-size_md  decoration-1 decoration-gray-500 underline-offset-4">
       {children}
     </h2>
   ),

 };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="p-6 max-w-[1400px] mx-auto"
    >
      <div className="flex gap-8 flex-wrap justify-evenly max-w-fit mx-auto">
        {slice.items.map((item, index) => {

          let title = slice.items[index].projectcategorie[0].text.toLowerCase();
         
          if (title === "film & tv") {
            title = "film-tv";
          }
          //console.log(slice.items[index].projectcategorie[0].text);
          return (
            <PrismicNextLink
              key={nanoid()}
              field={item.link}
              className={`${
                pathname.substring(1) == title &&
                "underline underline-offset-4 decoration-1"
              } uppercase`}
            >
              <PrismicRichText
                field={item.projectcategorie}
                components={components}
              />
            </PrismicNextLink>
          );
})}
      </div>
    </section>
  );
};

export default ProjectNavigation;
