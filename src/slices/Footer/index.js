import { PrismicRichText } from "@/components/PrismicRichText";

/**
 * @typedef {import("@prismicio/client").Content.FooterSlice} FooterSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FooterSlice>} FooterProps
 * @param {FooterProps}
 */
const Footer = ({ slice }) => {

  const components = {
    heading4: ({ children }) => (
      <h4 className="mb-4 mt-12 first:mt-0 last:mb-0 text-size_base">
        {children}
      </h4>
    ),
  };


  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="p-12 max-w-[1440px] mx-auto"
    >
      <PrismicRichText field={slice.primary.text} components={components} />
    </section>
  );
};

export default Footer;
