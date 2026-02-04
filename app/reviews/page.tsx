import { Star } from 'lucide-react';

export default function Reviews() {
    const reviews = [
        {
            name: "Rahul Sharma",
            date: "2 months ago",
            rating: 5,
            text: "Best hotel in Ratangarh! The staff is very polite and the food is amazing. Highly recommended for families."
        },
        {
            name: "Anjali Gupta",
            date: "1 month ago",
            rating: 5,
            text: "We hosted our wedding here and it was magical. The arrangements were perfect and the venue is beautiful."
        },
        {
            name: "Vikram Singh",
            date: "3 weeks ago",
            rating: 4,
            text: "Great stop on the highway. Clean rooms and tasty parathas. Good parking space."
        },
        {
            name: "Priya Mehta",
            date: "4 months ago",
            rating: 5,
            text: "Peaceful environment. The pool is clean and the rooms are spacious. Will visit again."
        },
        {
            name: "Suresh Kumar",
            date: "1 week ago",
            rating: 5,
            text: "रतन महल का खाना बहुत ही लाजवाब है। स्टाफ का व्यवहार बहुत अच्छा है। (Food at Ratan Mahal is amazing. Staff behavior is very good.)"
        }
    ];

    return (
        <div className="pt-24 pb-16 min-h-screen bg-off-white">
            <section className="container mx-auto px-4 mb-16 text-center">
                <span className="text-gold font-bold tracking-widest uppercase text-sm">Testimonials</span>
                <h1 className="text-4xl md:text-5xl font-serif text-royal-brown mt-2 mb-6">What Our Guests Say</h1>
                <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-3xl font-bold text-royal-brown">4.6</span>
                    <div className="flex text-gold">{'★'.repeat(5)}</div>
                    <span className="text-gray-500">(1,155+ Reviews on Google)</span>
                </div>
                <a href="https://g.page/ratanmahal" target="_blank" className="text-gold hover:underline">Read all reviews on Google</a>
            </section>

            <section className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h4 className="font-bold text-royal-brown">{review.name}</h4>
                                    <span className="text-xs text-gray-400">{review.date}</span>
                                </div>
                                <div className="flex text-gold text-sm">
                                    {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">"{review.text}"</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="https://g.page/r/CThz31h-w8/review" target="_blank" className="inline-block bg-white border border-gold text-gold px-8 py-3 rounded-full hover:bg-gold hover:text-white transition-colors font-bold">
                        Write a Review
                    </a>
                </div>
            </section>
        </div>
    );
}
