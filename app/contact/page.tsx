'use client';

import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-off-white">
            <section className="container mx-auto px-4 mb-16 text-center">
                <span className="text-gold font-bold tracking-widest uppercase text-sm">Get in Touch</span>
                <h1 className="text-4xl md:text-5xl font-serif text-royal-brown mt-2 mb-6">Contact Us</h1>
                <p className="max-w-2xl mx-auto text-gray-600">
                    Have questions? We'd love to hear from you. Reach out to us for bookings and inquiries.
                </p>
            </section>

            <section className="container mx-auto px-4 mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-serif text-royal-brown mb-6">Contact Details</h2>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="bg-gold/10 p-3 rounded-full text-gold-dark h-fit">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-royal-brown mb-1">Address</h4>
                                        <p className="text-gray-600">Sardarshahar Megha Highway, near Sangam Chauraha Road, Ratangarh, Rajasthan 331022</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="bg-gold/10 p-3 rounded-full text-gold-dark h-fit">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-royal-brown mb-1">Phone</h4>
                                        <a href="tel:08854033167" className="text-gray-600 hover:text-gold transition-colors">088540 33167</a>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="bg-gold/10 p-3 rounded-full text-gold-dark h-fit">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-royal-brown mb-1">Email</h4>
                                        <a href="mailto:info@ratanmahalhotel.com" className="text-gray-600 hover:text-gold transition-colors">info@ratanmahalhotel.com</a>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="h-64 rounded-2xl overflow-hidden shadow-lg border border-gold/30">
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

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-gold">
                        <h2 className="text-2xl font-serif text-royal-brown mb-6">Send us a Message</h2>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" placeholder="Your Phone" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" placeholder="Your Email" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" placeholder="How can we help you?"></textarea>
                            </div>
                            <button className="w-full bg-royal-brown text-white py-4 rounded-lg font-bold text-lg hover:bg-gold transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
