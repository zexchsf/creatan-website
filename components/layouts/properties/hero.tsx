import BrownHouse from "@/assets/images/brown-house.jpg";
import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-white">
      <div>
        <div className="relative overflow-hidden bg-gradient-to-r from-black/80 to-black/40 min-h-[400px] lg:min-h-[500px]">
          <div className="absolute inset-0 z-0">
            <Image
              src={BrownHouse}
              alt="Modern house exterior"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20"></div>
          </div>

          <div className="relative z-10 flex items-center min-h-[400px] lg:min-h-[500px]">
            <div className="w-full max-w-6xl px-8 lg:px-16">
              <h1 className="text-3xl lg:text-4xl xl:text-[55px] font-medium text-white mb-6 leading-tight">
                Find Your Dream Property
              </h1>
              <p className="text-white text-lg lg:text-xl leading-relaxed ">
                Explore our carefully selected properties, each offering a
                unique opportunity to elevate your lifestyle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
