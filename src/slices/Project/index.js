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
  //console.log(slice);
  let photos = []
  slice.items.forEach(item => {
    photos.push({src: item.image.url, width:item.image.dimensions?.width, height: item.image.dimensions?.height})

  })

  const components = {
    heading2: ({ children }) => (
      <h2 className="first:mt-0 last:mb-0 text-size_md decoration-1 decoration-gray-500 underline-offset-4">
        {children}
      </h2>
    ),
    heading3: ({ children }) => (
      <h3 className="first:mt-0 last:mb-0 text-size_base text-gray-600">{children}</h3>
    ),
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="md:p-12 max-md:p-6 max-w-[1400px] mx-auto"
    >
      <div className="flex flex-wrap items-center justify-evenly max-md:gap-4 md:gap-8 mb-4 text-center">
        <PrismicRichText field={slice.primary.title} components={components} />
        <PrismicRichText field={slice.primary.text_1} components={components} />
        <PrismicRichText field={slice.primary.text_2} components={components} />
      </div>
      <div className="grid grid-cols-3 md:gap-6 max-md:gap-3 max-w-[1400px] md:auto-rows-[minmax(0,350px)] max-md:auto-rows-[minmax(0,150px)]">
        {slice.items.map((item, index) => {
          const totalImages = slice.items.length;
          const isOddNumber = totalImages % 2 !== 0;
          let colSpan;

          if (isOddNumber && index === totalImages - 1) {
            colSpan = "col-span-3 ";
          } else {
            if (isOddNumber) {
              switch (index % 5) {
                case 0:
                case 3:
                  colSpan = "col-span-1";
                  break;
                case 1:
                case 2:
                  colSpan = "col-span-2";
                  break;
                case 4:
                  colSpan = "col-span-3";
                  break;
                default:
                  colSpan = "col-span-1";
                  break;
              }
            } else {
              switch (index % 4) {
                case 0:
                case 3:
                  colSpan = "col-span-1";
                  break;
                case 1:
                case 2:
                  colSpan = "col-span-2";
                  break;
                default:
                  colSpan = "col-span-1";
                  break;
              }
            }
          }

          return (
            <div className={`${colSpan} w-full h-full`}>
              <Image
                src={item.image.url}
                objectFit="cover"
                width={item.image.dimensions?.width}
                height={item.image.dimensions?.height}
                className={`${colSpan} w-full h-full object-cover object-center`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
