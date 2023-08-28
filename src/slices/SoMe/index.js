/**
 * @typedef {import("@prismicio/client").Content.SoMeSlice} SoMeSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SoMeSlice>} SoMeProps
 * @param {SoMeProps}
 */
const SoMe = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for so_me (variation: {slice.variation}) Slices
    </section>
  );
};

export default SoMe;
