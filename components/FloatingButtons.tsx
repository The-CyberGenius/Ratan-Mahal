'use client';

import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
    const whatsappNumber = "918854033167";
    const message = "Hello, I want to inquire about a room booking at Ratan Mahal Resort.";

    return (
        <div className="fixed bottom-20 md:bottom-8 right-4 z-40 flex flex-col gap-3">
            {/* WhatsApp Button */}
            <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle size={24} fill="white" />
            </a>

            {/* Call Button (Mobile: Hidden as it's in bar, Desktop: Visible) */}
            <a
                href="tel:08854033167"
                className="md:flex hidden bg-royal-brown text-white p-3 md:p-4 rounded-full shadow-lg hover:scale-110 transition-transform items-center justify-center"
                aria-label="Call Now"
            >
                <Phone size={24} fill="currentColor" />
            </a>
        </div>
    );
}
