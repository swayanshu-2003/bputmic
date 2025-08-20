// import React, { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import Logo from "../../assets/logo/bput-logo.png";
// import BmicLogo from "../../assets/logo/bmic-logo.webp";

// const navLinks = [
//   { href: "#home", label: "Home", type: "section" },
//   { href: "#about", label: "About", type: "section" },
//   { href: "/committee", label: "Committee", type: "page" },
//   { href: "/auther-guidelines", label: "Author Guidelines", type: "page" },
//   { href: "/publication-ethics", label: "Publication Ethics", type: "page" },
//   { href: "/schedule", label: "Schedule", type: "page" },
//   { href: "/registration", label: "Registration", type: "page" },
//   { href: "/speakers", label: "Speakers", type: "page" },
//   { href: "/paper-submission", label: "Paper Submission", type: "page" },
//   // { href: "#venue", label: "Venue", type: "section" },
//   // { href: "#hotels", label: "Hotels", type: "section" },
//   // { href: "#gallery", label: "Gallery", type: "section" },
//   { href: "#contact", label: "Contact", type: "section" },
// ];

// const Navbar: React.FC = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       setIsScrolled(scrollPosition > 20);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleNavigation = (href: string, type: string) => {
//     if (type === "page") {
//       window.location.href = href; // Navigate to a new page
//     } else {
//       if (window.location.pathname !== "/") {
//         localStorage.setItem("scrollToSection", href); // Store section before redirecting
//         window.location.href = "/"; // Redirect to homepage
//       } else {
//         document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   };

//   // Auto-scroll after the homepage loads
//   window.onload = () => {
//     const section = localStorage.getItem("scrollToSection");
//     if (section) {
//       localStorage.removeItem("scrollToSection"); // Clear after using
//       document.querySelector(section)?.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-fit ${
//         isScrolled ? "bg-[#060c22fa] backdrop-blur-md " : "bg-transparent"
//       }`}
//       style={{ fontFamily: "Raleway" }}
//     >
//       <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-6">
//         <div className="flex items-center justify-between h-16 sm:h-16">
//           {/* Logo and Brand */}
//           <a href="/" className="flex-shrink-0 flex items-center">
//             <img
//               src={Logo}
//               alt="bput logo"
//               className={`w-8 h-8 sm:w-10 sm:h-10 ${
//                 isScrolled ? "text-indigo-600" : "text-white"
//               } transition-colors duration-300`}
//             />
//             <img
//               src={BmicLogo}
//               alt="bput logo"
//               className={`w-8 h-8 sm:w-10 sm:h-10 ${
//                 isScrolled ? "text-indigo-600" : "text-white"
//               } transition-colors duration-300`}
//             />
//             <span
//               className={`ml-2 text-xl sm:text-3xl font-bold ${
//                 isScrolled ? "text-white" : "text-white"
//               } transition-colors duration-300`}
//               style={{ fontFamily: "Roboto Slab" }}
//             >
//               BMIC-ETET
//               <span
//                 className="text-primary-red text-xl sm:text-[31px] font-semibold"
//                 style={{ fontFamily: "Roboto Slab" }}
//               >
//                 &nbsp;2025
//               </span>
//             </span>
//           </a>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex md:items-center md:space-x-6 ">
//             {navLinks.map((link) => (
//               <span
//                 onClick={() => handleNavigation(link.href, link.type)}
//                 key={link.href}
//                 className={`cursor-pointer text-sm lg:text-sm font-medium transition-all duration-300 hover:scale-105 ${
//                   isScrolled
//                     ? "text-white hover:text-indigo-600"
//                     : "text-white/90 hover:text-white"
//                 }`}
//               >
//                 {link.label}
//               </span>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="flex md:hidden">
//             <button
//               onClick={toggleMenu}
//               className={`inline-flex items-center justify-center p-2 rounded-md ${
//                 isScrolled
//                   ? "text-gray-700 hover:text-indigo-600 hover:bg-gray-100"
//                   : "text-white hover:text-white hover:bg-white/10"
//               } transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               {isMenuOpen ? (
//                 <X className="block h-6 w-6" color="white" aria-hidden="true" />
//               ) : (
//                 <Menu
//                   className="block h-6 w-6 "
//                   color="white"
//                   aria-hidden="true"
//                 />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden transition-all duration-300 ease-in-out ${
//           isMenuOpen
//             ? "max-h-[450px] opacity-100"
//             : "max-h-0 opacity-0 pointer-events-none"
//         } overflow-hidden ${
//           isScrolled
//             ? "bg-white backdrop-blur-md"
//             : "bg-black/70 backdrop-blur-sm"
//         }`}
//       >
//         <div className="px-4 pt-2 pb-3 space-y-1 sm:px-6">
//           {navLinks.map((link) => (
//             <a
//               key={link.href}
//               href={link.href}
//               className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
//                 isScrolled
//                   ? "text-gray-700 hover:text-indigo-600 hover:bg-gray-100"
//                   : "text-white hover:bg-white/10"
//               }`}
//             >
//               {link.label}
//             </a>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import Logo from "../../assets/logo/bput-logo.png";
import BmicLogo from "../../assets/logo/bmic-logo.webp";

const navLinks = [
  {
    href: "#home",
    label: "Home",
    type: "section",
  },
  {
    href: "#about",
    label: "About",
    type: "section",
    sub: [
      {
        label: "About Conference",
        href: "#founders",
        type: "section",
        sub: [
          { label: "About BMIC-ETET", href: "/about", type: "page" },
          {
            label: "Why To Attend Conference",
            href: "/why-to-attend",
            type: "page",
          },
          {
            label: "Scope of the Conference",
            href: "/scope",
            type: "page",
          },
          {
            label: "Objective Of the Conference",
            href: "/objectives",
            type: "page",
          },
        ],
      },
      { label: "About Organizers", href: "#organizers", type: "section" },
      
      { label: "Conference Speakers", href: "/speakers", type: "page" },
      { label: "Conference FAQs", href: "#faq", type: "section" },
    ],
  },
  {
    href: "/committee",
    label: "Committee",
    type: "page",
    sub:[
      {
        label: "Core Committee",
        href: "/committee#patron",
        type: "page",
        sub: [
          {
            label: "Chief Patron",
            href: "/committee#chief_patron",
            type: "page",
          },
          {
            label: "Patron",
            href: "/committee#patron",
            type: "page",
          },
          {
            label: "Co-Patron",
            href: "/committee#co_patron",
            type: "page",
          },
          {
            label: "General Chair",
            href: "/committee#general_chair",
            type: "page",
          },
          {
            label: "Program Chair",
            href: "/committee#program_chair",
            type: "page",
          },
          {
            label: "Organizing Chair",
            href: "/committee#organizing_chair",
            type: "page",
          },
          {
            label: "Finance Chair",
            href: "/committee#finance_chair",
            type: "page",
          },
          {
            label: "Convenors",
            href: "/committee#convenors",
            type: "page",
          },
          {
            label: "Hospitality Chair",
            href: "/committee#hospitality_chair",
            type: "page",
          },
          {
            label: "Logistic Chair",
            href: "/committee#logistic_chair",
            type: "page",
          },
          {
            label: "Accomodation Chair",
            href: "/committee#accomodation_chair",
            type: "page",
          },
          {
            label: "Publicity Chair",
            href: "/committee#publicity_chair",
            type: "page",
          },
        ],
      },
      {
        label: "Technical Program Committee",
        href: "/tpc",
        type: "page",
      },
      {
        label: "Track Chair",
        href: "/track-chair",
        type: "page",
      },
    ]
  
  },
  { href: "/paper-submission", label: "Call For Paper", type: "page" },
  { href: "/publication-ethics", label: "Publication Ethics", type: "page" },
  { href: "/auther-guidelines", label: "Author Guidelines", type: "page" },
  { label: "Schedule", href: "/schedule", type: "page" },
  { href: "/registration", label: "Registration", type: "page" },
  { href: "/session-tracks", label: "Session & Tracks", type: "page" },
  { href: "#contact", label: "Contact", type: "section" },
];
const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavigation = (href: string, type: string) => {
    const [path, hash] = href.split("#");

    if (type === "page") {
      if (hash) {
        localStorage.setItem("scrollToSection", `#${hash}`);
      }
      window.location.href = path || "/";
    } else {
      if (window.location.pathname !== "/") {
        localStorage.setItem("scrollToSection", href);
        window.location.href = "/";
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const section = localStorage.getItem("scrollToSection");
    if (section) {
      localStorage.removeItem("scrollToSection");
      setTimeout(() => {
        document.querySelector(section)?.scrollIntoView({ behavior: "smooth" });
      }, 300); // Wait a bit in case DOM takes time to load
    }
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[120] transition-all duration-300 h-fit ${
        isScrolled ? "bg-[#060c22fa] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex items-center justify-between h-16 sm:h-16">
          <a href="/" className="flex-shrink-0 flex items-center">
            <img src={Logo} alt="bput logo" className="w-10 h-10" />
            <img src={BmicLogo} alt="bmic logo" className="w-10 h-10" />
            <span className="ml-2 text-3xl font-bold text-white font-raleway">
              BMIC-ETET<span className="text-primary-red ml-1">2025</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link, i) => (
              <div key={i} className="relative group">
                <span
                  onClick={() => handleNavigation(link.href, link.type)}
                  className={`cursor-pointer text-sm font-medium flex items-center gap-1 transition-all duration-300 hover:scale-105 ${
                    isScrolled
                      ? "text-white hover:text-indigo-400"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                  {link.sub && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        link.sub ? "group-hover:rotate-180" : ""
                      }`}
                    />
                  )}
                </span>

                {/* First Level Dropdown */}
                {link.sub && (
                  <div className="absolute left-0 top-full mt-2 w-52 bg-white rounded shadow-lg z-40 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200">
                    {link.sub.map((sub, j) => (
                      <div key={j} className="relative group/child">
                        <span
                          onClick={() => handleNavigation(sub.href, sub.type)}
                          className="px-4 py-2 flex justify-between items-center text-sm text-gray-800 hover:bg-gray-100 cursor-pointer transition-all duration-200"
                        >
                          {sub.label}
                          {sub.sub && (
                            <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover/child:rotate-180" />
                          )}
                        </span>

                        {/* Sub-sub dropdown */}
                        {sub.sub && (
                          <div className="absolute left-full top-0 w-max bg-white rounded shadow-lg z-50 opacity-0 group-hover/child:opacity-100 group-hover/child:visible invisible transition-opacity duration-200">
                            {sub.sub.map((s, k) => (
                              <span
                                key={k}
                                onClick={() => handleNavigation(s.href, s.type)}
                                className="px-4 py-2 block text-sm text-gray-800 hover:bg-gray-100 cursor-pointer transition-all duration-200"
                              >
                                {s.label}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-white rounded shadow p-4 space-y-2 max-h-[70vh] overflow-y-auto">
            {navLinks.map((link, i) => (
              <div key={i}>
                <span
                  onClick={() => {
                    handleNavigation(link.href, link.type);
                    setIsMenuOpen(false); // Optional: close menu on click
                  }}
                  className="block py-2 text-sm font-medium text-gray-800 cursor-pointer"
                >
                  {link.label}
                </span>
                {link.sub &&
                  link.sub.map((sub, j) => (
                    <div key={j} className="pl-4">
                      <span
                        onClick={() => {
                          handleNavigation(sub.href, sub.type);
                          setIsMenuOpen(false);
                        }}
                        className="block py-1 text-sm text-gray-600 cursor-pointer"
                      >
                        └ {sub.label}
                      </span>
                      {sub.sub &&
                        sub.sub.map((s, k) => (
                          <div key={k} className="pl-6">
                            <span
                              onClick={() => {
                                handleNavigation(s.href, s.type);
                                setIsMenuOpen(false);
                              }}
                              className="block py-1 text-sm text-gray-500 cursor-pointer"
                            >
                              └ {s.label}
                            </span>
                          </div>
                        ))}
                    </div>
                  ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
