"use client";
import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Header({ navigation, settings }) {
  const [toggle, setToggle] = useState(false)

  const pathname = usePathname();
 
  const listItemVariants = {
    visible: (index) => ({
      opacity: 1,
      transition: {
        delay: index * 0.2,
      },
    }),
    hidden: { opacity: 0 },
  };



  return (
    <div
      className={`${
        pathname === "/" ? "absolute z-10" : "relative"
      } left-0 right-0 text-gray-200 max-md:px-8 md:px-12 py-6 w-full flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 leading-none`}
    >
      <div className="flex justify-between max-w-[1400px] mx-auto w-full">
        <PrismicNextLink
          href="/"
          className={`text-size_md uppercase z-[1] ${
            pathname === "/" || toggle === true ? "text-gray-200" : "text-black"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            if (toggle === true) {
              setToggle(false);
            }
          }}
        >
          <PrismicText field={settings.data.siteTitle} />
        </PrismicNextLink>
        <nav className="">
          {/* Hamburger Menu */}
          <button
            className="w-[25px] h-[25px] grid relative cursor-pointer z-[1]"
            onClick={(e) => {
              e.stopPropagation(); // Stop the event from bubbling up
              setToggle(!toggle);
            }}
          >
            <div
              className={`${
                toggle ? "rotate-45 translate-y-2.5" : "rotate-0"
              } duration-300 w-full ${
                pathname === "/" || toggle === true ? "bg-gray-200" : "bg-black"
              }  h-[1px]`}
            />
            <div
              className={`top-[50%] ${
                toggle ? "opacity-0 rotate-45" : "opacity-100"
              } duration-300 w-full  ${
                pathname === "/" || toggle === true ? "bg-gray-200" : "bg-black"
              }  h-[1px]`}
            />
            <div
              className={`${
                toggle ? "rotate-[-45deg] translate-y-[-0.425rem]" : "rotate-0"
              } duration-300 w-full  ${
                pathname === "/" || toggle === true ? "bg-gray-200" : "bg-black"
              } h-[1px]`}
            />
          </button>

          <AnimatePresence>
            {toggle && (
              <div
                className={`absolute left-0 right-0 text-gray-200 max-md:px-8 md:px-12 py-6 h-screen w-screen inset-0
          bg-gradient-to-b from-slate-800/50 to-slate-800/50 gap-x-6 gap-y-3 leading-none`}
                onClick={(e) => {
                  e.stopPropagation();
                  setToggle(!toggle);
                }}
              >
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="mt-32 max-w-[1400px] flex flex-col gap-6 md:gap-10 text-right"
                >
                  {navigation.data?.links.map((item, index) => (
                    <motion.li
                      key={prismic.asText(item.label)}
                      className=" "
                      custom={index}
                      variants={listItemVariants}
                      onClick={(e) => {
                        e.stopPropagation();
                        setToggle(!toggle);
                      }}
                    >
                      <PrismicNextLink
                        field={item.link}
                        className={`hover:text-gray-400 text-gray-200 text-size_md`}
                      >
                        <PrismicText field={item.label} />
                      </PrismicNextLink>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </div>
  );
}
