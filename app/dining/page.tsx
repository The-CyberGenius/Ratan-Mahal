import Link from 'next/link';
import { Utensils, Coffee, Pizza, Soup } from 'lucide-react';

export default function Dining() {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-off-white">
            {/* Hero Section */}
            <section className="container mx-auto px-4 mb-16 text-center">
                <span className="text-gold font-bold tracking-widest uppercase text-sm">Fine Dining</span>
                <h1 className="text-4xl md:text-5xl font-serif text-royal-brown mt-2 mb-6">The Royal Taste of Ratangarh</h1>
                <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed font-light">
                    Experience a culinary journey at our multi-cuisine restaurant. From authentic Rajasthani Thali to
                    delicious Chinese and Italian dishes, we serve happiness on a plate.
                </p>
            </section>

            {/* Highlights Grid */}
            <section className="container mx-auto px-4 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: Soup, label: 'Authentic Indian', desc: 'Rich curries & Tandoori specials' },
                        { icon: Pizza, label: 'Italian & Chinese', desc: 'Pizza, Pasta & Noodles' },
                        { icon: Coffee, label: '24/7 Cafe', desc: 'Tea, Coffee & Snacks' },
                        { icon: Utensils, label: 'Family Dining', desc: 'Spacious seating for groups' }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gold/10 hover:shadow-md transition-shadow text-center">
                            <div className="bg-gold/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-gold-dark">
                                <item.icon size={24} />
                            </div>
                            <h3 className="font-serif font-bold text-royal-brown mb-2">{item.label}</h3>
                            <p className="text-sm text-gray-500">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Menu Items */}
            <section className="container mx-auto px-4 mb-20">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl font-serif text-royal-brown">Famous Delicacies</h2>
                        <ul className="space-y-4">
                            <li className="flex justify-between items-center border-b border-dashed border-gray-300 pb-2">
                                <span className="font-medium text-royal-brown">Kaju Curry (Special)</span>
                                <span className="text-gold-dark font-bold">₹350</span>
                            </li>
                            <li className="flex justify-between items-center border-b border-dashed border-gray-300 pb-2">
                                <span className="font-medium text-royal-brown">Rajasthani Thali</span>
                                <span className="text-gold-dark font-bold">₹450</span>
                            </li>
                            <li className="flex justify-between items-center border-b border-dashed border-gray-300 pb-2">
                                <span className="font-medium text-royal-brown">Paneer Butter Masala</span>
                                <span className="text-gold-dark font-bold">₹280</span>
                            </li>
                            <li className="flex justify-between items-center border-b border-dashed border-gray-300 pb-2">
                                <span className="font-medium text-royal-brown">Hakka Noodles</span>
                                <span className="text-gold-dark font-bold">₹220</span>
                            </li>
                        </ul>
                        <p className="text-sm text-gray-500 italic">* Prices are subject to change.</p>
                        <div className="pt-4">
                            <Link href="/contact" className="inline-block bg-gold hover:bg-gold-dark text-white px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105 font-bold">
                                Reserve a Table
                            </Link>
                        </div>
                    </div>

                    <div className="flex-1 grid grid-cols-2 gap-4 h-[400px]">
                        <div className="col-span-1 relative rounded-2xl overflow-hidden shadow-lg bg-gray-200">
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")' }}></div>
                        </div>
                        <div className="col-span-1 relative rounded-2xl overflow-hidden shadow-lg bg-gray-200 mt-8">
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")' }}></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
