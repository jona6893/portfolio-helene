"use client";
import { PrismicRichText } from "@/components/PrismicRichText";
import PhotoAlbum from "react-photo-album";
import { nanoid } from "nanoid";
import Image from "next/image";
/**
 * @typedef {import("@prismicio/client").Content.ProjectSlice} ProjectSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectSlice>} ProjectProps
 * @param {ProjectProps}
 */
const Project = ({ slice }) => {
  console.log(slice);
  let photos = []
  slice.items.forEach(item => {
    photos.push({src: item.image.url, width:item.image.dimensions.width, height: item.image.dimensions.height})

  })

  const components = {
    heading2: ({ children }) => (
      <h2 className="first:mt-0 last:mb-0 text-size_md underline decoration-1 decoration-gray-500 underline-offset-4">
        {children}
      </h2>
    ),
    heading3: ({ children }) => (
      <h3 className="first:mt-0 last:mb-0 text-size_base">{children}</h3>
    ),
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="md:p-12 max-md:p-6 max-w-[1400px] mx-auto"
    >
      <div className="flex flex-wrap items-center justify-evenly max-md:gap-4 md:gap-8 mb-4">
        <PrismicRichText field={slice.primary.text_1} components={components} />
        <PrismicRichText field={slice.primary.title} components={components} />
        <PrismicRichText field={slice.primary.text_2} components={components} />
      </div>
      <div className="">
        <PhotoAlbum layout="rows" photos={photos} />
      </div>
    </section>
  );
};

export default Project;
