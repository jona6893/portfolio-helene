"use client"


/**
 * @typedef {import("@prismicio/client").Content.CVpdfSlice} CVpdfSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CVpdfSlice>} CVpdfProps
 * @param {CVpdfProps}
 */
const CVpdf = ({ slice }) => {

  console.log(slice.primary.pdf.url)
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="max-w-[1440px] mx-auto md:px-12 max-md:px-6 py-6"
    >
      <h3 className="text-size_lg py-4">CV</h3>
      <iframe
        className="max-h-screen h-screen min-h-[500px] w-full "
        src={slice.primary.pdf.url}
        title="W3Schools Free Online Web Tutorials"
      ></iframe>

      {/*  <h3>
        SE <a className="py-2 px-4 bg-blue-400 rounded-sm" href={slice.primary.pdf.url}>CV</a>
      </h3> */}
    </section>
  );
};

export default CVpdf;
