"use client";

import { useEffect, useState } from "react";
import { Phone, ArrowUp } from "lucide-react";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
 

      {/* RIGHT WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919529770498"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-24 z-50 bg-green-500
                    hover:bg-green-600 
                   w-16 h-16 rounded-full 
                   flex items-center justify-center 
                   shadow-xl transition duration-300"
      >
        <img
          src="/whatsapp.png"
          alt="whatsapp"
          className="w-8 h-18 object-contain"
        />
      </a>

      {/* SCROLL TO TOP BUTTON */}
     
    </>
  );
}
