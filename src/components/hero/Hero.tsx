import IICSImg from "../../assets/conferences/iics.webp";
import PECSImg from "../../assets/conferences/pecs.webp";
import SISImg from "../../assets/conferences/sis.webp";
import SMCSImg from "../../assets/conferences/smcs.webp";

const conferences = [
  { img: IICSImg, title: "IICS Conference", link: "/iics" },
  { img: PECSImg, title: "PECS Conference", link: "/pecs" },
  { img: SISImg, title: "SIS Conference", link: "/sis" },
  { img: SMCSImg, title: "SMCS Conference", link: "/smcs" },
];

const Hero = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 p-10 max-w-7xl mx-auto">
      {conferences.map((conf, index) => (
        <a
          key={index}
          href={conf.link}
          className="relative group block overflow-hidden rounded-2xl shadow-lg transition-transform transform hover:scale-105"
        >
          {/* Image */}
          <img
            src={conf.img}
            className="w-full  object-cover rounded-2xl"
            alt={conf.title}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity flex-col gap-3">
            <span className="text-white text-lg font-semibold">
              {conf.title}
            </span>
            <button className="px-3 py-1 bg-transparent font-semibold border-primary-red border-2 rounded-sm text-primary-red hover:bg-primary-red hover:text-white hover:border-none">Visit</button>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Hero;
