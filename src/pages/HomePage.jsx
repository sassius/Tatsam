import React from "react";
import { Calendar, Users, BookOpen } from "lucide-react";

import { events, members, blogPosts, blogCategories } from "../data";
import ParallaxSection from "../components/ParalaxSection";
import Newsletter from "../components/NewsLetterSection";
import BlogPreview from "../components/BlogPreview";

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
      <ParallaxSection className="bg-white">
        <div id="about" className="max-w-7xl mx-auto px-4 py-24">
          <h2 className="text-4xl font-bold text-center mb-12">
            {language === "en" ? "About Us" : "हमारे बारे में"}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
            {language === "en"
              ? "Tatsam is the Hindi Literary Society of NSUT, dedicated to promoting Hindi literature and culture through various events and activities."
              : "तत्सम एनएसयूटी का हिंदी साहित्यिक समाज है, जो विभिन्न कार्यक्रमों और गतिविधियों के माध्यम से हिंदी साहित्य और संस्कृति को बढ़ावा देने के लिए समर्पित है।"}
          </p>
        </div>
      </ParallaxSection>

      {/* Events Section */}
      <ParallaxSection className="bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 py-24">
          <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center">
            <Calendar className="mr-3" />
            {language === "en" ? "Events" : "कार्यक्रम"}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {new Date(event.date).toLocaleDateString(
                      language === "en" ? "en-US" : "hi-IN"
                    )}
                  </p>
                  <p className="text-gray-700">{event.description[language]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Members Section */}
      <ParallaxSection className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-24">
          <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center">
            <Users className="mr-3" />
            {language === "en" ? "Members" : "सदस्य"}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {members.map((member) => (
              <div key={member.id} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-purple-600">{member.role[language]}</p>
              </div>
            ))}
          </div>
        </div>
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
