import React, { useState } from "react";
import { Send } from "lucide-react";


const Newsletter = ({ language }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail("");
  };

  return (
    <div className="bg-purple-900 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold mb-4">
          {language === "en"
            ? "Subscribe to our Newsletter"
            : "हमारे न्यूज़लेटर की सदस्यता लें"}
        </h3>
        <p className="mb-8">
          {language === "en"
            ? "Stay updated with our latest events and activities"
            : "हमारे नवीनतम कार्यक्रमों और गतिविधियों से अपडेट रहें"}
        </p>
        <form onSubmit={handleSubmit} className="flex max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={language === "en" ? "Your email" : "आपका ईमेल"}
            className="flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-purple-600 px-6 py-2 rounded-r-lg hover:bg-purple-700 transition-colors flex items-center"
          >
            <Send size={20} className="mr-2" />
            {language === "en" ? "Subscribe" : "सदस्यता लें"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
