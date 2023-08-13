import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

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
      <div className="md:grid max-md:flex flex-col gap-4 grid-cols-2 grid-rows-1 px-4">
        <div className="col-start-1 row-start-1 grid gap-8">
          <PrismicRichText field={slice.primary.title} components={title} />
          <ul className="md:block max-md:hidden">
            {slice.items.map((item, index) => (
              <li className=" mb-3 group">
                <PrismicNextLink
                  field={item.link}
                  className="flex gap-4 items-center group-hover:text-gray-600"
                >
                  <PrismicNextImage field={item.icon} className="w-6 h-6" />
                  <PrismicRichText field={item.link_text} />
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </div>
        <PrismicRichText field={slice.primary.text} components={text} />
        <ul className="md:hidden max-md:block">
          {slice.items.map((item, index) => (
            <li className=" mb-3 group">
              <PrismicNextLink
                field={item.link}
                className="flex gap-4 items-center group-hover:text-gray-600"
              >
                <PrismicNextImage field={item.icon} className="w-6 h-6" />
                <PrismicRichText field={item.link_text} />
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
