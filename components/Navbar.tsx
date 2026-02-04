'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, CalendarCheck } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex flex-col items-center">
                    <span className={`text-2xl font-bold font-serif ${isScrolled ? 'text-royal-brown' : 'text-white'}`}>
                        Ratan Mahal
                    </span>
                    <span className={`text-[10px] tracking-widest uppercase ${isScrolled ? 'text-gold-dark' : 'text-gold'}`}>
                        Resort & Hotel
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {[
                        ['Home', '/'],
                        ['About', '/about'],
                        ['Rooms', '/rooms'],
                        ['Dining', '/dining'],
                        ['Events', '/events'],
                        ['Contact', '/contact'],
                    ].map(([label, href]) => (
                        <Link
                            key={href}
                            href={href}
                            className={`font-medium hover:text-gold transition-colors ${isScrolled ? 'text-royal-brown' : 'text-white'
                                }`}
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                    <a
                        href="tel:08854033167"
                        className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${isScrolled
                                ? 'border-royal-brown text-royal-brown hover:bg-royal-brown hover:text-white'
                                : 'border-white text-white hover:bg-white hover:text-royal-brown'
                            }`}
                    >
                        <Phone size={18} />
                        <span>Call Now</span>
                    </a>
                    <button className="bg-gold hover:bg-gold-dark text-white px-6 py-2 rounded-full shadow-lg transition-all flex items-center gap-2">
                        <CalendarCheck size={18} />
                        <span>Book Stay</span>
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-gold"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl py-6 px-4 flex flex-col space-y-4 animate-in slide-in-from-top-2">
                    {[
                        ['Home', '/'],
                        ['About Us', '/about'],
                        ['Rooms & Stay', '/rooms'],
                        ['Restaurant', '/dining'],
                        ['Events & Weddings', '/events'],
                        ['Gallery', '/gallery'],
                        ['Contact', '/contact'],
                    ].map(([label, href]) => (
                        <Link
                            key={href}
                            href={href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-royal-brown text-lg font-medium border-b border-gray-50 pb-2"
                        >
                            {label}
                        </Link>
                    ))}
                    <div className="flex flex-col gap-3 mt-4">
                        <a
                            href="tel:08854033167"
                            className="w-full text-center py-3 rounded-lg border border-royal-brown text-royal-brown font-bold"
                        >
                            Call Us
                        </a>
                        <button className="w-full bg-gold text-white py-3 rounded-lg font-bold shadow-md">
                            Check Availability
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
