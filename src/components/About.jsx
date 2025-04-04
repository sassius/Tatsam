import React from "react";
import {
  Loader2,
  Facebook,
  Twitter,
  Instagram,
  ArrowRight,
} from "lucide-react";

function About({ language }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column with Image */}
          <div className="relative">
            <Loader2 className="absolute -left-12 top-0 w-24 h-24 text-indigo-600 animate-spin-slow" />
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                alt="Interior designer at work"
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>

          {/* Right Column with Content */}
          <div className="space-y-8">
            {language === "en" ? (
              <h1 className="text-6xl font-bold tracking-tight text-gray-900">
                ABOUT US
              </h1>
            ) : (
              <h1 className="text-6xl font-bold tracking-tight text-gray-900">
                हमारे बारे में
              </h1>
            )}

            <div className="space-y-6 text-lg text-gray-600">
              {language === "en" ? (
                <p>
                  "Tatsam" is committed to promoting Hindi reading and writing
                  among the students of Netaji Subhas University of Technology.
                  Tatsam represents all students of the university who are
                  interested in the Hindi language. Our primary aim is to
                  cultivate a strong inclination towards Hindi within the
                  university. We strive to achieve this goal by organizing
                  various competitions such as debates, poetry writing and
                  recitation, story writing, and more. In addition to this, we
                  also host numerous seminars, poetry gatherings, and other
                  events based on Hindi literature. Ultimately, Tatsam is not
                  just a group of like-minded students — it is an emerging
                  ideology rapidly gaining momentum within the university.
                </p>
              ) : (
                <p>
                  "तत्सम" नेताजी सुभाष प्रौद्योगिकी विश्वविद्यालय के छात्रों में
                  हिंदी वाचन एवं लेखन को प्रोत्साहित करने के लिए प्रतिबद्ध है।
                  तत्सम विश्वविद्यालय के सभी हिंदी में रुचि रखने वाले छात्रों का
                  प्रतिनिधित्व करती है। हमारा ध्येय मूलतः विश्वविद्यालय में
                  हिंदी के प्रति रुझान पैदा करना है। इस उद्देश्य की पूर्ति हम
                  विभिन्न प्रतियोगिताओं के आयोजन द्वारा करते है जैसे वाद-विवाद ,
                  कविता लेखन एवं पाठन, कहानी लेखन इत्यादि। इसके अलावा हम हिंदी
                  साहित्य पर आधारित अनेक संगोष्ठियों, कवि सम्मेलनों आदि का भी
                  आयोजन करते है। अंततः तत्सम महज़ समान रुचि रखने वाले छात्रों का
                  समूह ही नही बल्कि विश्वविद्यालय में तेज़ी से उभरती हुई एक
                  विचारधारा है।
                </p>
              )}
            </div>

            {/* CTA Button */}
            <button className="group inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors">
              {language === "en" ? "Learn More" : "और जानें"}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Social Links */}
            <div className="flex gap-6 pt-8">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default About;
