"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/Ui/button";

const Footer = () => {
  return (
    <footer className="relative bg-[#0a0f1c] text-white overflow-hidden">
      {/* Card with background image */}
      <div
        className="max-w-4xl mx-auto text-center px-8 py-16 mt-10 shadow-lg rounded-2xl relative z-10 bg-cover bg-center"
        style={{
          backgroundImage: "url('/footer2.png')",
        }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          We would love to hear from you. <br /> Let’s Grow together
        </h2>
        <p className="text-gray-200 mb-6">
          With expertise in cutting edge technologies, we create responsive,
          user friendly websites and applications that looks stunning.
        </p>
        <Button className="bg-white text-black hover:bg-gray-200 px-6 py-2 rounded-lg">
          Contact us
        </Button>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 px-6 pt-20 pb-40 text-center text-sm">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-gray-300">
          <div className="flex items-center gap-2">
            <Phone size={16} /> <span>+91 9529770498</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} /> <span>aman@metamaster.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} /> <span>Nagpur, Maharashtra, India</span>
          </div>
        </div>

        <div className="flex justify-between items-center text-gray-400 mt-10 max-w-3xl mx-auto">
          <a href="#" className="hover:text-white">
            Terms and conditions
          </a>
          <p>All Rights Reserved ©Metamaster 2025</p>
          <a href="#" className="hover:text-white">
            Privacy policy
          </a>
        </div>
      </div>

      {/* Footer Illustration */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center pointer-events-none">
        <img
          src="/footer.png"
          alt="Robots Illustration"
          className="w-[800px] md:w-[1000px]"
        />
      </div>
    </footer>
  );
};

export default Footer;
