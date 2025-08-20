import TopBanner from "@/components/banner/TopBanner";
import { ChevronsRight } from "lucide-react";

const Scope = () => {
  return (
    <div className="min-h-screen ">
      <TopBanner text={"Why To Attend"} />
      <div className="max-w-7xl mx-auto w-full flex px-3 md:px-24 gap-2 flex-col items-start my-16">
        {/* <p className="text-justify text-zinc-700">
          
        </p> */}

        <h3 className="text-2xl font-semibold text-[#112363] mt-6 mb-3">
          Who Can Attend BMIC-ETET 2025
        </h3>
        {targetAudience?.map((aud, index) => (
          <div
            key={index}
            className="ml-6 flex gap-3 items-start text-zinc-700 flex-col sm:flex-row text-justify"
          >
            <span className="font-semibold text-primary-red">
              <ChevronsRight />
            </span>
            <p className="">
              <span className="font-semibold">{aud.title} : </span>
              {aud.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scope;

const targetAudience = [
  {
    title: "Academics and Researchers (including scholars)",
    description:
      "Scholars and researchers in computer science, environmental science, and related disciplines.",
  },
  {
    title: "Scientist",
    description:
      "Scientists are the intended audience of conferences because these events serve as platforms for knowledge exchange, collaboration, and professional development within the scientific community.",
  },
  {
    title: "Industry Professionals",
    description:
      "Practitioners and innovators in technology, engineering, and sustainable development.",
  },
  {
    title: "Policymakers and Government Officials",
    description:
      "Individuals involved in policy-making and regulation related to technology and sustainability.",
  },
  {
    title: "Students and Educators",
    description:
      "Students and educators interested in the latest trends and research in intelligent systems and sustainability.",
  },
  {
    title: "Non-profit and NGO Representatives",
    description:
      "Members of organizations working towards sustainable development and environmental conservation.",
  },
];
