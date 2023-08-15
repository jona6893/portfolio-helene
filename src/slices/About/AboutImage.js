import { PrismicRichText } from '@/components/PrismicRichText';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import React from 'react'

function AboutImage({ title, text, slice }) {

  return (
    <div className="md:grid max-md:flex flex-col gap-4 grid-cols-2 grid-rows-1 min-h-[500px]">
      <div className="col-start-1 row-start-1 grid gap-8">
        <PrismicRichText field={slice.primary.title} components={title} />
        <div className="col-start-1">
          <PrismicRichText field={slice.primary.text} components={text} />
        </div>
        <ul className="">
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
      <PrismicNextImage field={slice.primary.image} className='h-full w-full object-cover object-center' />
    </div>
  );
}

export default AboutImage;