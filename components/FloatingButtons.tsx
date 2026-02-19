'use client';
import { useState } from 'react';



export default function WhatsAppIcon() {
    const [isHovered, setIsHovered] = useState(false);

    const handleWhatsAppClick = () => {
        const phoneNumber = '+919529770498'; // Replace with your WhatsApp number
        const message = 'Hello! I am interested in your services.'; // Default message
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <button
            onClick={handleWhatsAppClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`fixed bottom-6 right-6 z-50 cursor-pointer transition-all duration-300 ease-in-out ${
            isHovered ? 'scale-110 shadow-lg' : 'shadow-md'
            }`}
            aria-label="Chat on WhatsApp"
        >
            <img
            src="/whatsappss.png"
            alt="WhatsApp"
            className="w-16 h-16 rounded-full object-cover  "
            />
        </button>
    );
}