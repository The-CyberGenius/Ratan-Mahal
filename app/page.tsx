import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Highlights />

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <span className="text-gold font-bold tracking-widest uppercase text-xs">Most Loved Destination Wedding Resort</span>
              <h2 className="text-3xl md:text-5xl font-serif text-royal-brown leading-tight">
                Choice of <br />
                <span className="text-gold-dark">Celebrities & VVIPs</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Ratan Mahal is the <b>most loved destination wedding resort</b> in Ratangarh.
                With separate veg kitchens, the best and largest party buffets, and packages that fit every budget—from Celeb Luxe to Mid-Budget.
                Experience an <i>Epic Bridal Entry</i> and a mesmerizing vibe that thousands of highly satisfied guests recommend.
              </p>
              <p className="text-gray-600 leading-relaxed font-hindi">
                रतन महल रिसॉर्ट में आपका स्वागत है। शादियों के लिए सबसे पसंदीदा जगह, जहाँ आपको मिलती है विशेष सुविधाएँ और
                <b>Separate Veg Kitchen</b>। सेलिब्रिटीज और VVIPs की पहली पसंद।
              </p>
              <div className="pt-4">
                <button className="text-royal-brown border-b-2 border-gold font-bold pb-1 hover:text-gold transition-colors">
                  Explore Wedding Packages
                </button>
              </div>
            </div>

            {/* Image Grid Placeholder */}
            {/* Image Grid */}
            {/* Image Grid */}
            <div className="w-full md:flex-1 grid grid-cols-2 gap-4 h-[300px] md:h-[400px]">
              <div className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden shadow-lg group">
                <img
                  src="/images/ratan-mahal-exterior.jpg"
                  alt="Ratan Mahal Exterior View"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="col-span-1 relative rounded-2xl overflow-hidden shadow-lg h-32 md:h-48 group">
                <img
                  src="/images/pool-day-clean.png"
                  alt="Swimming Pool"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="col-span-1 relative rounded-2xl overflow-hidden shadow-lg h-32 md:h-48 group">
                <img
                  src="/images/wedding-stage-night.png"
                  alt="Grand Weddings"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
