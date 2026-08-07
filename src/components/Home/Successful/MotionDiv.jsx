// components/MotionDiv.js
"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const MotionDiv = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Initial state: hidden and slightly below
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to full opacity and position when in view
      transition={{ duration: 0.6, ease: "easeOut" }} // Animation duration and easing
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
