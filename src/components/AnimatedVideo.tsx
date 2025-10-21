"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function AnimatedVideo({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ type: "spring", stiffness: 260, damping: 22, duration: 0.6 }}
      className="mt-12 overflow-hidden rounded-[2rem] border border-black/10 shadow-lg mx-auto max-w-4xl"
    >
      {children}
    </motion.div>
  );
}
