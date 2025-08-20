import { FaTwitter, FaLinkedin, FaArrowUp } from "react-icons/fa";
import Logoimg from "../../assets/logo/bput-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#060c22fa] text-white pt-10 px-4 md:px-0">
      <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section - About */}
        <div>
          <div className="w-full flex items-center gap-4 mb-4">
            <img src={Logoimg} alt="BPUT Logo" className="w-12 h-12 " />
            <h1
              className={`ml-2 text-xl sm:text-3xl font-bold  transition-colors duration-300`}
              style={{ fontFamily: "Roboto Slab" }}
            >
              BPUT
              <span
                className="text-primary-red text-xl sm:text-[32px] font-semibold"
                style={{ fontFamily: "Roboto Slab" }}
              >
                &nbsp;MIC
              </span>
            </h1>
          </div>
          <p className="text-gray-300 max-w-[85%] ">
            Empowering Innovation, Inspiring Excellence: Join us at BPUT Multi
            International Conference to ignite creativity, foster collaboration,
            and drive transformative change in engineering, management, and
            pharmacy studies.
          </p>
        </div>

        {/* Center Section - Links */}
        <div>
          <h3 className="text-lg font-bold border-b-2 border-[#f82249] pb-2 mb-3">
            USEFUL LINKS
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 hover:text-[#f82249] transition">
              <a href="">
                <span className="text-[#f82249]">›</span> Home
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-[#f82249] transition">
              <a href="">
                <span className="text-[#f82249]">›</span> About Us
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-[#f82249] transition">
              <a href="">
                <span className="text-[#f82249]">›</span> Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section - Contact */}
        <div>
          <h3 className="text-lg font-bold border-b-2 border-[#f82249] pb-2 mb-3">
            CONTACT US
          </h3>
          <p className="text-gray-300">
            Biju Patnaik University of Technology, Chhend Colony, Rourkela,
            Odisha, India, 769015
          </p>
          <p className="mt-3">
            <span className="font-bold">Phone:</span> 0661-248-2556
          </p>
          <p className="mt-2">
            <span className="font-bold">Email:</span> bmic@bput.ac.in
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-[#f82249] transition"
            >
              <FaTwitter className="text-white" />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-[#f82249] transition"
            >
              <FaLinkedin className="text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center border-t border-gray-700 py-7 text-sm">
        <p>
          © Copyright{" "}
          <a className="font-semibold text-base text-primary-red" href="">
            BPUT Conference Webpage
          </a>
          . All Rights Reserved
        </p>
        {/* <p className="text-gray-400">
          Designed by{" "}
          <span className="text-[#f82249] font-semibold">
            Coding Club, BPUT
          </span>
        </p> */}
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-5 right-5 bg-[#f82249] p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        <FaArrowUp className="text-white" />
      </button>
    </footer>
  );
};

export default Footer;
