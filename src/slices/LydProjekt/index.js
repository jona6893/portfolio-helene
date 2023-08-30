import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextLink } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.LydProjektSlice} LydProjektSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LydProjektSlice>} LydProjektProps
 * @param {LydProjektProps}
 */
const LydProjekt = ({ slice }) => {

   const components = {
     heading2: ({ children }) => (
       <h2 className="first:mt-0 last:mb-0 text-size_md decoration-1 decoration-gray-500 underline-offset-4">
         {children}
       </h2>
     ),
     heading3: ({ children }) => (
       <h3 className="first:mt-0 last:mb-0 text-size_base text-gray-600">
         {children}
       </h3>
     ),
   };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="md:px-12 max-md:px-6 max-w-[1400px] mx-auto"
    >
      <a
        id={slice.primary.title[0].text.split(" ").join("")}
        href={"#" + slice.primary.title[0].text.split(" ").join("")}
        className="group hover:bg-gray-100 md:grid md:grid-cols-3 max-md:flex flex-col items-center max-md:gap-4 md:gap-8 mb-4 text-center"
      >
        <div className="flex flex-col md:items-start max-md:items-center max-md:col-start-1 max-md:row-start-1">
          <PrismicRichText
            field={slice.primary.title}
            components={components}
          />
          <PrismicRichText
            field={slice.primary.text_1}
            components={components}
          />
        </div>
        <div className="flex justify-start max-md:col-start-1 max-md:row-start-1">
          <PrismicRichText
            field={slice.primary.text_2}
            components={components}
          />
        </div>

        {slice.primary.lyd_fil?.url && (
          <audio className="group-hover:bg-gray-100 w-full" controls>
            <source src={slice.primary.lyd_fil.url} type="audio/mpeg"></source>
          </audio>
        )}
      </a>
    </section>
  );
};

export default LydProjekt;
