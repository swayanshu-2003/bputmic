import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/logo/bput-logo.png";

const navLinks = [
  { href: "#home", label: "Home", type: "section" },
  { href: "#about", label: "About", type: "section" },
  { href: "/committee", label: "Committee", type: "page" },
  { href: "/publication-ethics", label: "Publication Ethics", type: "page" },
  { href: "#schedule", label: "Schedule", type: "section" },
  { href: "#registration", label: "Registration", type: "section" },
  { href: "#speakers", label: "Speakers", type: "section" },
  { href: "/paper-submission", label: "Paper Submission", type: "page" },
  { href: "#venue", label: "Venue", type: "section" },
  { href: "#hotels", label: "Hotels", type: "section" },
  { href: "#gallery", label: "Gallery", type: "section" },
  { href: "#contact", label: "Contact", type: "section" },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (href: string, type: string) => {
    if (type === "page") {
      window.location.href = href; // Navigate to a new page
    } else {
      if (window.location.pathname !== "/") {
        localStorage.setItem("scrollToSection", href); // Store section before redirecting
        window.location.href = "/"; // Redirect to homepage
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Auto-scroll after the homepage loads
  window.onload = () => {
    const section = localStorage.getItem("scrollToSection");
    if (section) {
      localStorage.removeItem("scrollToSection"); // Clear after using
      document.querySelector(section)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-fit ${
        isScrolled ? "bg-[#060c22fa] backdrop-blur-md " : "bg-transparent"
      }`}
      style={{ fontFamily: "Raleway" }}
    >
      <div className="max-w-7full mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo and Brand */}
          <a href="" className="flex-shrink-0 flex items-center">
            <img
              src={Logo}
              alt="bput logo"
              className={`w-8 h-8 sm:w-10 sm:h-10 ${
                isScrolled ? "text-indigo-600" : "text-white"
              } transition-colors duration-300`}
            />
            <span
              className={`ml-2 text-xl sm:text-3xl font-bold ${
                isScrolled ? "text-white" : "text-white"
              } transition-colors duration-300`}
              style={{ fontFamily: "Roboto Slab" }}
            >
              BPUT
              <span
                className="text-primary-red text-xl sm:text-[31px] font-semibold"
                style={{ fontFamily: "Roboto Slab" }}
              >
                &nbsp;MIC
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6 ">
            {navLinks.map((link) => (
              <span
                onClick={() => handleNavigation(link.href, link.type)}
                key={link.href}
                className={`cursor-pointer text-sm lg:text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled
                    ? "text-white hover:text-indigo-600"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </span>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled
                  ? "text-gray-700 hover:text-indigo-600 hover:bg-gray-100"
                  : "text-white hover:text-white hover:bg-white/10"
              } transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" color="white" aria-hidden="true" />
              ) : (
                <Menu
                  className="block h-6 w-6 "
                  color="white"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-[450px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        } overflow-hidden ${
          isScrolled
            ? "bg-white backdrop-blur-md"
            : "bg-black/70 backdrop-blur-sm"
        }`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1 sm:px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                isScrolled
                  ? "text-gray-700 hover:text-indigo-600 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
