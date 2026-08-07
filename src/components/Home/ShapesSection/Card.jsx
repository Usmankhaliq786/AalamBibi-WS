"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import useCountUpAnimation from "@/hooks/useCounterAnimation";
import styles from "./ShapesSection.module.css";

const Card = ({ svg, number, animation, title, steps, classes = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useCountUpAnimation(isInView, animation, 1000, steps); // Pass increment value

  return svg;
  // <div
  //   className="shapwrap"
  //   ref={ref}
  // >
  //   <motion.div
  //     initial={{ opacity: 0, y: 0 }}
  //     animate={isInView ? { opacity: 1 } : {}}
  //     transition={{ duration: 0.6, ease: "easeOut" }}
  //     className={`shapText ${classes}`}
  //   >
  //     <span> {title} </span>
  //     <h3>{count === animation ? `${number}` : count}</h3>{" "}
  //   </motion.div>
  // </div>
};

export default Card;
