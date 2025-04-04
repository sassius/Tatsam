import React from "react";
import { Link, useLocation } from "react-router";
import { Menu, Globe } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
const Navbar= ({ language, setLanguage }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav className={`fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-purple-800">
              {language === "en" ? "Tatsam" : "तत्सम"}
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              <>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  className="text-gray-700 hover:text-purple-800"
                >
                  {language === "en" ? "About Us" : "हमारे बारे में"}
                </ScrollLink>
                <ScrollLink
                  to="events"
                  smooth={true}
                  duration={500}
                  className="text-gray-700 hover:text-purple-800"
                >
                  {language === "en" ? "Events" : "कार्यक्रम"}
                </ScrollLink>
                <ScrollLink
                  to="members"
                  smooth={true}
                  duration={500}
                  className="text-gray-700 hover:text-purple-800"
                >
                  {language === "en" ? "Members" : "सदस्य"}
                </ScrollLink>
              </>
            ) : null}
            <Link to="/blog" className="text-gray-700 hover:text-purple-800">
              {language === "en" ? "Blog" : "ब्लॉग"}
            </Link>
            <button
              onClick={() => setLanguage(language === "en" ? "hi" : "en")}
              className="flex items-center space-x-1 text-purple-800"
            >
              <Globe size={20} />
              <span>{language === "en" ? "हिंदी" : "English"}</span>
            </button>
          </div>

          <div className="md:hidden">
            <button className="text-gray-700">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
