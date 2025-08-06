import {
  FaLeaf,
  FaHandshake,
  FaUsers,
  FaStar,
  FaLightbulb,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import Image from "next/image";

export function HomeSection() {
 

  const categories = [
    {
      title: "Apartment Residences",
      properties: "500 Properties",
      image: "/images/apartment-residences.jpg", // Replace with actual image path
    },
    {
      title: "Landed Properties",
      properties: "12,000 Properties",
      image: "/images/landed-properties.jpg", // Replace with actual image path
    },
    {
      title: "Buildings for Rent",
      properties: "50 Properties",
      image: "/images/buildings-rent.jpg", // Replace with actual image path
    },
  ];

  return (
    <div className="h-full space-y-6">
      {/** Our Values */}
   

      {/** Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-start mb-12">
            <div className="flex items-center">
              <h2 className="text-3xl md:text-[40px] w-fit font-bold text-[#003053]">
                Explore Our Categories
              </h2>
              <p className="w-full text-xl text-[#6B6B6B]">
                Start exploring a wide range of thoughtfully selected properties
                designed to match your lifestyle and goals. From elegant homes
                to premium lands and commercial spaces, each listing is curated
                to help you find your perfect fit.
              </p>
            </div>

            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <FaChevronLeft className="text-gray-600" />
              </button>
              <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <FaChevronRight className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
              </div>
              <h3 className="text-xl font-semibold text-[#323232] mb-2">
                {category.title}
              </h3>
              <p className="text-[#6B6B6B]">{category.properties}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
