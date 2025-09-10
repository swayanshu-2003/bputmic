
import { ChevronsRight, Link } from "lucide-react";
import TopBanner from "../../components/banner/TopBanner";
import CrcImg from "../../assets/misc/crc.png";
import TailorImg from "../../assets/misc/tailor.png";
import { FaFileDownload } from "react-icons/fa";

const AutherGuidelines = () => {

  const templates = [
    {
      title: "Taylor & Francis Word template for authors",
      link: "https://bputmic.in/template/Word_Template.docx"
    },
    {
      title: "Taylor & Francis Sample Paper Format for authors",
      link: "https://bputmic.in/template/Sample_Paper.docx"
    },
    {
      title: "Guidelines for Authors",
      link: "https://bputmic.in/template/Guidelines_for_Authors.docx"
    },
    {
      title: "Manuscript Submission Guidelines",
      link: "https://bputmic.in/template/Manuscript_submission_guidelines.docx"
    }
  ];

  const handleOpenDocx = (link: string) => {
    // const docxUrl = `https://bputmic.in/template/Guidelines-for-Authors.docx`;
    const docxUrl = link;
    window.open(docxUrl, "_blank");
  };

  return (
    <div className="min-h-screen ">
      <TopBanner text={"Author Guidelines"} />
      <div className="max-w-7xl mx-auto w-full flex px-3 md:px-24 gap-2 flex-col items-start my-16">
        <h3 className="text-2xl font-semibold text-[#112363] mt-6 mb-3">
          Author Guidelines
        </h3>
        {/* <p className="text-justify text-zinc-700 "></p>
        <p className="text-justify text-zinc-700 "></p> */}
        <div className=" ml-6 flex gap-2 items-start text-zinc-700 ">
          <span className="font-semibold text-primary-red  ">
            <ChevronsRight />
          </span>

          <span className="text-justify">
            Technical papers describing original, previously unpublished
            research, not currently under review by another conference or
            journal, are solicited. The peer review process will be double
            blind. The evaluation is recommended to be based on technical
            soundness, language, scope, relevance, novelty, originality, quality
            etc. So Authors are advised to submit the paper(s) in PDF format
            without authors names, affiliation and other information related to
            authors. All papers accepted and presented in BMIC-ETET 2025 will be
            indexed in Scopus based book chapter (waiting for approval).
          </span>
        </div>
        <div className="ml-6 flex gap-2 items-start text-zinc-700 mt-5">
          <span className="font-semibold text-primary-red mt-2">
            <ChevronsRight />
          </span>

          <span className="text-justify">
            All the accepted and presented papers will be submitted to
            conference proceedings by{" "}
            <span className="inline-flex items-center gap-5 font-bold align-middle mx-4">
              <img
                src={CrcImg}
                alt="CRC Press"
                className="h-6 w-auto sm:h-8 object-contain"
              />
              <span className="flex items-center justify-center">
                (
                <img
                  src={TailorImg}
                  alt="Taylor & Francis"
                  className="h-6 w-auto sm:h-9 object-contain"
                />
                )
              </span>
            </span>{" "}
            and will be submitted to SCOPUS for indexing. All the abstract (both
            oral and poster presented papers) of the accepted and registered
            papers are to be published in the BOOK named as{" "}
            <strong className="italic">
              BPUT Multi-International Conference (Abstract)
            </strong>{" "}
            with <strong>ISBN: 978-81-988484-4-4.</strong>
          </span>
        </div>

        {/* manuscript guidelines */}

        <h3 className="text-2xl font-semibold text-[#112363] mt-6 mb-3">
          Templates
        </h3>
        <div className=" ml-6  text-zinc-700 w-full md:w-2/3">
          {templates?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 w-full text-zinc-700 border-b border-gray-200 py-2"
            >
              {/* Title */}
              <div className="flex items-center gap-2">
                <span className="font-semibold text-primary-red">
                  <ChevronsRight />
                </span>
                <span className="text-sm sm:text-base">{item?.title} </span>
              </div>

              {/* Download button */}
              <button
                onClick={() => handleOpenDocx(item?.link)}
                className="bg-primary-red text-white px-3 sm:px-4 py-1 sm:py-1  hover:bg-blue-700 flex items-center gap-2 font-semibold transition-all duration-300 max-w-fit"
              >
                <FaFileDownload />
                <span>Download</span>
              </button>
            </div>
          ))}
        </div>



        <h3 className="text-2xl font-semibold text-[#112363] mt-6 mb-3">
          Submission Guidelines
        </h3>

        <p className="text-justify text-zinc-700 ml-4 md:ml-6">
          1. Interested Authors must submit their manuscript(s) (ensure it is
          plagiarism-free) with their Microsoft CMT login using the submission
          link:
        </p>
        <div className="ml-4 md:ml-6 flex flex-wrap items-center gap-2 text-zinc-700 px-4 py-2 bg-red-50 rounded mt-2">
          <Link size={16} strokeWidth={3} className="text-[#112363]" />
          <a
            className="text-primary-red break-all"
            href="https://cmt3.research.microsoft.com/BMIC2025/Submission/Index"
            target="_blank"
          >
            https://cmt3.research.microsoft.com/BMIC2025/Submission/Index
          </a>
        </div>
        <p className="text-justify text-zinc-700 ml-4 md:ml-6 mt-2">
          NOTE: if the above submission link does not work, then copy the link
          and paste it in a new Tab.
        </p>
        <p className="text-justify text-zinc-700 ml-4 md:ml-6 mt-2">
          2. Notification of acceptance
        </p>
        <p className="text-justify text-zinc-700 ml-4 md:ml-6 mt-2">
          3. Submission of Camera Ready Paper, Registration, and Copyright
          within the deadline
        </p>
        <p className="text-justify text-zinc-700 ml-4 md:ml-6 mt-2">
          4. Presentation by one of the authors
        </p>
        <p className="text-justify text-zinc-700 ml-4 md:ml-6 mt-2">
          5. Publication of Proceedings
        </p>
        <p className="text-justify text-zinc-700 ml-4 md:ml-6 mt-2">
          6. For any queries regarding submission of the manuscript plese follow
          the link below
        </p>
        <a
          className="text-primary-red break-all ml-10 mt-1.5 underline"
          href="https://cmt3.research.microsoft.com/docs/help/general/account-creation.html"
          target="_blank"
        >
          https://cmt3.research.microsoft.com/docs/help/general/account-creation.html
        </a>

        <p className="text-zinc-500 text-xs mt-6">
          * The{" "}
          <a
            className="text-primary-red"
            href="https://cmt3.research.microsoft.com"
            target="_blank"
          >
            Microsoft CMT service
          </a>{" "}
          was used for managing the peer-reviewing process for this conference.
          This service was provided for free by Microsoft and they borne all
          expenses, including costs for Azure cloud services as well as for
          software development and support.
        </p>




      </div>
    </div>
  );
};

export default AutherGuidelines;

// <div className="ml-3">
// {/* 1 Article Title*/}
// <h4 className="flex items-center gap-4 text-xl font-semibold text-[#1a5f60] my-2">
//   <span className="w-8 h-8 rounded-full bg-[#defaf9] text-[#1a5f60] grid place-items-center text-base font-semibold leading-none">
//     1
//   </span>
//   Article Title {"(<t>)"}
// </h4>
// {[
//   "Title case, light-face, centered [italic for special cases (variables, etc.)]; use initial caps for prepositions of more than four characters.",
//   "No end period",
//   "Acronyms/Abbreviations: Avoid in general",
// ].map((item, index) => (
//   <div
//     key={index}
//     className=" ml-10 my-2 flex gap-2 items-start text-zinc-700 "
//   >
//     <span className="font-semibold text-primary-red  ">
//       <ChevronsRight />
//     </span>
//     <span className="text-justify">{item}</span>
//   </div>
// ))}
// {/* 2 Author names and affiliations*/}
// <h4 className="flex items-center gap-4 text-xl font-semibold text-[#1a5f60] mb-2 mt-4">
//   <span className="w-8 h-8 rounded-full bg-[#defaf9] text-[#1a5f60] grid place-items-center text-base font-semibold leading-none">
//     2
//   </span>
//   Author Names and Affiliations
// </h4>
// {[
//   "Line 1 : 1st Given Name Surname",
//   "Line 2 : Dept. Name of Organization (of Affiliation)",
//   "Line 3 : Name of Organization (of Affiliation)",
//   "Line 4 : City, Country",
//   "Line 5 : Email address or ORCID",
// ].map((item, index) => (
//   <div
//     key={index}
//     className=" ml-10 my-2 flex gap-2 items-start text-zinc-700 "
//   >
//     <span className="font-semibold text-primary-red  ">
//       <ChevronsRight />
//     </span>
//     <span className="text-justify">{item}</span>
//   </div>
// ))}
// {/* 3 Abstract*/}
// <h4 className="flex items-center gap-4 text-xl font-semibold text-[#1a5f60] mb-2 mt-4">
//   <span className="w-8 h-8 rounded-full bg-[#defaf9] text-[#1a5f60] grid place-items-center text-base font-semibold leading-none">
//     3
//   </span>
//   Abstract
// </h4>
// {[
//   "Text of abstract in roman",
//   "Multiple paragraphs allowed",
//   "Structured abstracts allowed (alert author on change)",
//   "Do not allow reference citations in the abstract",
//   "Do Not Use Symbols, Special Characters, Footnotes, or Math in Paper Title or Abstract. (Abstract)",
// ].map((item, index) => (
//   <div
//     key={index}
//     className=" ml-10 my-2 flex gap-2 items-start text-zinc-700 "
//   >
//     <span className="font-semibold text-primary-red  ">
//       <ChevronsRight />
//     </span>
//     <span className="text-justify">{item}</span>
//   </div>
// ))}
// {/* 4 Keywords*/}
// <h4 className="flex items-center gap-4 text-xl font-semibold text-[#1a5f60] mb-2 mt-4">
//   <span className="w-8 h-8 rounded-full bg-[#defaf9] text-[#1a5f60] grid place-items-center text-base font-semibold leading-none">
//     4
//   </span>
//   Keywords
// </h4>
// {[
//   "Heading (coded	 as <kw>) : One word/title case; lightface/italic; keywords head followed by /italic/lightface colon and a word space",
//   "Individual keywords : lowercase; roman; separated by commas; no end period",
//   "Alphabetical arrangement of individual keywords",
//   " Positioning : Keywords are placed after the abstract",
// ].map((item, index) => (
//   <div
//     key={index}
//     className=" ml-10 my-2 flex gap-2 items-start text-zinc-700 "
//   >
//     <span className="font-semibold text-primary-red  ">
//       <ChevronsRight />
//     </span>
//     <span className="text-justify">{item}</span>
//   </div>
// ))}
// {/* 5 Body*/}
// <h4 className="flex items-center gap-4 text-xl font-semibold text-[#1a5f60] mb-2 mt-4">
//   <span className="w-8 h-8 rounded-full bg-[#defaf9] text-[#1a5f60] grid place-items-center text-base font-semibold leading-none">
//     5
//   </span>
//   Body
// </h4>

// {[
//   {
//     subtitle: "Text",
//     subitems: [
//       "Introduction is mandatory for regular research articles.",
//     ],
//   },
//   {
//     subtitle: "Section Heads",
//     subitems: [
//       "Numbering : All headings are unnumbered",
//       "First-order heads <h1> : Title case; boldface; free standing, no end period",
//       "Second-order heads <h2> : Flush left, Title case, bold",
//       "Third-order heads  <h3>",
//     ],
//   },
// ].map((item, index) => (
//   <div key={index} className="ml-12  text-zinc-700 ">
//     <h5 className="text-base font-semibold text-[#112363]">
//       {index + 1} . {item?.subtitle}
//     </h5>
//     {item.subitems.map((subitem, subindex) => (
//       <p key={subindex} className="ml-3 my-2 flex gap-2 items-start">
//         <span className="font-semibold text-primary-red  ">
//           <ChevronsRight />
//         </span>
//         <span className="text-justify">{subitem}</span>
//       </p>
//     ))}
//   </div>
// ))}

// {/* 6 Paragraphs*/}
// <h4 className="flex items-center gap-4 text-xl font-semibold text-[#1a5f60] mb-2 mt-4">
//   <span className="w-8 h-8 rounded-full bg-[#defaf9] text-[#1a5f60] grid place-items-center text-base font-semibold leading-none">
//     6
//   </span>
//   Paragraphs
// </h4>
// {["All paragraphs set indented (under headings or otherwise)"].map(
//   (item, index) => (
//     <div
//       key={index}
//       className=" ml-10 my-2 flex gap-2 items-start text-zinc-700 "
//     >
//       <span className="font-semibold text-primary-red  ">
//         <ChevronsRight />
//       </span>
//       <span className="text-justify">{item}</span>
//     </div>
//   )
// )}
// {/* 7 Abbreviations and Units*/}
// <h4 className="flex items-center gap-4 text-xl font-semibold text-[#1a5f60] mb-2 mt-4">
//   <span className="w-8 h-8 rounded-full bg-[#defaf9] text-[#1a5f60] grid place-items-center text-base font-semibold leading-none">
//     7
//   </span>
//   Abbreviations and Units
// </h4>
// {[
//   {
//     subtitle: "Abbreviations",
//     subitems: [
//       "Define abbreviations and acronyms the first time they are used in the text",
//       "Abbreviations such as IEEE, SI, MKS, CGS, sc, dc, and rms do not have to be defined. ",
//     ],
//   },
//   {
//     subtitle: "Units",
//     subitems: [
//       "Use either SI (MKS) or CGS as primary units. (SI units are encouraged.) English units may be used as secondary units (in parentheses). An exception would be the use of English units as identifiers in trade, such as “3.5-inch disk drive",
//       "Avoid combining SI and CGS units",
//       "Do not mix complete spellings and abbreviations of units: “Wb/m2” or “webers per square meter”, not “webers/m2”.  Spell out units when they appear in text: “. . . a few henries”, not “. . . a few H",
//       "Identify applicable funding agency here. If none, delete this text box",
//     ],
//   },
// ].map((item, index) => (
//   <div key={index} className="ml-12  text-zinc-700 ">
//     <h5 className="text-base font-semibold text-[#112363]">
//       {index + 1} . {item?.subtitle}
//     </h5>
//     {item.subitems.map((subitem, subindex) => (
//       <p key={subindex} className="ml-3 my-2 flex gap-2 items-start">
//         <span className="font-semibold text-primary-red  ">
//           <ChevronsRight />
//         </span>
//         <span className="text-justify">{subitem}</span>
//       </p>
//     ))}
//   </div>
// ))}
// {/* 8 Figures and Tables*/}
// <h4 className="flex items-center gap-4 text-xl font-semibold text-[#1a5f60] mb-2 mt-4">
//   <span className="w-8 h-8 rounded-full bg-[#defaf9] text-[#1a5f60] grid place-items-center text-base font-semibold leading-none">
//     8
//   </span>
//   Figures and Tables
// </h4>
// {[
//   {
//     subtitle: "Figures",
//     subitems: [
//       "Figure head title case",
//       "Place figures and tables at the top and bottom of columns. Avoid placing them in the middle of columns.",
//       "Use the abbreviation “Figure 1 in the text citation ",
//       "Figure Labels : Use 8 point Times New Roman for Figure labels.",
//       "Halftone image : Provide Clearly visible images / hi-resolution images",
//       "Provide source for figures",
//       "For Example =>    Figure 1 : Example of a figure caption. (figure caption)",
//       "For Example =>    Source : Example of source",
//     ],
//   },
//   {
//     subtitle: "Tables",
//     subitems: [
//       "Table head title case no bold, coloumn head title case, table column sub head sentence ",
//       "Sources must be provided for both figures and tables if they are reproduced / adapted / modified, etc., and permissions may be required.",
//       "Use the “Table 1:”, even at the beginning of a sentence in the text citation",
//       "Provide source for Tables",
//       "For Example => Table 1: Example of a figure caption. (table caption)",
//       "For Example => Source: Example of source",
//     ],
//   },
//   {
//     subtitle: "Acknowledgment",
//     subitems: [
//       "To be provided before References.",
//       "The preferred spelling of the word “acknowledgment” in America is without an “e” after the “g”. Avoid the stilted expression “one of us (R. B. G.) thanks ...”.  Instead, try “R. B. G. thanks...”. Put sponsor acknowledgments in the unnumbered footnote on the first page.",
//     ],
//   },
// ].map((item, index) => (
//   <div key={index} className="ml-12  text-zinc-700 ">
//     <h5 className="text-base font-semibold text-[#112363]">
//       {index + 1} . {item?.subtitle}
//     </h5>
//     {item.subitems.map((subitem, subindex) => (
//       <p key={subindex} className="ml-3 my-2 flex gap-2 items-start">
//         <span className="font-semibold text-primary-red  ">
//           <ChevronsRight />
//         </span>
//         <span className="text-justify">{subitem}</span>
//       </p>
//     ))}
//   </div>
// ))}
// </div>
