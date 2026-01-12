"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroSlider() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide after 2 seconds
    const timer = setTimeout(() => setVisible(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="
        fixed inset-0 z-[9998]
        flex items-center justify-center
        bg-gradient-to-r from-[#12001f] via-[#0e001a] to-[#12001f]
      "
    >
      
    </motion.div>
  );
}
