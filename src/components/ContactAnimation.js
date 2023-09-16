import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import React, { useEffect } from 'react'
import { motion } from "framer-motion";
import { PrismicRichText } from './PrismicRichText';
function ContactAnimation({
  hasScrolled,
  setHasScrolled,
  settings,
  soMeColors,
  iconText,
}) {
  /* Animation Scroll conditions */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
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

  /* Animation KeyFrames */
  const iconsVariants = {
    initial: {
      position: "relative",
      bottom: "0px",
      right: "0px",
      background: "transparent",
      width: "max-content",
    },
    scrolled: {
      position: "fixed",
      background: "white",
      bottom: "2rem",
      left: "3rem",
      width: "max-content",
      transition: {
        type: "spring",
        damping: 50,
        stiffness: 180,
        duration: 0.3,
      },
    },
  };

  return (
    <motion.ul
      className={`flex gap-4 z-10 ${
        hasScrolled > 0.1 ? "w-max px-4 py-4 rounded-lg justify-center" : ""
      }`}
      initial="initial"
      animate={hasScrolled ? "scrolled" : "initial"}
      variants={iconsVariants}
    >
      {settings.data.slices[0].items.map((item, index) => (
        <li key={index}>
          <PrismicNextLink
            field={item.link}
            className={`flex gap-2 items-center group-hover:text-gray-600 w-full ${
              soMeColors() ? "text-white" : "text-black"
            }`}
          >
            <PrismicNextImage
              field={item.icon}
              className={`w-6 h-6 ${soMeColors() ? "invert" : "invert-1"}`}
            />
            <PrismicRichText field={item.link_text} components={iconText} />
          </PrismicNextLink>
        </li>
      ))}
    </motion.ul>
  );
}

export default ContactAnimation