import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-royal-brown text-white/90 pt-16 pb-24 md:pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand & About */}
                    <div className="space-y-4">
                        <h2 className="text-3xl font-serif text-gold">Ratan Mahal</h2>
                        <p className="text-sm leading-relaxed text-beige/80 max-w-xs">
                            Luxury Hotel & Restaurant in Ratangarh. Experience the blend of tradition and modern comfort on the Sardarshahar Megha Highway.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-gold transition-colors"><Facebook size={20} /></a>
                            <a href="https://instagram.com/ratan_mahal_resort" target="_blank" className="hover:text-gold transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-gold transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-serif mb-6 text-gold-light">Explore</h3>
                        <ul className="space-y-3 text-sm">
                            {['Home', 'About Us', 'Rooms & Suites', 'Restaurant', 'Gallery', 'Events'].map(link => (
                                <li key={link}>
                                    <Link href={`/${link.toLowerCase().replace(/ /g, '-').replace('&', 'and')}`} className="hover:text-gold transition-colors">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-serif mb-6 text-gold-light">Contact Us</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex gap-3 items-start">
                                <MapPin className="text-gold shrink-0" size={18} />
                                <span>
                                    Sardarshahar Megha Highway, near Sangam Chauraha Road, Ratangarh, Rajasthan 331022
                                </span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Phone className="text-gold shrink-0" size={18} />
                                <div className="flex flex-col">
                                    <a href="tel:8854033167" className="hover:text-gold">88540 33167</a>
                                    <a href="tel:8854893167" className="hover:text-gold">88548 93167</a>
                                </div>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Mail className="text-gold shrink-0" size={18} />
                                <a href="mailto:info@ratanmahalhotel.com" className="hover:text-gold">info@ratanmahalhotel.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Map */}
                    <div className="h-48 rounded-lg overflow-hidden border border-gold/30">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14175.698964036667!2d74.60673854999999!3d28.07727405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396cb71112870dbd%3A0xc3cfc37e58df3538!2sRatan%20Mahal%20Hotel%20and%20Restaurant!5e0!3m2!1sen!2sin!4v1707123456789!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-xs text-beige/60">
                    <p>© {new Date().getFullYear()} Ratan Mahal Resort. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
