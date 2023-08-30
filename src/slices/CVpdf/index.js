"use client";

/**
 * @typedef {import("@prismicio/client").Content.CVpdfSlice} CVpdfSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CVpdfSlice>} CVpdfProps
 * @param {CVpdfProps}
 */
const CVpdf = ({ slice }) => {
  console.log(slice.primary.pdf.url);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="max-w-[1440px] mx-auto md:px-12 max-md:px-6 py-6"
    >
      <a
        href={slice.primary.pdf.url}
        className="hover:scale-[1.05] duration-300 flex gap-8 justify-around items-center w-fit px-6 border-2 border-black hover:bg-black hover:text-white group"
      >
         <h3 className="text-size_lg py-2">CV</h3> 
        <p target="blank" className="flex gap-4 items-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            className="w-10 h-10 duration-300 group-hover:invert"
          >
            <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V304H176c-35.3 0-64 28.7-64 64V512H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM176 352h32c30.9 0 56 25.1 56 56s-25.1 56-56 56H192v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V448 368c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24H192v48h16zm96-80h32c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H304c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H320v96h16zm80-112c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V432 368z" />
          </svg>
        </p>
      </a>
    </section>
  );
};

export default CVpdf;
