import { PrismicRichText } from '@/components/PrismicRichText';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import React from 'react'

function Gallery2({slice, components}) {
  return (
    <div className="md:grid max-md:flex flex-col gap-12 grid-cols-3 grid-rows-2 md:max-h-[1400px] md:min-h-[800px] md:h-screen">
      <div className="col-start-1 row-start-1">
        <PrismicNextImage
          field={slice.primary.image_1}
          className="object-cover w-full h-full object-center"
        />
      </div>
      <div className="col-start-2 col-span-2 row-start-1 group">
        <PrismicNextImage
          field={slice.primary.image_2}
          className="object-cover w-full h-full object-center "
        />
      </div>
      <div className="col-start-1 col-span-2 row-start-2">
        <PrismicNextImage
          field={slice.primary.image_3}
          className="object-cover w-full h-full object-center"
        />
      </div>
      <div className="col-start-3 row-start-2 row-start-2">
        <PrismicNextImage
          field={slice.primary.image_4}
          className="object-cover w-full h-full object-center"
        />
      </div>
      <div className="col-start-3 row-start-3 flex justify-end items-end">
        <PrismicNextLink
          field={slice.primary.link}
          className="flex flex-col items-end hover:text-gray-600"
        >
          <PrismicRichText
            field={slice.primary.title}
            components={components}
          />
          <div className="w-full flex justify-end ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-14 h-14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H1"
              />
            </svg>
          </div>
        </PrismicNextLink>
      </div>
    </div>
  );
}

export default Gallery2