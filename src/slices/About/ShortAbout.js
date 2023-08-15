import { PrismicRichText } from '@/components/PrismicRichText';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import React from 'react'

function ShortAbout({title, text, slice}) {
  return (
    <div className="md:grid max-md:flex flex-col gap-4 grid-cols-2 grid-rows-1">
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
  );
}

export default ShortAbout