import TopBanner from "@/components/banner/TopBanner";

const About = () => {
  return (
    <div className="min-h-screen ">
      <TopBanner text={"About"} />
      <div className="max-w-7xl mx-auto w-full flex px-3 md:px-24 gap-2 flex-col items-start my-16">
        <h3 className="text-2xl font-semibold text-[#112363] mt-6 mb-3">
          About the Conference
        </h3>
        <p className="text-justify text-zinc-700 ">
          The BMIC International Conference on Emerging Trends and Evolving
          Technology (BMIC-ETET 2025) is set to take place on 9th-21st December,
          2025, in Rourkela, Odisha hosted by Biju Patnaik University Of
          Technology, Odisha, Rourkela. This prestigious event brings together
          engineers, researchers, and students to interact with leading experts
          in the field of engineering and technology. The conference will serve
          as an ideal platform for showcasing the latest innovations, tools, and
          methodologies, and aims to promote knowledge-sharing around
          technological advancements and practical solutions to engineering
          problems. Attendees will gain valuable insights, enhance their
          professional skills, and explore new career opportunities through
          engaging discussions and innovative presentations.
        </p>
      </div>
    </div>
  );
};

export default About;
