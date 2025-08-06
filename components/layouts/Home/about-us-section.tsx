import LivingRoom from "@/assets/images/living-room.png";
import Image from "next/image";

export function AboutUsSection() {
  return (
    <section className="relative bg-white py-16">
      <div className="max-w-9/10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-black/80 to-black/40 min-h-[400px] lg:min-h-[500px]">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={LivingRoom}
              alt="Luxury living room interior"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex items-center min-h-[400px] lg:min-h-[500px]">
            <div className="w-full max-w-4xl p-26">
              <h2 className="text-3xl lg:text-4xl xl:text-[55px] font-bold text-white mb-3 leading-tight">
                About Us
              </h2>

              <p className="text-white text-lg lg:text-xl leading-relaxed mb-6">
                With years of experience connecting clients to exceptional real
                estate opportunities, we pride ourselves on honesty, expertise,
                and personalized service. Let us help you turn your property
                goals into reality.
              </p>

              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium text-lg">
                See Our Mission
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
