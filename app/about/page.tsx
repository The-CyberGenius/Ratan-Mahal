import Link from 'next/link';

export default function About() {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-off-white">
            {/* Header */}
            <section className="container mx-auto px-4 mb-16 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
                <span className="text-gold font-bold tracking-widest uppercase text-sm">Our Story</span>
                <h1 className="text-4xl md:text-5xl font-serif text-royal-brown mt-2 mb-6">About Ratan Mahal</h1>
                <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
                <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed font-light">
                    Experience the warmth of Rajasthani hospitality at Ratan Mahal Resort.
                    Verified by hundreds of happy guests, we are the pride of Ratangarh.
                </p>
            </section>

            {/* Main Content */}
            <section className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl bg-gray-200 group">
                        {/* Placeholder for About Image */}
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")' }}>
                        </div>
                        <div className="absolute inset-0 bg-black/10"></div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-serif text-royal-brown">A Peaceful Escape on Sardarshahar Highway</h2>
                        <div className="text-gray-600 space-y-4">
                            <p>
                                Located conveniently on the Sardarshahar Megha Highway near Sangam Chauraha, Ratan Mahal Resort
                                is more than just a hotel—it’s a destination. Since our opening, we have been dedicated to providing
                                a luxurious yet affordable stay for travelers, families, and business professionals.
                            </p>
                            <p>
                                Our property spans acres of lush greenery, offering a serene environment away from the city noise,
                                yet close enough to major attractions like **Ratangarh Fort** (3 km) and **Fatehpur Ka Bihad Park** (42 km).
                            </p>
                            <p className="font-hindi text-royal-brown/90 border-l-4 border-gold pl-4 py-1 italic">
                                "होटल रतन महल - सरदारशहर मेघा हाईवे पर एक शांत और शानदार अनुभव। आपके हर सफर और जश्न को हम खास बनाते हैं।"
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-gold/20 flex flex-col items-center">
                                <span className="text-2xl font-bold text-gold-dark">3 km</span>
                                <span className="text-xs uppercase tracking-wide">From Fort</span>
                            </div>
                            <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-gold/20 flex flex-col items-center">
                                <span className="text-2xl font-bold text-gold-dark">4.6★</span>
                                <span className="text-xs uppercase tracking-wide">Google Rating</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Vision/Mission or Why Choose Us */}
                <div className="bg-royal-brown text-white rounded-3xl p-8 md:p-12 shadow-2xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif mb-4 text-gold">Why Choose Ratan Mahal?</h2>
                        <p className="text-beige/80 max-w-2xl mx-auto">Perfect for Weddings, Highway Rest Stops, and Family Vacations.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-4">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-gold">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            </div>
                            <h3 className="text-xl font-serif mb-2">Luxury Accommodation</h3>
                            <p className="text-sm text-beige/70">Spacious rooms with modern amenities, premium bedding, and 24/7 room service.</p>
                        </div>
                        <div className="p-4">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-gold">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
                            </div>
                            <h3 className="text-xl font-serif mb-2">Fine Dining</h3>
                            <p className="text-sm text-beige/70">Multi-cuisine restaurant serving authentic Rajasthani, Indian, Chinese and Italian dishes.</p>
                        </div>
                        <div className="p-4">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-gold">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                            </div>
                            <h3 className="text-xl font-serif mb-2">Grand Events</h3>
                            <p className="text-sm text-beige/70">Expansive lawns and banquet halls perfect for royal weddings and corporate events.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="container mx-auto px-4 mt-20 text-center">
                <h2 className="text-3xl font-serif text-royal-brown mb-6">Ready to Experience Luxury?</h2>
                <Link href="/contact" className="inline-block bg-gold hover:bg-gold-dark text-white px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105 font-bold">
                    Contact Us Today
                </Link>
            </section>
        </div>
    );
}
