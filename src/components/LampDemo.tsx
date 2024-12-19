// LampDemo.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/Lamp";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 text-white py-4 text-center text-4xl font-medium tracking-tight md:text-7xl"
      >
        Visual Identity <br /> & Brand Aesthetics
      </motion.h1>
    </LampContainer>
  );
}