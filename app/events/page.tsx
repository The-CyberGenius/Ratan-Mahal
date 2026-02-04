import Link from 'next/link';
import { Users, Music, Camera, Calendar } from 'lucide-react';

export default function Events() {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-off-white">
            <section className="container mx-auto px-4 mb-16 text-center">
                <span className="text-gold font-bold tracking-widest uppercase text-sm">Celebrations</span>
                <h1 className="text-4xl md:text-5xl font-serif text-royal-brown mt-2 mb-6">Events & Weddings</h1>
                <p className="max-w-3xl mx-auto text-lg text-gray-600 font-light">
                    Plan your dream wedding or corporate event at Ratan Mahal. Our expansive lawns and banquet halls provide the perfect backdrop for your special moments.
                </p>
            </section>

            <section className="container mx-auto px-4 mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Slider Placeholder */}
                    <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")' }}></div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
                            <h3 className="text-2xl font-serif mb-2">Grand Lawn</h3>
                            <p className="opacity-90">Capacity: 500+ Guests</p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="flex gap-4 items-start">
                            <div className="bg-white p-3 rounded-lg shadow-sm text-gold">
                                <Users size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-serif font-bold text-royal-brown">Large Capacity</h3>
                                <p className="text-gray-600">Ideally suited for large gatherings, from intimate engagements to grand receptions.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="bg-white p-3 rounded-lg shadow-sm text-gold">
                                <Music size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-serif font-bold text-royal-brown">Entertainment & Decor</h3>
                                <p className="text-gray-600">We assist with decoration, lighting, and sound systems to make your event lively.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="bg-white p-3 rounded-lg shadow-sm text-gold">
                                <Camera size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-serif font-bold text-royal-brown">Picturesque Venues</h3>
                                <p className="text-gray-600">Beautiful spots for wedding photography and pre-wedding shoots.</p>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-gray-200">
                            <h4 className="text-royal-brown font-bold mb-4">Perfect For:</h4>
                            <div className="flex flex-wrap gap-2">
                                {['Weddings', 'Receptions', 'Birthday Parties', 'Corporate Meetings', 'Anniversaries'].map(tag => (
                                    <span key={tag} className="bg-beige px-4 py-1 rounded-full text-sm text-royal-brown-light">{tag}</span>
                                ))}
                            </div>
                        </div>

                        <Link href="/contact" className="inline-flex items-center gap-2 bg-royal-brown text-white px-8 py-3 rounded-full hover:bg-gold hover:text-white transition-colors font-bold">
                            <Calendar size={18} />
                            Book Event Space
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
