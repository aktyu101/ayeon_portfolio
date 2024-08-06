// src/components/AnimatedText.js
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedText = ({ children, delay, duration }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  return (
    <div style={{ overflow: "hidden" }} ref={ref}>
      <motion.div
        initial={{ clipPath: "inset(100% 0 0 0)", Y: -30, opacity: 0 }}
        animate={{
          clipPath: inView ? "inset(0 0 0 0)" : "inset(100% 0 0 0)",
          Y: inView ? 0 : -30,
          opacity: inView ? 1 : 0,
        }}
        transition={{ duration, delay, ease: "easeInOut" }}
        style={{
          transformOrigin: "bottom",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimatedText;
