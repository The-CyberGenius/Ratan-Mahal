'use client';

export default function Gallery() {
    const images = [
        "/images/ratan-mahal-exterior.jpg", // Main Exterior
        "/images/wedding-stage-night.png", // Grand Wedding Stage
        "/images/pool-day-clean.png", // Pool Day
        "/images/exterior-night-vertical.jpg", // Vertical Exterior
        "/images/wedding-stage-side.png", // Wedding Stage Side
        "/images/pool-event-day.png", // Pool Event Setup
        "https://images.unsplash.com/photo-1590490360182-f33dfe616d46?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Bedroom
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Dining
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Food
    ];

    return (
        <div className="pt-24 pb-16 min-h-screen bg-off-white">
            <section className="container mx-auto px-4 mb-12 text-center">
                <span className="text-gold font-bold tracking-widest uppercase text-sm">Visual Tour</span>
                <h1 className="text-4xl md:text-5xl font-serif text-royal-brown mt-2 mb-6">Gallery</h1>
                <p className="max-w-2xl mx-auto text-gray-600">
                    A glimpse into the luxury and comfort that awaits you at Ratan Mahal Resort.
                </p>
            </section>

            <section className="container mx-auto px-4">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                    {images.map((src, idx) => (
                        <div key={idx} className="break-inside-avoid relative rounded-xl overflow-hidden shadow-lg group">
                            <img
                                src={src}
                                alt={`Gallery Image ${idx + 1}`}
                                className="w-full h-auto transform transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
