import React from "react";
import { useInView } from "react-intersection-observer";


const ParallaxSection = ({
  children,
  bgImage,
  className = "",
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <div
      ref={ref}
      className={`relative min-h-screen ${className} ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } transition-all duration-1000`}
      style={
        bgImage
          ? {
              backgroundImage: `url(${bgImage})`,
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }
          : {}
      }
    >
      {children}
    </div>
  );
};

export default ParallaxSection;
