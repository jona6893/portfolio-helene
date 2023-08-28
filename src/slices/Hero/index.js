"use client"
import * as prismic from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { useRouter } from "next/router";
import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { PrismicRichText } from "@/components/PrismicRichText";

/** @type {import("@prismicio/react").PrismicRichTextProps['components']} */
const components = {
  heading1: ({ children }) => (
    <Heading as="h2" size="xl" className="mb-4 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
};

const Hero = async ({ slice }) => {

console.log();

 
  const backgroundImage = slice.primary.backgroundImage;

  return (
    <section className="relative bg-slate-900 text-white h-screen">
      <a
        href={slice.primary.link_to_project.url}
        className="absolute z-[1] h-screen w-screen inset-0 bg-gradient-to-b from-slate-800/60 to-slate/0"
      ></a>
      {prismic.isFilled.image(backgroundImage) && (
        <PrismicNextImage
          field={backgroundImage}
          alt=""
          fill={true}
          className="pointer-events-none select-none object-cover"
        />
      )}
    {/*   <ul className="fixed top-[0%] left-[0%] right-0 mx-auto justify-left w-full z-[1] flex flex-wrap gap-8 p-12 max-w-[1440px]">
        {slice.items.map((item, index) => (
          <li key={index * 18} className=" mb-3 group">
            <PrismicNextLink
              field={item.link}
              className="flex gap-2 items-center group-hover:text-gray-600 "
            >
              <PrismicNextImage field={item.icon} className="w-6 h-6 invert" />
              <PrismicRichText field={item.link_text} />
            </PrismicNextLink>
          </li>
        ))}
      </ul> */}
    </section>
  );
};

export default Hero;
