import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import ShortAbout from "./ShortAbout";
import AboutImage from "./AboutImage";

/**
 * @typedef {import("@prismicio/client").Content.AboutSlice} AboutSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutSlice>} AboutProps
 * @param {AboutProps}
 */
const About = ({ slice }) => {

const title = {
  heading3: ({ children }) => <h3 className="text-size_lg uppercase">{children}</h3>,
};
const text = {
  heading3: ({ children }) => (
    <h3 className="text-size_lg col-start-2 row-span-2">{children}</h3>
  ),
  heading4: ({ children }) => (
    <h4 className="text-size_md col-start-2 rrow-span-2">{children}</h4>
  ),
  heading5: ({ children }) => (
    <h5 className="text-size_md col-start-2 row-span-2">{children}</h5>
  ),
  heading6: ({ children }) => (
    <h6 className="text-size_md col-start-2 row-span-2">{children}</h6>
  ),
  paragraph: ({ children }) => (
    <p className="text-size_base col-start-2 row-span-2 leading-10	">
      {children}
    </p>
  ),
};

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="md:p-12 max-md:p-6 max-w-[1440px] mx-auto"
    >
      {slice.variation === "default" && (
        <ShortAbout title={title} text={text} slice={slice} />
      )}{" "}
      {slice.variation === "kontaktMedBillede" && (
        <AboutImage title={title} text={text} slice={slice} />
      )}
    </section>
  );
};

export default About;
