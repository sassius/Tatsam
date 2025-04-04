import React from "react";
import { Calendar, Users, BookOpen } from "lucide-react";

import { events, members, blogPosts, blogCategories } from "../data";
import ParallaxSection from "../components/ParalaxSection";
import Newsletter from "../components/NewsLetterSection";
import BlogPreview from "../components/BlogPreview";
import MemberSection from "../components/MemberSection";
import About from "../components/About";
import EventSlider from "../components/EventSlider";

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
        {/* <div id='about' className="max-w-7xl mx-auto px-4 py-24">
          <h2 className="text-4xl font-bold text-center mb-12">
            {language === "en" ? "About Us" : "हमारे बारे में"}
          </h2>
          <div className="text-lg text-gray-700 max-w-4xl mx-auto space-y-6">
            {language === "en" ? (
              <>
                <p>
                  "Tatsam" is committed to promoting Hindi reading and writing
                  among the students of Netaji Subhas University of Technology.
                  Tatsam represents all students of the university who are
                  interested in the Hindi language. Our primary aim is to
                  cultivate a strong inclination towards Hindi within the
                  university.
                </p>
                <p>
                  We strive to achieve this goal by organizing various
                  competitions such as debates, poetry writing and recitation,
                  story writing, and more. In addition to this, we also host
                  numerous seminars, poetry gatherings, and other events based
                  on Hindi literature.
                </p>
                <p>
                  Ultimately, Tatsam is not just a group of like-minded students
                  — it is an emerging ideology rapidly gaining momentum within
                  the university.
                </p>
              </>
            ) : (
              <>
                <p>
                  "तत्सम" नेताजी सुभाष प्रौद्योगिकी विश्वविद्यालय के छात्रों में
                  हिंदी वाचन एवं लेखन को प्रोत्साहित करने के लिए प्रतिबद्ध है।
                  तत्सम विश्वविद्यालय के सभी हिंदी में रुचि रखने वाले छात्रों का
                  प्रतिनिधित्व करती है। हमारा ध्येय मूलतः विश्वविद्यालय में
                  हिंदी के प्रति रुझान पैदा करना है।
                </p>
                <p>
                  इस उद्देश्य की पूर्ति हम विभिन्न प्रतियोगिताओं के आयोजन द्वारा
                  करते है जैसे वाद-विवाद, कविता लेखन एवं पाठन, कहानी लेखन
                  इत्यादि। इसके अलावा हम हिंदी साहित्य पर आधारित अनेक
                  संगोष्ठियों, कवि सम्मेलनों आदि का भी आयोजन करते है।
                </p>
                <p>
                  अंततः तत्सम महज़ समान रुचि रखने वाले छात्रों का समूह ही नही
                  बल्कि विश्वविद्यालय में तेज़ी से उभरती हुई एक विचारधारा है।
                </p>
              </>
            )}
          </div>
        </div> */}
        <About language = {language}/>
      </ParallaxSection>

      {/* Events Section */}
      <ParallaxSection className="bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 py-24">
          <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center">
            <Calendar className="mr-3" />
            {language === "en" ? "Events" : "कार्यक्रम"}
          </h2>
          <EventSlider language={language}/>
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
