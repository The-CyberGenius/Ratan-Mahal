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
              <span className="text-gold font-bold tracking-widest uppercase text-xs">About Ratan Mahal</span>
              <h2 className="text-3xl md:text-5xl font-serif text-royal-brown leading-tight">
                Luxury Stay & <br />
                <span className="text-gold-dark">Royal Experience</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Nestled on the Sardarshahar Megha Highway, Ratan Mahal Resort offers a peaceful escape in Ratangarh.
                Whether you are traveling for business, planning a dream wedding, or looking for a family getaway,
                our resort provides the perfect blend of traditional Rajasthani hospitality and modern comfort.
              </p>
              <p className="text-gray-600 leading-relaxed font-hindi">
                रतन महल रिसॉर्ट में आपका स्वागत है। हम आपको सरदारशहर मेघा हाईवे पर एक शानदार और आरामदायक अनुभव प्रदान करते हैं।
                शादी हो या पारिवारिक यात्रा, यहाँ हर पल खास बनता है।
              </p>
              <div className="pt-4">
                <button className="text-royal-brown border-b-2 border-gold font-bold pb-1 hover:text-gold transition-colors">
                  Read Our Story
                </button>
              </div>
            </div>

            {/* Image Grid Placeholder */}
            <div className="flex-1 grid grid-cols-2 gap-4 h-[400px]">
              <div className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden shadow-lg bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">Exterior View</div>
              </div>
              <div className="col-span-1 relative rounded-2xl overflow-hidden shadow-lg h-48 bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">Pool</div>
              </div>
              <div className="col-span-1 relative rounded-2xl overflow-hidden shadow-lg h-48 bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">Room</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
