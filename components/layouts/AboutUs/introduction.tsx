import Image from "next/image";
import OguntolaJoseph from "@/assets/images/oguntola-joseph.jpg";
import { PiArrowDownRightBold } from "react-icons/pi";

export default function Introduction() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-18 items-center">
          <div className="space-y-[10px] col-span-3">
            <div className="flex items-center gap-4">
              <PiArrowDownRightBold className="text-[#54B959] text-2xl" />
              <span className="font-medium text-[#6B6B6B] uppercase tracking-wide">
                About Us
              </span>
            </div>

            <h2 className="text-2xl lg:text-4xl font-semibold text-[#323232] leading-tight">
              Our Journey
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Creatan Garden started with a clear vision to help people find homes and properties they can be proud of. What began as a small team has grown into a trusted name in real estate built on honesty, quality and dedication.
            </p>

            <div className="grid grid-cols-3 gap-4 max-w-2xl pt-12 text-[#EBEBEB]">
              <div className="bg-[#005304] rounded-[10px] p-5 text-center">
                <div className="text-3xl font-semibold mb-1">20+</div>
                <div>Years in the industry</div>
              </div>

              <div className="bg-[#005304] rounded-[10px] p-5 text-center">
                <div className="text-3xl font-semibold mb-1">&gt;300</div>
                <div>Plots sold</div>
              </div>

              <div className="bg-[#005304] rounded-[10px] p-5 text-center">
                <div className="text-3xl font-semibold mb-1">90%</div>
                <div>Customer satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative col-span-2">
            <div className="relative w-[500px] h-[650px] rounded-2xl overflow-hidden">
              <Image
                src={OguntolaJoseph}
                alt="Eng. Oguntola Joseph - Chairman Creatan Garden"                
                fill
                className="object-cover rounded-[10px] " 
                priority
              />
              
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 rounded-[10px] text-center bg-[#FAFAFA] border-[6px] border-[#FAFAFA42] p-4 min-w-[280px] max-w-[320px]">
                <div className="font-semibold text-[#464646] text-[26px] w-full whitespace-nowrap">
                  Eng. Oguntola Joseph
                </div>
                <div className="text-[#6B6B6B] text-xl w-full whitespace-nowrap">
                  Chairman Creatan Garden
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}