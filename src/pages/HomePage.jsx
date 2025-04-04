import React from "react";
import { Calendar, Users, BookOpen } from "lucide-react";

import { events, members, blogPosts, blogCategories } from "../Data";
import ParallaxSection from "../components/ParalaxSection";
import Newsletter from "../components/NewsLetterSection";
import BlogPreview from "../components/BlogPreview";
import MemberSection from "../components/MemberSection";
import About from "../components/About";
import EventSlider from "../components/EventSlider";
import Shlokas from "./Shlokas";

const HomePage = ({ language }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <ParallaxSection
        bgImage="https://images.unsplash.com/photo-1606819717115-9159c900370b?auto=format&fit=crop&q=80"
        className="flex items-center justify-center text-white"
      >
        <div className="bg-black/50 w-full h-full absolute" />
        <div className="relative z-10 text-center p-8">
          <h1 className="text-6xl font-bold mb-4">
            {language === "en" ? "Tatsam" : "तत्सम"}
          </h1>
          <p className="text-2xl">
            {language === "en"
              ? "The Hindi Society of NSUT"
              : "एनएसयूटी का हिंदी समाज"}
          </p>
        </div>
      </ParallaxSection>

      {/* About Section */}
      <ParallaxSection className="bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 py-24">
        <About language={language} />
        </div>
      </ParallaxSection>

      {/* Events Section */}
      <ParallaxSection className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-24">
          <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center">
            <Calendar className="mr-3" />
            {language === "en" ? "Events" : "कार्यक्रम"}
          </h2>
          <EventSlider language={language} />
        </div>
      </ParallaxSection>
      <ParallaxSection className="bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 py-24">
          <Shlokas language={language} />
        </div>
      </ParallaxSection>
      {/* Members Section */}
      <ParallaxSection className="bg-white">
        {/* <div className="max-w-7xl mx-auto px-4 py-24"> */}
        <MemberSection />
        {/* </div> */}
      </ParallaxSection>

      {/* Blog Preview Section */}
      <ParallaxSection className="bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 py-24">
          <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center">
            <BookOpen className="mr-3" />
            {language === "en" ? "Blog" : "ब्लॉग"}
          </h2>
          <BlogPreview
            posts={blogPosts}
            categories={blogCategories}
            language={language}
          />
        </div>
      </ParallaxSection>

      {/* Newsletter Section */}
      <Newsletter language={language} />
    </div>
  );
};

export default HomePage;
