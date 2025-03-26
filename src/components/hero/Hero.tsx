const Hero = () => {
  const tracks = [
    {
      title: "Intelligent Information and Computing Systems (IICS)",
      description:
        "Focusing on advancements in computing, artificial intelligence, and information technology. Researchers will discuss the latest breakthroughs in machine learning, big data, cybersecurity, and computational intelligence, shaping the future of the digital world.",
    },
    {
      title: "Physical, Environmental, and Computational Sciences (PECS)",
      description:
        "Covering interdisciplinary topics from physics, chemistry, mathematics, and computational methods. This track aims to foster collaboration between theoretical and applied sciences to solve real-world environmental and physical challenges.",
    },
    {
      title: "Society, Informatics, and Sustainability (SIS)",
      description:
        "Exploring the role of informatics in management, sustainable development, and societal impact. Experts will discuss how technology-driven solutions can enhance governance, public policy, and sustainability efforts worldwide.",
    },
    {
      title: "Smart Materials, Composites, and Structures (SMCS)",
      description:
        "A platform for researchers discussing innovations in material science, composites, and structures. Topics will include the development of new-age materials, nanotechnology applications, and advancements in structural engineering.",
    },
  ];

  return (
    <section id="about" className=" py-10 px-5 my-10">
      <div className="max-w-full mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          WELCOME TO BMIC-2025
        </h2>
        <p className="text-center text-gray-600 mt-2">About BMIC - 2025</p>
        <div className="w-16 h-1 bg-red-500 mx-auto mt-2" />
        <div className="max-w-7xl mx-auto text-zinc-700 mt-7 text-justify leading-tight">
          <p className="text-base mb-4">
            Bijupatnaik University of Technology (BPUT), Odisha, proudly
            presents the
            <span className="font-semibold text-[#112363]">
              {" "}
              BPUT Multi-International Conference-2025
            </span>
            , a premier event bringing together global researchers,
            academicians, and industry leaders to explore cutting-edge
            advancements across multiple disciplines. This year, the conference
            will serve as a platform for discussions on emerging trends in
            technology, science, and management.
          </p>

          <p className="text-base mb-4">
            The conference will be hosted at{" "}
            <span className="font-semibold text-[#112363]">
              Biju Patnaik University of Technology, Rourkela, Odisha, 769015
            </span>
            , from{" "}
            <span className="font-semibold text-[#112363]">
              December 19th to 21st, 2025
            </span>
            . Scholars and professionals from various fields are invited to
            share their research, collaborate, and contribute to shaping the
            future of innovation and knowledge exchange.
          </p>

          <h3 className="text-2xl font-semibold text-[#112363] mt-6 mb-3">
            Conference Tracks
          </h3>

          <p className="text-base mb-3">
            The conference will feature{" "}
            <span className="font-semibold">four specialized tracks</span>, each
            dedicated to a crucial domain of research:
          </p>

          {tracks.map((track, index) => (
            <div key={index} className="mb-3 ml-6">
              <span className="font-semibold text-[#112363] leading-8 ">
                {track.title}:
              </span>
              <br />

              <span className="leading-6 ">{track.description}</span>
            </div>
          ))}

          <h3 className="text-xl font-semibold text-[#112363] mt-6 mb-3">
            Join Us
          </h3>

          <p className="text-base">
            We welcome researchers, professionals, and students to submit their
            original work, exchange ideas, and engage in discussions that will
            shape the future of science and technology. This conference is an
            opportunity to network with industry pioneers, explore new
            collaborations, and contribute to groundbreaking advancements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
