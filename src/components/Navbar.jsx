import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, Globe, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";


const Navbar = ({ language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavLinks = () => (
    <>
      {isHomePage && (
        <>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="text-gray-700 hover:text-purple-800 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            {language === "en" ? "About Us" : "हमारे बारे में"}
          </ScrollLink>
          <ScrollLink
            to="events"
            smooth={true}
            duration={500}
            className="text-gray-700 hover:text-purple-800 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            {language === "en" ? "Events" : "कार्यक्रम"}
          </ScrollLink>
          <ScrollLink
            to="members"
            smooth={true}
            duration={500}
            className="text-gray-700 hover:text-purple-800 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            {language === "en" ? "Members" : "सदस्य"}
          </ScrollLink>
        </>
      )}
      <Link
        to="/blog"
        className="text-gray-700 hover:text-purple-800"
        onClick={() => setIsMenuOpen(false)}
      >
        {language === "en" ? "Blog" : "ब्लॉग"}
      </Link>
    </>
  );

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-purple-800">
              {language === "en" ? "Tatsam" : "तत्सम"}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <button
              onClick={() => setLanguage(language === "en" ? "hi" : "en")}
              className="flex items-center space-x-1 text-purple-800 hover:text-purple-900 transition-colors"
            >
              <Globe size={20} />
              <span>{language === "en" ? "हिंदी" : "English"}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-purple-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }`}
        >
          <div className="flex flex-col space-y-4 pb-6">
            <NavLinks />
            <button
              onClick={() => {
                setLanguage(language === "en" ? "hi" : "en");
                setIsMenuOpen(false);
              }}
              className="flex items-center space-x-1 text-purple-800 hover:text-purple-900 transition-colors"
            >
              <Globe size={20} />
              <span>{language === "en" ? "हिंदी" : "English"}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
