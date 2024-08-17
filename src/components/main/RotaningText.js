import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const CircularScrollText = () => {
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Update animation based on scroll
    controls.start({
      rotate: scrollY * 0.6,
    });
  }, [scrollY, controls]);

  return (
    <div
      ref={containerRef}
      style={{
        height: "50vh", // Ensure enough scroll space
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <motion.div
        animate={controls}
        style={{
          width: "300px",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          border: "2px solid #000",
          position: "absolute",
        }}
      >
        <motion.div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            borderRadius: "50%",
            backgroundColor: "#f0f0f0",
          }}
        >
          <div style={{ position: "relative" }}>
            <motion.div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                borderRadius: "50%",
              }}
              animate={{ rotate: scrollY * 0.1 }}
            >
              <p style={{ margin: 0, textAlign: "center" }}>TEST</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CircularScrollText;
