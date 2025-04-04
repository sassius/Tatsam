import React, { useState, useEffect, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  Users,
} from "lucide-react";


const eventsHi = [
  {
    id: 1,
    title: "निर्वाक",
    date: "26 मार्च, 2024",
    location: "एनएसयूटी",
    attendees: "5000+",
    image: "./img1.jpeg",
    description: "वाद-विवाद प्रतियोगिता",
  },
  {
    id: 2,
    title: "विनाश स्टोरीज़",
    date: "24 मार्च, 2024",
    location: "एनएसयूटी",
    attendees: "2000+",
    image: "./img2.jpeg",
    description: "कहानी कहने की प्रतियोगिता",
  },
  {
    id: 3,
    title: "भ्रमास्त्र",
    date: "24 मार्च, 2024",
    location: "एनएसयूटी",
    attendees: "3000+",
    image: "./img3.jpeg",
    description: "प्रश्नोत्तरी प्रतियोगिता",
  },
  {
    id: 4,
    title: "निर्वाक",
    date: "7 अप्रैल, 2024",
    location: "एनएसयूटी",
    attendees: "1000+",
    image: "./img4.jpeg",
    description: "वाद-विवाद प्रतियोगिता",
  },
  {
    id: 5,
    title: "जिज्ञासा",
    date: "14 सितंबर, 2024",
    location: "एनएसयूटी",
    attendees: "1500+",
    image: "./img5.jpeg",
    description: "एक भारतीय प्रश्नोत्तरी प्रतियोगिता",
  },
];
const eventsEn = [
  {
    id: 1,
    title: "Nirvak",
    date: "March 26, 2024",
    location: "NSUT",
    attendees: "5000+",
    image: "./img1.jpeg",
    description: "Debate Competition",
  },
  {
    id: 2,
    title: "Vinash Stories",
    date: "MARCH 24, 2024",
    location: "NSUT",
    attendees: "2000+",
    image: "./img2.jpeg",
    description: "Story telling competition",
  },
  {
    id: 3,
    title: "Bhramshtra",
    date: "March 24, 2024",
    location: "NSUT",
    attendees: "3000+",
    image: "./img3.jpeg",
    description: "Questionary Competition",
  },
  {
    id: 4,
    title: "Nirvak",
    date: "April 7, 2024",
    location: "NSUT",
    attendees: "1000+",
    image: "./img4.jpeg",
    description: "Debate competition",
  },
  {
    id: 5,
    title: "Jigyasa",
    date: "September 14, 2024",
    location: "NSUT",
    attendees: "1500+",
    image: "./img5.jpeg",
    description: "An Indian Questionary Competition",
  },
];

const EventSlider = ({language}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % 5);
  }, []);

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + 5) % 5);
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  useEffect(() => {
    let intervalId;

    if (!isPaused) {
      intervalId = window.setInterval(() => {
        nextSlide();
      }, 2000); // Change slide every 5 seconds
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isPaused, nextSlide]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPaused(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div
        className="relative w-full h-[600px] rounded-xl overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {(language === "en" ? eventsEn : eventsHi).map((event, index) => (
          <div
            key={event.id}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              index === activeSlide
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-fit"
            />

            {/* Overlay */}
            <div
              className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">{event.title}</h2>
                <p className="text-lg mb-4">{event.description}</p>
                <div className="flex gap-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>{event.attendees}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {(language === "en" ? eventsEn : eventsHi).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventSlider;
