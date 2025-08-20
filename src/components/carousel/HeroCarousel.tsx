// "use client";

// import React, { useState, useEffect, useCallback } from "react";

// import HeroBg1 from "../../assets/hero/hero-bg.jpg";
// import CountdownTimer from "../countdowntimer/CountdownTimer";
// // import IICSImg from "../../assets/conferences/iics.webp";
// // import PECSImg from "../../assets/conferences/pecs.webp";
// // import SISImg from "../../assets/conferences/sis.webp";
// // import SMCSImg from "../../assets/conferences/smcs.webp";
// // import { ArrowRight } from "lucide-react";
// import BmicLogo from "../../assets/logo/bmic-logo.webp";

// // const conferences = [
// //   { img: IICSImg, title: "IICS ", link: "https://iics.bputmic.in" },
// //   { img: SMCSImg, title: "SMCS ", link: "https://smcs.bputmic.in" },
// //   { img: SISImg, title: "SIS ", link: "https://sis.bputmic.in" },
// //   { img: PECSImg, title: "PECS ", link: "https://pecs.bputmic.in" },
// // ];

// const slides: any[] = [
//   {
//     id: 1,
//     image: HeroBg1,
//     title: "BPUT",
//     title2: "MULTI-INTERNATIONAL CONFERENCE",
//     join: "on",
//     title3: "ENGINEERING AND EVOLVING",
//     description:
//       "19th-21st December, 2025, Biju Patnaik University of Technology, Rourkela, Odisha, 769015",
//     primaryCta: { text: "Get Started", href: "#start" },
//     secondaryCta: { text: "Learn More", href: "#learn" },
//   },
// ];

// const HeroCarousel: React.FC = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const [touchStart, setTouchStart] = useState<number | null>(null);

//   const nextSlide = useCallback(() => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   }, []);

//   const prevSlide = useCallback(() => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   }, []);

//   useEffect(() => {
//     if (!isPaused) {
//       const timer = setInterval(nextSlide, 5000);
//       return () => clearInterval(timer);
//     }
//   }, [isPaused, nextSlide]);

//   const handleTouchStart = (e: React.TouchEvent) => {
//     setTouchStart(e.touches[0].clientX);
//   };

//   const handleTouchEnd = (e: React.TouchEvent) => {
//     if (touchStart === null) return;
//     const touchEnd = e.changedTouches[0].clientX;
//     const diff = touchStart - touchEnd;
//     if (Math.abs(diff) > 50) {
//       diff > 0 ? nextSlide() : prevSlide();
//     }
//     setTouchStart(null);
//   };

//   return (
//     <div
//       className="relative h-[100svh] w-full overflow-hidden"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//       onTouchStart={handleTouchStart}
//       onTouchEnd={handleTouchEnd}
//     >
//       {slides.map((slide, index) => (
//         <div
//           key={slide.id}
//           className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
//             index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
//           }`}
//         >
//           <div
//             className="absolute inset-0 bg-cover bg-bottom transform scale-110 transition-transform duration-[20s]"
//             style={{
//               backgroundImage: `url(${slide.image})`,
//               transform: `scale(${index === currentSlide ? "1.1" : "1"})`,
//             }}
//           />
//           <div className="absolute inset-0 bg-[rgba(6,12,34,0.8)]" />

//           <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 mt-16">
//             <div className="w-full mx-auto text-center">
//               <div className="flex items-center justify-center mx-auto mb-8 flex-col">
//                 <img src={BmicLogo} alt="" className="w-32 sm:w-44" />
//               </div>

//               <h2
//                 className={`text-xl sm:text-4xl md:text-5xl font-semibold text-white mb-2 sm:mb-4 leading-tight transform transition-all duration-1000 ${
//                   index === currentSlide
//                     ? "translate-y-0 opacity-100"
//                     : "translate-y-8 opacity-0"
//                 }`}
//               >
//                 {slide.title}
//               </h2>

//               <h2
//                 className={`text-xl sm:text-4xl md:text-5xl font-semibold text-white mb-3 sm:mb-4 leading-tight transform transition-all duration-1000 ${
//                   index === currentSlide
//                     ? "translate-y-0 opacity-100"
//                     : "translate-y-8 opacity-0"
//                 }`}
//               >
//                 <span className="text-primary-red font-bold">
//                   {slide.title2?.split(" ")[0]}&nbsp;
//                 </span>
//                 {slide.title2?.split(" ").slice(1).join(" ")}
//               </h2>

//               <p
//                 className={`text-sm sm:text-lg text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed transform transition-all delay-200 duration-1000 ${
//                   index === currentSlide
//                     ? "translate-y-0 opacity-100"
//                     : "translate-y-8 opacity-0"
//                 }`}
//               >
//                 {slide.description}
//               </p>

//               {/* Mobile and Desktop Layout */}
//               <div className="flex flex-col lg:flex-row justify-between items-center md:gap-6 w-full px-4">
//                 {/* Left Conferences */}
//                 {/* <div className="flex flex-row gap-4 justify-center items-center">
//                   {conferences.slice(0, 2).map((conf, index) => (
//                     <p
//                       key={index}
//                       // href={conf.link}
//                       // target="_blank"
//                       className="w-40 sm:w-56 relative group block overflow-hidden border-4 border-white transition-transform transform hover:scale-105"
//                     >
//                       <img
//                         src={conf.img}
//                         className="w-full object-cover"
//                         alt={conf.title}
//                       />
//                       <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity flex-col gap-3">
//                         <span className="text-white text-lg font-semibold">
//                           {conf.title}
//                         </span>
//                         <button className="flex items-center px-3 py-1 bg-transparent font-semibold border-primary-red border-2 rounded-sm text-primary-red hover:bg-primary-red hover:text-white hover:border-none">
//                           Visit
//                           <ArrowRight className="ml-2" size={17} />
//                         </button>
//                       </div>
//                     </p>
//                   ))}
//                 </div> */}

//                 {/* Countdown */}
//                 <div className="flex flex-col items-center">
//                   <CountdownTimer targetDate={"2025-12-19T00:00:00"} />
//                   <h1 className="text-lg sm:text-2xl text-white font-semibold italic lowercase text-center">
//                     LEFT FOR THE{" "}
//                     <span className="text-primary-red">CONFERENCE</span>
//                   </h1>
//                 </div>

//                 {/* Right Conferences */}
//                 {/* <div className="flex flex-row gap-4 justify-center items-center pb-36 sm:pb-0">
//                   {conferences.slice(2).map((conf, index) => (
//                     <p
//                       key={index}
//                       // href={conf.link}
//                       // target="_blank"
//                       className="w-40 sm:w-56 relative group block overflow-hidden border-4 border-white transition-transform transform hover:scale-105"
//                     >
//                       <img
//                         src={conf.img}
//                         className="w-full object-cover"
//                         alt={conf.title}
//                       />
//                       <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity flex-col gap-3">
//                         <span className="text-white text-lg font-semibold">
//                           {conf.title}
//                         </span>
//                         <button className="flex items-center px-3 py-1 bg-transparent font-semibold border-primary-red border-2 rounded-sm text-primary-red hover:bg-primary-red hover:text-white hover:border-none">
//                           Visit
//                           <ArrowRight className="ml-2" size={17} />
//                         </button>
//                       </div>
//                     </p>
//                   ))}
//                 </div> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HeroCarousel;

"use client";

import React from "react";
import HeroBg1 from "../../assets/hero/hero-bg.jpg";
import CountdownTimer from "../countdowntimer/CountdownTimer";
import BmicLogo from "../../assets/logo/bmic-logo.webp";
const HeroSection: React.FC = () => {
  return (
    <div className="relative h-[100svh] w-full max-w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        {/* Background Image with Parallax */}
        <div
          className="absolute inset-0 bg-cover bg-bottom bg-fixed transition-transform duration-700 ease-in-out"
          style={{ backgroundImage: `url(${HeroBg1})` }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-primary-blue opacity-80" />

        {/* Content */}
        <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 mt-16">
          <div className="w-full mx-auto text-center ">
            <div className="flex items-center justify-center mx-auto mb-8 flex-col">
              <img src={BmicLogo} alt="" className="w-44" />
            </div>
            <h2 className=" text-xl sm:text-2xl md:text-3xl lg:text-3xl  text-white mb-1 leading-tight font-bold  capitalize ">
              <span className="text-white">BPUT</span> &nbsp;
              <span className="text-primary-red uppercase">
                Multi-International Conference
              </span>
            </h2>
            <h2 className="lowercase text-lg sm:text-xl md:text-2xl lg:text-xl font-semibold text-white mb- animate-slide-in-right">
              on
            </h2>
            <h2
              className="text-white uppercase text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold  pt-3 pb-6 px-8 rounded-3xl "
              style={{ fontFamily: "Roboto Slab", color: "white" }}
            >
              EMERGING TRENDS IN EVOLVING TECHNOLOGY
            </h2>
            <h2 className="uppercase text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-primary-red mb-3 sm:mb-4 animate-slide-in-right">
              ( BMIC-ETET 2025)
            </h2>
            <p className="text-lg sm:text-lg md:text-lg text-gray-200 mb-6 sm:mb-2 max-w-4xl mx-auto animate-fade-in">
              19th-21st December, 2025, Biju Patnaik University of Technology,
              Rourkela, Odisha, 769015
            </p>

            <div className="flex items-center justify-center animate-zoom-in">
              <div className="flex flex-col">
                <CountdownTimer targetDate={"2025-12-19T00:00:00"} />
                {/* <h1 className="text-2xl text-white font-semibold italic lowercase">
                  LEFT FOR THE <span className="text-primary-red">CONFERENCE</span>
                </h1> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
