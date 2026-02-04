'use client';

import { CalendarCheck } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative h-[85vh] md:h-screen w-full overflow-hidden bg-black/40">
            {/* Background Image (Placeholder until real images) */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] hover:scale-105"
                style={{ backgroundImage: "url('/images/hero-desktop.png')" }}
            >
                <div className="absolute inset-0 bg-black/40 md:bg-black/30 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white space-y-6 pt-20">
                <div className="space-y-2 animate-in fade-in zoom-in duration-1000">
                    <p className="text-gold font-medium tracking-[0.2em] md:tracking-[0.3em] uppercase text-sm md:text-base">
                        Welcome to Ratangarh
                    </p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight drop-shadow-lg">
                        Ratan Mahal Resort
                    </h1>
                    <p className="text-lg md:text-2xl font-light text-beige max-w-2xl mx-auto opacity-90">
                        Luxury Stay, Delicious Dining & Memorable Events
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-4 mt-8 animate-in slide-in-from-bottom-5 duration-1000 delay-300">
                    <button className="bg-gold hover:bg-gold-dark text-white text-lg px-8 py-3 rounded-full shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2">
                        <CalendarCheck size={20} />
                        Check Availability
                    </button>
                    <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 text-lg px-8 py-3 rounded-full shadow-lg transition-all hover:scale-105">
                        View Rooms
                    </button>
                </div>

                {/* Google Rating Badge */}
                <div className="absolute bottom-20 md:bottom-12 flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-lg border border-white/20 animate-in fade-in duration-1000 delay-700">
                    <div className="bg-white p-1 rounded">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-4" />
                    </div>
                    <div className="text-left">
                        <div className="flex text-gold text-sm">
                            {'★'.repeat(5)}
                        </div>
                        <div className="text-xs text-white/90">
                            <span className="font-bold">4.6/5</span> from 1,155+ reviews
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
