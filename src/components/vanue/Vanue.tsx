import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image1 from "../../assets/gallery/1.webp";
import Image2 from "../../assets/gallery/2.webp";
import Image3 from "../../assets/gallery/3.webp";
import Image4 from "../../assets/gallery/4.webp";
import Image5 from "../../assets/gallery/5.webp";
import Image6 from "../../assets/gallery/6.webp";
import Image7 from "../../assets/gallery/7.webp";
import Image8 from "../../assets/gallery/8.webp";
import Image9 from "../../assets/gallery/9.webp";

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  //   Image9,
];

const EventVenue = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className=" py-10 px-5 my-10">
      <div className="max-w-full mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          EVENT VENUE
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Event venue location info and gallery
        </p>
        <div className="w-16 h-1 bg-red-500 mx-auto mt-2"></div>

        {/* Map & Venue Info */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="overflow-hidden ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.810341792384!2d84.81654557474783!3d22.24727364481653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a20197ebdbdeb8d%3A0x1a65b18a67ce93f0!2sBiju%20Patnaik%20University%20of%20Technology%20Rourkela%20Odisha!5e0!3m2!1sen!2sin!4v1713703434871!5m2!1sen!2sin"
              //   width="600"
              className="w-full"
              height="340"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div
            className="relative bg-gray-900 text-white p-6 md:p-24 inset-0 bg-cover bg-bottom flex items-left justify-center flex-col gap-4"
            style={{
              backgroundImage: `url(${Image9})`,
            }}
          >
            <div className="absolute inset-0 bg-[rgba(6,12,34,0.8)]" />
            <h3 className="relative text-2xl md:text-4xl font-semibold " style={{fontFamily: "Roboto Slab"}}>
              Biju Patnaik University of <br /> Technology, Rourkela
            </h3>
            <p className="relative mt-2 text-gray-300 text-sm md:text-base">
              Located amidst the serene landscapes of Rourkela, Biju Patnaik
              University of Technology (BPUT) provides an inspiring backdrop for
              transformative dialogue and innovation.
            </p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden  cursor-pointer transform transition duration-300 hover:scale-[1.02]"
              onClick={() => {
                setCurrentIndex(index);
                setOpen(true);
              }}
            >
              <img
                src={image}
                alt="Event"
                className="w-full h-72 object-cover"
              />
            </div>
          ))}
        </div>

        {/* Lightbox for full image preview */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={images.map((src) => ({ src }))}
          index={currentIndex}
        />
      </div>
    </section>
  );
};

export default EventVenue;
