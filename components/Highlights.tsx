import { Wifi, Coffee, Car, Waves, Utensils, Baby, Sparkles, Accessibility } from 'lucide-react';

export default function Highlights() {
    const features = [
        { icon: Wifi, label: 'Free Wi-Fi' },
        { icon: Coffee, label: 'Free Breakfast' },
        { icon: Car, label: 'Free Parking' },
        { icon: Waves, label: 'Swimming Pool' },
        { icon: Utensils, label: 'Separate Veg Kitchen' },
        { icon: Baby, label: 'Child Friendly' },
        { icon: Sparkles, label: 'Party Buffets' },
        { icon: Accessibility, label: 'Accessible' },
    ];

    return (
        <section className="py-12 bg-beige/30 border-b border-gray-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 md:gap-8">
                    {features.map(({ icon: Icon, label }) => (
                        <div key={label} className="flex flex-col items-center justify-center gap-3 text-center group cursor-default">
                            <div className="p-3 bg-white rounded-full shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300 text-gold-dark">
                                <Icon size={24} />
                            </div>
                            <span className="text-sm font-medium text-royal-brown/80">{label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
