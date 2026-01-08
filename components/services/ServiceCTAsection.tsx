"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const MetaMasterCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Container with Background Image */}
        <div 
          className={`relative w-full h-[500px] sm:h-[600px] lg:h-[450px] rounded-3xl overflow-hidden transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Background Image - Replace with your cta-image.png */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/cta-image.jpg')`,
              backgroundColor: '#4a5568' // Fallback color
            }}
          >
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
          </div>

          {/* Union Line Overlay - Positioned at top edge */}
          <div className="absolute top-0 left-0 right-0 z-10">
            <img 
              src="/union.png" 
              alt="" 
              className="w-full h-auto opacity-40"
              style={{ mixBlendMode: 'overlay' }}
            />
          </div>

          {/* Content Box - Left Aligned */}
          <div className="relative h-full flex items-center z-20">
            <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20">
              {/* Content Container - Max width for text */}
              <div className="max-w-xl lg:max-w-2xl">
                {/* Title with Animation */}
                <h1 
                  className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-5 lg:mb-6 leading-tight transition-all duration-1000 delay-200 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  Ready to Elevate Your Brand<br />with Meta Master?
                </h1>

                {/* Description Text */}
                <p 
                  className={`text-sm sm:text-base lg:text-lg text-gray-300 mb-8 lg:mb-10 leading-relaxed max-w-md transition-all duration-1000 delay-400 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  From strategy to storytelling, we design social media experiences that connect, engage, and convert. Let's turn your online presence into measurable success.
                </p>

                {/* CTA Button */}
                <div 
                  className={`transition-all duration-1000 delay-600 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <button
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="group relative inline-flex items-center justify-center gap-3 bg-white text-black font-semibold px-7 sm:px-9 py-3.5 sm:py-4 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
                  >
                    {/* Hover gradient background */}
                    <span 
                      className={`absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 transition-transform duration-500 ${
                        isHovered ? 'translate-x-0' : '-translate-x-full'
                      }`}
                    />
                    
                    {/* Button text */}
                    <span className={`relative z-10 text-sm sm:text-base font-bold tracking-wider transition-colors duration-300 ${
                      isHovered ? 'text-white' : 'text-black'
                    }`}>
                      BOOK A CONSULTATION
                    </span>
                    
                    {/* Arrow icon */}
                    <ArrowRight 
                      className={`relative z-10 w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 ${
                        isHovered ? 'translate-x-1 text-white' : 'translate-x-0 text-black'
                      }`}
                      strokeWidth={2.5}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Subtle gradient overlay at bottom for depth */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default MetaMasterCTA;