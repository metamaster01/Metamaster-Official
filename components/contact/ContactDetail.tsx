'use client';

import { Mail, Phone, Clock, Instagram, Youtube, Linkedin } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'aman@metamaster.in',
    href: 'mailto:aman@metamaster.in',
    color: 'from-purple-500 to-violet-500'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+919529770498',
    href: 'tel:+919529770498',
    color: 'from-violet-500 to-purple-500'
  },
  {
    icon: Clock,
    title: 'Time',
    value: 'Mon - Sat',
    subValue: '10:00 AM - 7:00 PM',
    color: 'from-purple-500 to-fuchsia-500'
  }
];

const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    href: '#',
    color: 'hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500'
  },
  {
    name: 'Youtube',
    icon: Youtube,
    href: '#',
    color: 'hover:bg-gradient-to-br hover:from-red-500 hover:to-pink-500'
  },
  {
    name: 'Linkedin',
    icon: Linkedin,
    href: '#',
    color: 'hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-500'
  }
];

export default function ContactDetails() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);

  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-gray-950 py-20 px-4 overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400">
            We'd love to hear from you
          </h2>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
                style={{
                  animation: `fade-in-up 0.6s ease-out ${index * 0.15}s both`
                }}
              >
                {/* Glow effect */}
                <div 
                  className={`absolute -inset-1 bg-gradient-to-r ${info.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500`}
                ></div>
                
                {/* Card */}
                <div className="relative bg-gray-900/80 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 h-full">
                  {/* Icon Container */}
                  <div className="mb-6">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${info.color} shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {info.title}
                  </h3>

                  {/* Value */}
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-purple-400 hover:text-purple-300 text-lg font-medium transition-colors duration-300 break-all"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <div>
                      <p className="text-purple-400 text-lg font-medium">{info.value}</p>
                      {info.subValue && (
                        <p className="text-purple-300 text-lg font-medium mt-1">{info.subValue}</p>
                      )}
                    </div>
                  )}

                  {/* Animated corner decorations */}
                  <div className={`absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-purple-500/0 group-hover:border-purple-500/50 rounded-tl-2xl transition-all duration-500 ${isHovered ? 'scale-110' : ''}`}></div>
                  <div className={`absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-500/0 group-hover:border-purple-500/50 rounded-br-2xl transition-all duration-500 ${isHovered ? 'scale-110' : ''}`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Social Media Links */}
        <div className="text-center animate-fade-in-up-delay">
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              const isHovered = hoveredSocial === index;
              
              return (
                <a
                  key={index}
                  href={social.href}
                  onMouseEnter={() => setHoveredSocial(index)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  className="group relative"
                  aria-label={social.name}
                  style={{
                    animation: `pop-in 0.5s ease-out ${index * 0.1 + 0.8}s both`
                  }}
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-2 bg-purple-500/50 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Button */}
                  <div className={`relative flex items-center gap-3 px-6 py-4 bg-gray-900/80 backdrop-blur-xl border-2 border-purple-500/20 rounded-xl ${social.color} hover:border-transparent transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-1 shadow-lg shadow-purple-900/20 hover:shadow-purple-900/50`}>
                    <Icon className={`w-6 h-6 text-purple-400 group-hover:text-white transition-all duration-300 ${isHovered ? 'animate-bounce-slow' : ''}`} />
                    <span className="text-white font-medium">{social.name}</span>
                  </div>

                  {/* Particle effect on hover */}
                  {isHovered && (
                    <>
                      <div className="absolute -top-2 -right-2 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
                      <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-violet-400 rounded-full animate-ping delay-150"></div>
                    </>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pop-in {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          50% {
            transform: scale(1.05) translateY(-5px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-fade-in-up-delay {
          animation: fade-in-up 0.8s ease-out 0.6s both;
        }
        .animate-bounce-slow {
          animation: bounce-slow 1s ease-in-out infinite;
        }
        .delay-150 {
          animation-delay: 150ms;
        }
        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </section>
  );
}