import TopBanner from "@/components/banner/TopBanner";
import { ChevronsRight } from "lucide-react";
const aims = [
  "To promote the continuous, adaptive machine learning and dynamically evolving AI systems.",
  "To explore the intersection of computing technologies with environmental and societal needs.",
  "To highlight interdisciplinary research and collaboration for sustainable solutions.",
  "To address challenges and ethical considerations in deploying intelligent systems for sustainability.",
];
const Objectives = () => {
  return (
    <div className="min-h-screen ">
      <TopBanner text={"Objectives"} />
      <div className="max-w-7xl mx-auto w-full flex px-3 md:px-24 gap-2 flex-col items-start my-16">
        <h3 className="text-2xl font-semibold text-[#112363] mt-6 mb-3">
          Objectives of the Conference
        </h3>
        <p className="text-justify text-zinc-700 ">
          The BPUT Multi International Conference (BMIC 2025) on Emerging Trends
          in Evolving Technology conference aims to bring together experts,
          researchers, practitioners, and policymakers from various fields to
          explore and discuss the integration of computing technologies and
          intelligent systems in promoting sustainability. The conference serves
          as a platform to share innovative ideas, present research findings,
          and foster collaborations that contribute to sustainable development
          goals.
        </p>
        <p className="text-justify text-zinc-700 ">
          The BPUT Multi International Conference (BMIC 2025) on Emerging Trends
          in Evolving Technology aims :
        </p>
        {aims?.map((aim, index) => (
          <div
            key={index}
            className=" ml-6 flex gap-2 items-start text-zinc-700 "
          >
            <span className="font-semibold text-primary-red  ">
              <ChevronsRight />
            </span>

            <span className=" ">{aim}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Objectives;
