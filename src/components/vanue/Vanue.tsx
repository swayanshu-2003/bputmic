import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import ImageBg from "../../assets/gallery/bg.webp";

// Full-size images
import Image1 from "../../assets/gallery/1.webp";
import Image2 from "../../assets/gallery/2.webp";
import Image3 from "../../assets/gallery/3.webp";
import Image4 from "../../assets/gallery/4.webp";
import Image5 from "../../assets/gallery/5.webp";
import Image7 from "../../assets/gallery/7.webp";
import Image8 from "../../assets/gallery/8.webp";
import Image9 from "../../assets/gallery/9.webp";
import Image10 from "../../assets/gallery/10.webp";
import Image11 from "../../assets/gallery/11.webp";
import Image12 from "../../assets/gallery/12.webp";
import Image13 from "../../assets/gallery/13.webp";

// Thumbnails
import Thumb1 from "../../assets/gallery/thumb/1_thumb.webp";
import Thumb2 from "../../assets/gallery/thumb/2_thumb.webp";
import Thumb3 from "../../assets/gallery/thumb/3_thumb.webp";
import Thumb4 from "../../assets/gallery/thumb/4_thumb.webp";
import Thumb5 from "../../assets/gallery/thumb/5_thumb.webp";
import Thumb7 from "../../assets/gallery/thumb/7_thumb.webp";
import Thumb8 from "../../assets/gallery/thumb/8_thumb.webp";
import Thumb9 from "../../assets/gallery/thumb/9_thumb.webp";
import Thumb10 from "../../assets/gallery/thumb/10_thumb.webp";
import Thumb11 from "../../assets/gallery/thumb/11_thumb.webp";
import Thumb12 from "../../assets/gallery/thumb/12_thumb.webp";
import Thumb13 from "../../assets/gallery/thumb/13_thumb.webp";

// Arrays
const fullImages = [
  Image1, Image2, Image3, Image4, Image5,
  Image7, Image8, Image9, Image10, Image11,
  Image12, Image13,
];

const thumbs = [
  Thumb1, Thumb2, Thumb3, Thumb4, Thumb5,
  Thumb7, Thumb8, Thumb9, Thumb10, Thumb11,
  Thumb12, Thumb13,
];

const EventVenue = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="py-10 px-5 my-10">
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
          <div className="overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.810341792384!2d84.81654557474783!3d22.24727364481653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a20197ebdbdeb8d%3A0x1a65b18a67ce93f0!2sBiju%20Patnaik%20University%20of%20Technology%20Rourkela%20Odisha!5e0!3m2!1sen!2sin!4v1713703434871!5m2!1sen!2sin"
              className="w-full"
              height="340"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div
            className="relative bg-gray-900 text-white p-6 md:p-24 inset-0 bg-cover bg-bottom flex items-left justify-center flex-col gap-4"
            style={{ backgroundImage: `url(${ImageBg})` }}
          >
            <div className="absolute inset-0 bg-[rgba(6,12,34,0.8)]" />
            <h3
              className="relative text-2xl md:text-4xl font-semibold"
              style={{ fontFamily: "Roboto Slab" }}
            >
              Biju Patnaik University of <br /> Technology, Rourkela
            </h3>
            <p className="relative mt-2 text-gray-300 text-sm md:text-base">
              Located amidst the serene landscapes of Rourkela, BPUT provides an inspiring
              backdrop for transformative dialogue and innovation.
            </p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mt-2 grid grid-cols-1 sm:grid-cols-4 md:grid-cols-6 gap-2">
          {thumbs.map((thumb, index) => (
            <div
              key={index}
              className="overflow-hidden cursor-pointer hover:opacity-90 transition-opacity duration-200"
              onClick={() => {
                setCurrentIndex(index);
                setOpen(true);
              }}
            >
              <img
                src={thumb}
                alt={`Event ${index + 1}`}
                loading="lazy"
                className="w-full h-60 object-cover rounded-sm shadow-sm"
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={fullImages.map((src) => ({ src }))}
          index={currentIndex}
          animation={{ fade: 250 }}
        />
      </div>
    </section>
  );
};

export default EventVenue;
