"use client";
import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PrismicRichText } from "./PrismicRichText";

export function Header({ navigation, settings }) {
  const [toggle, setToggle] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

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

  useEffect(() => {
    const body = document.querySelector("body");
    const header = document.getElementById("header");

    if (toggle) {
      header.scrollIntoView();
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
  }, [toggle]);
  

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

const iconsVariants = {
  initial: {
    position: "relative",
    bottom: "0px",
    right: "0px",
  },
  scrolled: {
    position: "fixed",
    bottom: "20px",
    left: "3rem",
    transition: {
      type: "spring",
      damping: 40,
      stiffness: 140,
      duration: 0.5,
    },
  },
};

const soMeColors = () =>{

  if (pathname === "/") {
    if (toggle === true) {
      return true
    }
      if (hasScrolled === true) {
        console.log(false);
        return false;
      } else if (hasScrolled === false) {
        console.log(true);
        return true;
      }
  } else {
    if (toggle === true) {
      return true;
    }
    if (hasScrolled === true) {
         console.log(true);
      return false;
    } else if (hasScrolled === false) {
         
      return false;
    }
  }

}
const iconText = {
  paragraph: ({ children }) => (
    <p
      className={`${
        hasScrolled ? "block" : "max-[1440px]:hidden"
      }`}
    >
      {children}
    </p>
  ),
};
const iconTextMobile = {
  paragraph: ({ children }) => (
    <p
      className={``}
    >
      {children}
    </p>
  ),
};


  return (
    <div
      className={`${
        pathname === "/" ? "absolute z-10" : "relative"
      } left-0 right-0 text-gray-200 w-full flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 leading-none`}
    >
      <div
        className={`md:grid max-md:flex max-md:justify-between md:grid-cols-3 md:p-12 max-md:p-6 justify-items-center max-w-[1440px] mx-auto w-full`}
      >
        <div className="max-md:hidden w-full">
          <motion.ul
            className={`flex gap-4 z-10 ${
              hasScrolled &&
              "bg-white/70 backdrop-blur w-fit px-4 py-4 rounded-lg  justify-center"
            }`}
            initial="initial"
            animate={hasScrolled ? "scrolled" : "initial"}
            variants={iconsVariants}
          >
            {settings.data.slices[0].items.map((item, index) => (
              <li key={index * 18} className="  group">
                <PrismicNextLink
                  field={item.link}
                  className={`flex gap-2 items-center group-hover:text-gray-600 ${
                    soMeColors() ? "text-white" : "text-black"
                  }`}
                >
                  <PrismicNextImage
                    field={item.icon}
                    className={`w-6 h-6 ${
                      soMeColors() ? "invert" : "invert-1"
                    }`}
                  />
                  <PrismicRichText
                    field={item.link_text}
                    components={iconText}
                  />
                </PrismicNextLink>
              </li>
            ))}
          </motion.ul>
        </div>
        <a
          href="/"
          className={`uppercase z-[10] w-full ${
            pathname === "/" || toggle === true ? "text-gray-200" : "text-black"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            if (toggle === true) {
              setToggle(false);
            }
          }}
        >
          <h1 className="text-size_lg">
            <PrismicText field={settings.data.siteTitle} />
          </h1>
        </a>
        <nav className="md:w-full flex justify-end">
          {/* Hamburger Menu */}
          <button
            className={` w-[35px] h-[35px] grid relative cursor-pointer z-[10]`}
            onClick={(e) => {
              e.stopPropagation(); // Stop the event from bubbling up
              setToggle(!toggle);
            }}
          >
            <div
              className={`${
                toggle ? "rotate-45 translate-y-[0.5rem]" : "rotate-0"
              } duration-300 w-full ${
                pathname === "/" || toggle === true ? "bg-gray-200" : "bg-black"
              }  h-[1.5px]`}
            />
            <div
              className={`top-[50%] ${
                toggle ? "opacity-0 rotate-45" : "opacity-100"
              } duration-300 w-full  ${
                pathname === "/" || toggle === true ? "bg-gray-200" : "bg-black"
              }  h-[1.5px]`}
            />
            <div
              className={`${
                toggle ? "rotate-[-45deg] translate-y-[-1rem]" : "rotate-0"
              } duration-300 w-full  ${
                pathname === "/" || toggle === true ? "bg-gray-200" : "bg-black"
              } h-[1.5px]`}
            />
          </button>

          <AnimatePresence>
            {toggle && (
              <div
                id="header"
                className={`absolute z-[9] bg-slate-800/70 left-0 right-0 text-gray-200 max-md:px-8 md:px-12 py-6 h-screen w-screen inset-0
           gap-x-6 gap-y-3 leading-none`}
                onClick={(e) => {
                  e.stopPropagation();
                  setToggle(!toggle);
                }}
              >
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="mt-32 max-w-[1400px] mx-auto flex flex-col gap-6 md:gap-10 text-right"
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
                        className={`hover:text-gray-400 text-gray-200 text-size_md uppercase`}
                      >
                        <PrismicText field={item.label} />
                      </PrismicNextLink>
                    </motion.li>
                  ))}

                  <motion.ul
                    variants={listItemVariants}
                    onClick={(e) => {
                      e.stopPropagation();
                      setToggle(!toggle);
                    }}
                    className="grid gap-4 justify-end mt-8"
                  >
                    {settings.data.slices[0].items.map((item, index) => (
                      <li key={index * 18} className="  group">
                        <PrismicNextLink
                          field={item.link}
                          className={`flex gap-2 justify-end items-center group-hover:text-gray-600 ${
                            soMeColors() ? "text-white" : "text-black"
                          }`}
                        >
                          <PrismicRichText
                            field={item.link_text}
                            components={iconTextMobile}
                          />
                          <PrismicNextImage
                            field={item.icon}
                            className={`w-6 h-6 ${
                              soMeColors() ? "invert" : "invert-1"
                            }`}
                          />
                        </PrismicNextLink>
                      </li>
                    ))}
                  </motion.ul>
                </motion.ul>
              </div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </div>
  );
}
