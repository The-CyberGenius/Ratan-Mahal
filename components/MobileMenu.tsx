'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Utensils, BedDouble, CalendarCheck, Phone } from 'lucide-react';

export default function MobileMenu() {
    const pathname = usePathname();

    const navItems = [
        { label: 'Home', href: '/', icon: Home },
        { label: 'Rooms', href: '/rooms', icon: BedDouble },
        { label: 'Dining', href: '/dining', icon: Utensils },
        { label: 'Events', href: '/events', icon: CalendarCheck },
    ];

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] z-50">
            <div className="grid grid-cols-5 h-16 items-center max-w-lg mx-auto">
                {navItems.map(({ label, href, icon: Icon }) => {
                    const isActive = pathname === href;
                    return (
                        <Link
                            key={href}
                            href={href}
                            className={`flex flex-col items-center justify-center h-full space-y-1 ${isActive ? 'text-gold' : 'text-gray-500'
                                }`}
                        >
                            <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                            <span className="text-[10px] font-medium">{label}</span>
                        </Link>
                    );
                })}
                {/* Call Button (Special) */}
                <a
                    href="tel:08854033167"
                    className="flex flex-col items-center justify-center h-full space-y-1 text-royal-brown"
                >
                    <div className="bg-gold/20 p-2 rounded-full">
                        <Phone size={20} className="text-gold-dark" fill="currentColor" />
                    </div>
                </a>
            </div>
        </div>
    );
}
