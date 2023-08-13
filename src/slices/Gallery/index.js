import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Gallery1 from "./gallery1";
import Gallery2 from "./gallery2";
import Gallery3 from "./gallery3";

/**
 * @typedef {import("@prismicio/client").Content.GallerySlice} GallerySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GallerySlice>} GalleryProps
 * @param {GalleryProps}
 */
const Gallery = ({ slice }) => {

  const components = {
    heading2: ({ children }) => (
      <h2 className="mb-0 mt-0 first:mt-0 last:mb-0 text-size_xl uppercase">
        {children}
      </h2>
    ),
  };




  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="md:p-12 max-md:p-6 max-w-[1440px] mx-auto"
    >
      {slice.variation === "default" && (
        <Gallery1 slice={slice} components={components} />
      )}
      {slice.variation === "gallery2" && (
        <Gallery2 slice={slice} components={components} />
      )}
      {slice.variation === "gallery3" && (
        <Gallery3 slice={slice} components={components} />
      )}
    </section>
  );
};

export default Gallery;
