import TopBanner from "@/components/banner/TopBanner";
import { ChevronsRight } from "lucide-react";

const WhyToAttend = () => {
  return (
    <div className="min-h-screen ">
      <TopBanner text={"Why To Attend"} />
      <div className="max-w-7xl mx-auto w-full flex px-3 md:px-24 gap-2 flex-col items-start my-16">
        <p className="text-justify text-zinc-700">
          The conference stands out as a transformative platform that bridges
          the critical gap between advanced computing technologies and
          sustainable development initiatives. It goes beyond traditional
          academic discourse by integrating cutting-edge innovations such as
          artificial intelligence, machine learning, IoT, and other intelligent
          systems with the urgent global need for environmental preservation and
          responsible development. By fostering discussions and collaborations
          across disciplines and industries, the event highlights how evolving
          technologies can be harnessed to address real-world sustainability
          challenges. From optimizing energy consumption to enabling smart
          agriculture, intelligent systems are positioned as powerful tools for
          creating scalable, eco-friendly solutions. Ultimately, the conference
          promotes a forward-thinking vision where technological progress and
          sustainability are not separate goals but mutually reinforcing paths
          toward building a more equitable, resilient, and environmentally
          conscious future.
        </p>
        <h3 className="text-2xl font-semibold text-[#112363] mt-6 mb-3">
          Key Features of BMIC-ETET 2025
        </h3>

        {features?.map((feature, index) => (
          <div
            key={index}
            className="ml-6 flex gap-3 items-start text-zinc-700 flex-col sm:flex-row text-justify"
          >
            <span className="font-semibold text-primary-red">
              <ChevronsRight />
            </span>
            <p className="">
              <span className="font-semibold">{feature.title} : </span>
              {feature.description}
            </p>
          </div>
        ))}
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
        <h3 className="text-2xl font-semibold text-[#112363] mt-6 mb-3">
          How it is Different
        </h3>
        {conferenceHighlights?.map((highLight, index) => (
          <div
            key={index}
            className="ml-6 flex gap-3 items-start text-zinc-700 flex-col sm:flex-row text-justify"
          >
            <span className="font-semibold text-primary-red">
              <ChevronsRight />
            </span>
            <p className="">
              <span className="font-semibold">{highLight.title} : </span>
              {highLight.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyToAttend;

const features = [
  {
    title: "Diverse Sessions",
    description:
      "Includes keynote speeches, panel discussions, technical sessions, workshops, and poster presentations.",
  },
  {
    title: "Innovative Research",
    description:
      "Showcases cutting-edge research and development in AI, machine learning, IoT, and other intelligent systems focused on sustainability.",
  },
  {
    title: "Case Studies",
    description:
      "Provides real-world examples and case studies demonstrating successful implementations of sustainable technologies.",
  },
  {
    title: "Interactive Workshops",
    description:
      "Offers hands-on workshops and tutorials on the latest tools and technologies in the field.",
  },
  {
    title: "Networking Opportunities",
    description:
      "Facilitates networking among attendees from academia, industry, and government sectors to encourage collaboration and knowledge exchange.",
  },
];
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

const conferenceHighlights = [
  {
    title: "Interdisciplinary Focus",
    description:
      "Unlike other conferences that may focus solely on evolving technology, this event emphasizes the synergy between intelligent systems and sustainable practices.",
  },
  {
    title: "Comprehensive Coverage",
    description:
      "Offers a wide range of topics from theoretical foundations to practical applications, ensuring comprehensive learning and knowledge sharing.",
  },
  {
    title: "Ethics and Policy Emphasis",
    description:
      "Addresses not only technological advancements but also the ethical and policy dimensions, providing a holistic view of the field.",
  },
  {
    title: "Interactive and Practical Sessions",
    description:
      "Features interactive workshops and practical sessions that allow attendees to gain hands-on experience with the latest tools and technologies.",
  },
  {
    title: "Collaborative Environment",
    description:
      "Encourages cross-sector collaboration, bringing together diverse stakeholders to foster innovative solutions for sustainability.",
  },
];
