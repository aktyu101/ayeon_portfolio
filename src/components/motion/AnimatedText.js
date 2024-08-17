// src/components/AnimatedText.js
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedText = ({ children, delay, duration, y }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  return (
    <div style={{ overflow: "hidden" }} ref={ref}>
      <motion.div
        initial={{ y }}
        animate={{
          y: inView ? 0 : 90,
        }}
        transition={{ duration, delay, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimatedText;
