import { Link } from "lucide-react";
import TopBanner from "../../components/banner/TopBanner";

const PaperSubmission = () => {
  return (
    <div className="min-h-screen">
      <TopBanner text="Call For Papers" />
      <div className="w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-24 flex flex-col items-start my-12">
        <p className="text-justify text-zinc-700">
          BPUT Multi-International Conference on Emerging Trends in Evolving Technology 2025 (BMIC-ETET 2025) focuses on the
          application of smart technology and materials for smarter industrial
          production. The BMIC-2025 will provide a common platform for the
          presentation of original research findings, exchange of ideas, and
          dissemination of innovative, practical development experiences in
          different aspects and fields of industry. It also focuses on an event
          organized with the objective of bringing together academicians,
          scientists, researchers from industry, research scholars, and students
          working in different industrial domains and applied applications.
        </p>

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

export default PaperSubmission;
