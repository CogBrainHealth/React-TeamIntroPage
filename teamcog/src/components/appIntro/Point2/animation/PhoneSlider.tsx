"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PhoneFrame, Screen, SlideImage } from "./styled";

const images = [
  "/appImages/Point2Game1.png",
  "/appImages/Point2Game2.png",
  "/appImages/Point2Game3.png",
];

const PhoneSlider = () => {
  const [current, setCurrent] = useState(0);
  const [frameWidth, setFrameWidth] = useState(320);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const vw = window.innerWidth;
      if (vw <= 768) {
        setFrameWidth(vw * 0.8);
      } else {
        setFrameWidth(320);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <PhoneFrame style={{ width: frameWidth, height: frameWidth * 2 }}>
      <Screen>
        <motion.div
          style={{
            display: "flex",
            width: `${images.length * 100}%`,
            height: "100%",
          }}
          animate={{ x: `-${(100 / images.length) * current}%` }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              style={{
                width: `${100 / images.length}%`,
                height: "100%",
                flexShrink: 0,
              }}
            >
              <SlideImage src={src} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </motion.div>
      </Screen>
    </PhoneFrame>
  );
};

export default PhoneSlider;
