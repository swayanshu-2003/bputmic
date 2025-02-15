"use client";

import React, { useState, useEffect, useCallback } from "react";

import HeroBg1 from "../../assets/hero/hero-bg.jpg";
import CountdownTimer from "../countdowntimer/CountdownTimer";
import IICSImg from "../../assets/conferences/iics.webp";
import PECSImg from "../../assets/conferences/pecs.webp";
import SISImg from "../../assets/conferences/sis.webp";
import SMCSImg from "../../assets/conferences/smcs.webp";
import { ArrowRight } from "lucide-react";

const conferences = [
  { img: IICSImg, title: "IICS ", link: "/iics" },
  { img: PECSImg, title: "PECS ", link: "/pecs" },
  { img: SISImg, title: "SIS ", link: "/sis" },
  { img: SMCSImg, title: "SMCS ", link: "/smcs" },
];

interface Slide {
  id: number;
  image: string;
  title: string;
  title2?: string;
  description: string;
  primaryCta: { text: string; href: string };
  secondaryCta: { text: string; href: string };
}

const slides: Slide[] = [
  {
    id: 1,
    image: HeroBg1,
    title: "BPUT",
    title2: "MULTI-INTERNATIONAL CONFERENCE - 2025",
    description:
      "14-16 November, 2025, Biju Patnaik University of Technology, Rourkela, Odisha, 769015",
    primaryCta: { text: "Get Started", href: "#start" },
    secondaryCta: { text: "Learn More", href: "#learn" },
  },
  // {
  //   id: 2,
  //   image:
  //     "https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?auto=format&fit=crop&q=80",
  //   title: "BPUT",
  //   title2: "MULTI-INTERNATIONAL CONFERENCE 2025",
  //   description:
  //     "14-18 September, 2025, Biju Patnaik University of Technology, Rourkela",
  //   primaryCta: { text: "Try Now", href: "#try" },
  //   secondaryCta: { text: "Watch Demo", href: "#demo" },
  // },
  // {
  //   id: 3,
  //   image:
  //     "https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&q=80",
  //   title: "BPUT",
  //   title2: "MULTI-INTERNATIONAL CONFERENCE 2025",
  //   description:
  //     "14-18 September, 2025, Biju Patnaik University of Technology, Rourkela",
  //   primaryCta: { text: "Start Free", href: "#free" },
  //   secondaryCta: { text: "See Features", href: "#features" },
  // },
];

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const checkMobile = () => {
  //     setIsMobile(window.innerWidth < 768);
  //   };

  //   checkMobile();
  //   window.addEventListener("resize", checkMobile);
  //   return () => window.removeEventListener("resize", checkMobile);
  // }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // const goToSlide = (index: number) => {
  //   setCurrentSlide(index);
  // };

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(nextSlide, 5000);
      return () => clearInterval(timer);
    }
  }, [isPaused, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;

    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setTouchStart(null);
  };

  return (
    <div
      className="relative h-[100svh] w-full max-w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image with Parallax */}
          <div
            className="absolute inset-0 bg-cover bg-bottom transform scale-110 transition-transform duration-[20s]"
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: `scale(${index === currentSlide ? "1.1" : "1"})`,
            }}
          />

          {/* Gradient Overlay */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" /> */}
          <div className="absolute inset-0 bg-[rgba(6,12,34,0.8)]" />

          {/* Content */}
          <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="w-full mx-auto text-center">
              <h2
                className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-3 sm:mb-4 leading-tight sm:leading-tight md:leading-tight transform transition-all duration-1000 ${
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                {slide.title}
              </h2>
              <h2
                className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-3 sm:mb-4 leading-tight sm:leading-tight md:leading-tight transform transition-all duration-1000  ${
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <span className="text-primary-red font-bold">
                  {slide?.title2?.split(" ")[0]}&nbsp;
                </span>
                {slide?.title2?.split(" ").slice(1).join(" ")}
              </h2>
              <p
                className={`text-lg sm:text-xl md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed transform transition-all delay-200 duration-1000 ${
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                {slide.description}
              </p>

              <CountdownTimer targetDate={"2025-11-14T00:00:00"} />


              <div
                className={`max-w-full flex flex-row gap-3 sm:gap-4 justify-center items-center transform transition-all delay-400 duration-1000 ${
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                {/* <a
                  href={slide.primaryCta.href}
                  className="w-full sm:w-auto px-3 sm:px-8 py-1.5 sm:py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base"
                >
                  {slide.primaryCta.text}
                </a>
                <a
                  href={slide.secondaryCta.href}
                  className="w-full sm:w-auto px-3 sm:px-8 py-1 sm:py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors duration-300 text-sm sm:text-base"
                >
                  {slide.secondaryCta.text}
                </a> */}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows - Hidden on mobile */}
      {/* {!isMobile && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-4 rounded-full bg-gradient-to-r from-black/30 to-black/20 backdrop-blur-sm text-white/90 
            hover:text-white hover:scale-110 hover:from-black/40 hover:to-black/30 
            transform transition-all duration-300 ease-out shadow-lg 
            focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent
            group"
            aria-label="Previous slide"
          >
            <ChevronLeft
              size={isMobile ? 20 : 28}
              className="transform transition-transform duration-300 group-hover:-translate-x-0.5"
            />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-4 rounded-full bg-gradient-to-l from-black/30 to-black/20 backdrop-blur-sm text-white/90 
            hover:text-white hover:scale-110 hover:from-black/40 hover:to-black/30 
            transform transition-all duration-300 ease-out shadow-lg
            focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent
            group"
            aria-label="Next slide"
          >
            <ChevronRight
              size={isMobile ? 20 : 28}
              className="transform transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </button>
        </>
      )} */}
      <div className="absolute bottom-6 sm:bottom-4  left-1/2 -translate-x-1/2 z-20 w-full max-w-7xl flex justify-evenly  mx-auto  py-6">
        {conferences.map((conf, index) => (
          <a
            key={index}
            href={conf.link}
            className="w-56 relative group block overflow-hidden border-4 border-white transition-transform transform hover:scale-105"
          >
            {/* Image */}
            <img
              src={conf.img}
              className="w-full  object-cover"
              alt={conf.title}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity flex-col gap-3">
              <span className="text-white text-lg font-semibold">
                {conf.title}
              </span>
              <button className=" flex items-center px-3 py-1 bg-transparent font-semibold border-primary-red border-2 rounded-sm text-primary-red hover:bg-primary-red hover:text-white hover:border-none">
                Visit
               
                  <ArrowRight className="ml-2" size={17} />
              
              </button>
            </div>
          </a>
        ))}
      </div>

      {/* Dot Indicators */}
      {/* <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-black/20 backdrop-blur-sm">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`group relative flex items-center justify-center ${
              index === currentSlide ? "w-6 sm:w-8" : "w-2 sm:w-3"
            } h-2 sm:h-3 transition-all duration-300 ease-out`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span
              className={`absolute inset-0 rounded-full transition-all duration-300 ease-out ${
                index === currentSlide
                  ? "bg-white scale-100"
                  : "bg-white/50 scale-75 group-hover:scale-90 group-hover:bg-white/70"
              }`}
            />
          </button>
        ))}
      </div> */}

      {/* Progress Bar */}
      {/* <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-white/20 z-20">
        <div
          className="h-full bg-white/80 backdrop-blur-sm transition-all duration-300 ease-linear"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div> */}
    </div>
  );
};

export default HeroCarousel;
