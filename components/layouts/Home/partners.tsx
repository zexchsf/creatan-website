import Partner1 from "@/assets/partners/partner-1.png";
import Partner2 from "@/assets/partners/partner-2.png";
import Partner3 from "@/assets/partners/partner-3.png";
import Partner4 from "@/assets/partners/partner-4.png";
import Partner5 from "@/assets/partners/partner-5.png";
import Partner6 from "@/assets/partners/partner-6.png";

import Interior1 from "@/assets/images/interior-1.jpg";
import Interior2 from "@/assets/images/interior-2.jpg";

import Image from "next/image";
import { PiArrowDownRightBold } from "react-icons/pi";

const partners = [
  {
    image: Partner1,
    alt: "Partner 1",
  },
  {
    image: Partner2,
    alt: "Partner 2",
  },
  {
    image: Partner3,
    alt: "Partner 3",
  },
  {
    image: Partner4,
    alt: "Partner 4",
  },
  {
    image: Partner5,
    alt: "Partner 5",
  },
  {
    image: Partner6,
    alt: "Partner 6",
  },
];

export function Partners() {
  return (
    <section className="max-w-7xl mx-auto py-24">
      <div className="space-y-5">
        <p className="text-center text-[#6B6B6B] text-lg font-medium">
          Trusted by over 50+ major companies
        </p>
        <div className="flex items-center gap-8 justify-center">
          {partners.map((partner, index) => (
            <Image
              key={index}
              src={partner.image}
              alt={partner.alt}
              width={160}
              height={80}
            />
          ))}
        </div>
      </div>

      <div className="mt-32 rounded-2xl">
        <div className="grid lg:grid-cols-5 gap-20 items-center">
          <div className="relative col-span-3 ">
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2 relative h-[300px] overflow-visible">
                <Image
                  src={Interior1}
                  alt="Modern living room with elegant furniture"
                  className="rounded-[10px] object-cover w-full h-full shadow-lg relative z-10"
                  fill
                />
                <div className="absolute -bottom-5 -left-5 w-[170px] h-[118px] bg-[#54B959] rounded-tl-xl rounded-br-xl  opacity-80 z-0"></div>
              </div>
              <div className="relative col-span-1 mt-7 h-[300px]">
                <Image
                  src={Interior2}
                  alt="Modern interior staircase with chandelier"
                  className="rounded-[10px] object-cover w-full h-full shadow-lg"
                  fill
                />
              </div>
            </div>
          </div>
            
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-2">
              <PiArrowDownRightBold className="text-[#54B959] text-2xl" />
              <span className="text-[#6B6B6B] text-sm font-medium uppercase tracking-wide">
                Why Choose Us
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold text-[#010101] leading-tight mb-4">
              <span className="whitespace-nowrap">Your Trusted Partner</span>{" "}
              <span className="whitespace-nowrap">In Real Estate</span>
            </h2>

            <p className="text-xl text-[#6B6B6B] leading-relaxed mb-6">
              At Creatan Garden, we bring years of experience, local insight,
              and a deep understanding of the market to every property journey.
              From first-time buyers to seasoned investors, our track record
              speaks for itself.
            </p>

            <button className="bg-[#181818] hover:bg-[#181818]/80 text-white !px-8 !py-4 rounded-full font-medium transition-colors duration-300 text-base">
              More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
