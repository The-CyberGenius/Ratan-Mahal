'use client';

import { useState } from 'react';
import { CalendarCheck } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    return (
        <section className="relative h-[55vh] md:h-screen w-full overflow-hidden bg-black/40">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] hover:scale-105"
                style={{ backgroundImage: "url('/images/ratan-mahal-main-view.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/40 md:bg-black/30 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white space-y-6 pt-10 md:pt-20">
                <div className="space-y-2 animate-in fade-in zoom-in duration-1000">
                    <p className="text-gold font-medium tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-base">
                        Welcome to Ratangarh
                    </p>
                    <h1 className="text-3xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight drop-shadow-lg">
                        Ratan Mahal Resort
                    </h1>
                    <p className="text-sm md:text-2xl font-light text-beige max-w-2xl mx-auto opacity-90">
                        Luxury Stay, Delicious Dining & Memorable Events
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-4 mt-8 animate-in slide-in-from-bottom-5 duration-1000 delay-300 transform scale-90 md:scale-100">
                    <div className="relative">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsBookingOpen(!isBookingOpen);
                            }}
                            className="bg-gold hover:bg-gold-dark text-white text-lg px-8 py-3 rounded-full shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
                        >
                            <CalendarCheck size={20} />
                            Check Availability
                        </button>

                        {/* Booking Options Popup */}
                        {isBookingOpen && (
                            <div className="absolute top-full left-0 mt-4 w-64 bg-white rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-5 duration-200 border border-gold/20 text-left z-50">
                                <div className="p-3 bg-royal-brown text-white text-center text-sm font-serif tracking-wider">
                                    Select Booking Partner
                                </div>
                                <div className="flex flex-col p-1">
                                    <a
                                        href="https://bookingengine.stayflexi.com/33986/?checkin=17-02-2026&num_nights=1&num_guests=2&source=google&hotel_id=33986"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-3 hover:bg-gold/10 text-gray-700 hover:text-gold-dark font-medium transition-colors border-b border-gray-50 flex items-center gap-2"
                                    >
                                        <span>🌍</span> Direct Booking
                                    </a>
                                    <a
                                        href="https://www.makemytrip.com/hotels/ratan_mahal-details-ratangarh.html"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-3 hover:bg-gold/10 text-gray-700 hover:text-gold-dark font-medium transition-colors border-b border-gray-50 flex items-center gap-2"
                                    >
                                        <span>🔴</span> MakeMyTrip
                                    </a>
                                    <a
                                        href="https://www.goibibo.com/hotels/ratan-mahal-hotel-in-ratangarh-2946142231608238183/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-3 hover:bg-gold/10 text-gray-700 hover:text-gold-dark font-medium transition-colors border-b border-gray-50 flex items-center gap-2"
                                    >
                                        <span>🟠</span> Goibibo
                                    </a>
                                    <a
                                        href="https://www.weddingwire.in/banquet-halls/ratan-mahal-hotel--e440636"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-3 hover:bg-gold/10 text-gray-700 hover:text-gold-dark font-medium transition-colors flex items-center gap-2"
                                    >
                                        <span>💍</span> WeddingWire
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                    <Link href="/rooms" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 text-lg px-8 py-3 rounded-full shadow-lg transition-all hover:scale-105 inline-block text-center flex items-center justify-center">
                        View Rooms
                    </Link>
                </div>

                {/* Google Rating Badge */}
                <a
                    href="https://www.google.com/maps/place/Ratan+Mahal+Resort+-+Hotel+%26+Restaurant/@28.0617218,74.595945,987m/data=!3m1!1e3!4m11!3m10!1s0x3914b98222df83a7:0x50dcbdf8587dc890!5m2!4m1!1i2!8m2!3d28.0617218!4d74.5985199!9m1!1b1!16s%2Fg%2F11r9p96xbx?entry=ttu&g_ep=EgoyMDI2MDIwMS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-6 md:bottom-12 flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 md:px-6 md:py-3 rounded-lg border border-white/20 animate-in fade-in duration-1000 delay-700 hover:bg-white/20 transition-all cursor-pointer scale-90 md:scale-100 origin-bottom"
                >
                    <div className="bg-white p-1 rounded">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-3 md:h-4" />
                    </div>
                    <div className="text-left">
                        <div className="flex text-gold text-xs md:text-sm">
                            {'★'.repeat(5)}
                        </div>
                        <div className="text-[10px] md:text-xs text-white/90">
                            <span className="font-bold">4.6/5</span> from 1,155+ reviews
                        </div>
                    </div>
                </a>
            </div>
        </section>
    );
}
