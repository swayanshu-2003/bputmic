
import TopBanner from "../../components/banner/TopBanner";
import { ChevronsRight } from "lucide-react";

const ethics = [
  "Technical papers describing original, previously unpublished research, not currently under review by another conference or journal, are solicited.",
  "The peer review process will be double blind.",
  "Permissible level of Plagiarism is 10 percentage.",
  "The evaluation is recommended to be based on technical soundness, language, scope, relevance, novelty, originality, quality etc.",
  "Authors are advised to submit the paper(s) in PDF format without author’s names, affiliation and other information related to authors.",
];

const double_blind_peer_review = [
  "For a submitted article, initial plagiarism checked and verifying minimal technical content will be done by chairs.",
  "Programme chairs will allocate the submitted articles (passing through above step) among reviewers according to their field of interest.",
  "At least two independent reviewers will need to review and approve a paper.",
  "A maximum of 5 papers should be assigned to a single reviewer",
];

const PublicationEthics = () => {
  return (
    <div className="min-h-screen ">
      <TopBanner text={"Publication Ethics"} />
      <div className="max-w-full w-full flex px-3 md:px-24 gap-2 flex-col items-start my-16">
        <h3 className="text-2xl font-semibold text-[#112363] mt-6 mb-3">
          Publication Ethics
        </h3>
        {ethics?.map((track, index) => (
          <div key={index} className=" ml-6 flex gap-2 items-center text-zinc-700 ">
            <span className="font-semibold text-[#112363]  ">
              <ChevronsRight />
            </span>

            <span className=" ">{track}</span>
          </div>
        ))}
        <h3 className="text-2xl font-semibold text-[#112363] mt-6 mb-3">
          Double Blind Peer Review
        </h3>
        {double_blind_peer_review?.map((review, index) => (
          <div key={index} className=" ml-6 flex gap-2 items-center text-zinc-700 ">
            <span className="font-semibold text-[#112363]  ">
              <ChevronsRight />
            </span>

            <span className=" ">{review}</span>
          </div>
        ))}
        <h3 className="text-2xl font-semibold text-[#112363] mt-6 mb-3">
          Author Guidelines
        </h3>
        <p className="text-justify text-zinc-700 " >
          Technical papers describing original, previously unpublished research,
          not currently under review by another conference or journal, are
          solicited. The peer review process will be double blind. The
          evaluation is recommended to be based on technical soundness,
          language, scope, relevance, novelty, originality, quality etc. So
          Authors are advised to submit the paper(s) in PDF format without
          authors names, affiliation and other information related to authors.
          All papers accepted and presented in ICCTCCI-2024 will be published in
          CRC Press, Taylor and Francis, Indexed by Scopus. In addition to this,
          the abstracts of the papers of ICCTCCI-2024 conference will be
          published in a book with ISBN.
        </p>
      </div>
    </div>
  );
};

export default PublicationEthics;
