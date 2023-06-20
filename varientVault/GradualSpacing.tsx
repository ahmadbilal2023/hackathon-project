import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export default function GradualSpacing() {
  const text = "Our Services";
  const variants1 = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="flex space-x-1 justify-center">
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.h1
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants1}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-3xl
            h2"
          >
            {char}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
}