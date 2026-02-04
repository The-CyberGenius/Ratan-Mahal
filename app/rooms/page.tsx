'use client';

import Link from 'next/link';
import { Wifi, Tv, Wind, Coffee, Maximize } from 'lucide-react';

const RoomCard = ({ title, price, description, image, features, hindiDesc }: any) => (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full group transition-all hover:shadow-2xl">
        <div className="relative h-64 overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${image}')` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
            <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-serif font-bold">{title}</h3>
            </div>
        </div>

        <div className="p-6 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-4">
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{description}</p>
                {/* Price could go here if known, e.g. <span className="font-bold text-royal-brown">₹3000/night</span> */}
            </div>

            {hindiDesc && (
                <p className="text-sm text-gray-500 font-hindi mb-4 italic border-l-2 border-gold pl-2">
                    {hindiDesc}
                </p>
            )}

            <div className="grid grid-cols-2 gap-3 mb-6">
                {features.map((Feature: any, idx: number) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-royal-brown/80">
                        <Feature size={14} className="text-gold" />
                        <span>{Feature.label}</span>
                    </div>
                ))}
            </div>

            <div className="mt-auto pt-4 border-t border-gray-100 flex gap-3">
                <Link href="/contact" className="flex-1 bg-royal-brown text-white py-2 rounded-lg text-center font-medium hover:bg-royal-brown-light transition-colors">
                    Book Now
                </Link>
                <button className="px-4 py-2 border border-gold text-gold rounded-lg hover:bg-gold/10 transition-colors">
                    Details
                </button>
            </div>
        </div>
    </div >
);

export default function Rooms() {
    const rooms = [
        {
            title: "Deluxe Family Room",
            image: "https://images.unsplash.com/photo-1590490360182-f33dfe616d46?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            description: "Spacious room perfect for families. Includes a king-size bed and a seating area.",
            hindiDesc: "परिवारों के लिए उत्तम। किंग साइज बेड और बैठने की जगह उपलब्ध।",
            features: [
                { label: "Free Wi-Fi", size: 14, icon: Wifi }, // Passing component as icon prop if needed, or just rendering mostly consistent checks
                { label: "AC", icon: Wind },
                { label: "Smart TV", icon: Tv },
                { label: "Room Service", icon: Coffee }
            ].map(f => ({ ...f, label: f.label, value: f })) // simplistic mapping for the card
        },
        {
            title: "Super Deluxe Room",
            image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            description: "Upgraded comfort with premium bedding, mini-bar, and city views.",
            hindiDesc: "प्रीमियम सुख-सुविधाओं के साथ। मिनी-बार और शहर का नज़ारा।",
            features: [
                { label: "Free Wi-Fi", icon: Wifi },
                { label: "AC & Heater", icon: Wind },
                { label: "Minibar", icon: Coffee },
                { label: "Work Desk", icon: Maximize }
            ]
        },
        {
            title: "Executive Suite",
            image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            description: "Our finest accomodation with pure luxury, separate living area and bathtub.",
            hindiDesc: "हमारी सबसे शानदार पेशकश। अलग लिविंग एरिया और बाथटब के साथ।",
            features: [
                { label: "High-Speed Wi-Fi", icon: Wifi },
                { label: "Bathtub", icon: Wind },
                { label: "Lounge Area", icon: Maximize },
                { label: "King Size Bed", icon: Tv }
            ]
        }
    ];

    // Helper to standardise icons for the card
    const getIcon = (label: string) => {
        if (label.includes("Wi-Fi")) return Wifi;
        if (label.includes("TV")) return Tv;
        if (label.includes("AC") || label.includes("Heater")) return Wind;
        if (label.includes("Service") || label.includes("Bar") || label.includes("Minibar")) return Coffee;
        return Maximize;
    };

    return (
        <div className="pt-24 pb-16 min-h-screen bg-off-white">
            <section className="container mx-auto px-4 mb-12 text-center">
                <span className="text-gold font-bold tracking-widest uppercase text-sm">Accommodation</span>
                <h1 className="text-4xl md:text-5xl font-serif text-royal-brown mt-2 mb-4">Rooms & Suites</h1>
                <p className="max-w-2xl mx-auto text-gray-600">
                    Relax in our tastefully designed rooms that blend Rajasthani elegance with modern comfort.
                </p>
            </section>

            <section className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rooms.map((room, index) => (
                        <RoomCard
                            key={index}
                            {...room}
                            features={room.features.map(f => ({ ...f, label: f.label, size: 16, type: getIcon(f.label) })).map((f: any) => f.type)}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
