import Link from 'next/link';
import { Wifi, Home, Flower, Dumbbell, Coffee, Waves, Briefcase, Shirt } from 'lucide-react';

export default function Amenities() {
    const amenities = [
        { icon: Waves, label: 'Outdoor Pool', desc: 'Relax in our crystal clear swimming pool.' },
        { icon: Flower, label: 'Rooftop Terrace', desc: 'Enjoy the view with evening tea or snacks.' },
        { icon: Home, label: 'Banquet Hall', desc: 'Wide space for weddings and conferences.' },
        { icon: Coffee, label: 'Cafe & Restaurant', desc: 'Open for all meals and quick bites.' },
        { icon: Dumbbell, label: 'Fitness Centre', desc: 'Stay fit with our modern gym equipment.' },
        { icon: Shirt, label: 'Laundry Service', desc: 'Quick and professional laundry on request.' },
        { icon: Briefcase, label: 'Business Centre', desc: 'Wi-Fi and meeting space for professionals.' },
        { icon: Wifi, label: 'Free Wi-Fi', desc: 'High-speed internet in all areas.' },
    ];

    return (
        <div className="pt-24 pb-16 min-h-screen bg-off-white">
            <section className="container mx-auto px-4 mb-16 text-center">
                <span className="text-gold font-bold tracking-widest uppercase text-sm">Facilities</span>
                <h1 className="text-4xl md:text-5xl font-serif text-royal-brown mt-2 mb-6">World-Class Amenities</h1>
                <p className="max-w-3xl mx-auto text-lg text-gray-600 font-light">
                    We go the extra mile to make your stay comfortable. From leisure to business needs, we have it all coverd.
                </p>
            </section>

            <section className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {amenities.map((item, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-start hover:border-gold/30 transition-colors group">
                            <div className="mb-4 text-royal-brown group-hover:text-gold transition-colors">
                                <item.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-serif font-bold text-xl text-royal-brown mb-2">{item.label}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Visual Break */}
            <section className="mt-20 h-[300px] w-full bg-fixed bg-cover bg-center relative" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1571896349842-68cfd8027a0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}>
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
                    <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Unwind by the Pool</h2>
                    <p className="text-white/80 max-w-lg mb-8">The perfect spot to relax after a long drive or busy day.</p>
                    <Link href="/contact" className="bg-white text-royal-brown px-8 py-3 rounded-full font-bold hover:bg-gold hover:text-white transition-colors">
                        Book Your Stay
                    </Link>
                </div>
            </section>
        </div>
    );
}
