import {
  FaLeaf,
  FaHandshake,
  FaUsers,
  FaStar,
  FaLightbulb,
} from "react-icons/fa";

export function ValuesSection() {
  const values = [
    {
      icon: <FaLeaf className="text-[#006B05] text-2xl" />,
      title: "Sustainability",
      description:
        "We prioritize green development and long-term environmental stewardship.",
    },
    {
      icon: <FaHandshake className="text-[#006B05] text-2xl" />,
      title: "Integrity",
      description: "We build on trust, transparency, and ethical practices.",
    },
    {
      icon: <FaUsers className="text-[#006B05] text-2xl" />,
      title: "Community",
      description:
        "We believe in creating spaces that foster togetherness and safety.",
    },
    {
      icon: <FaStar className="text-[#006B05] text-2xl" />,
      title: "Excellence",
      description: "Our commitment to quality is reflected in every detail.",
    },
    {
      icon: <FaLightbulb className="text-[#006B05] text-2xl" />,
      title: "Innovation",
      description: "We embrace smart technologies and modern solutions.",
    },
  ];

  return (
    <section className="py-16 bg-inherit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-[14px] mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#323232]">
            Our Values
          </h2>
          <p className="text-xl text-[#6B6B6B] max-w-4xl mx-auto">
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary.
          </p>
        </div>

        <div className="bg-[#141414] rounded-3xl p-8 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-6xl mx-auto">
            {values.slice(0, 3).map((value, index) => (
              <div key={index} className="relative">
                <div className="px-8 text-white">
                  <div className="flex items-center gap-[14px] mb-4">
                    <div className="w-[60px] h-[60px] rounded-full border border-[#006B05] flex items-center justify-center">
                      {value.icon}
                    </div>
                    <h3 className="text-2xl text-[#FAFAFA] font-semibold">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-[#999999] text-lg leading-relaxed">
                    {value.description}
                  </p>
                </div>
                {index < 2 && (
                  <div className="absolute top-0 right-0 w-px h-full bg-[#353535]"></div>
                )}
              </div>
            ))}
          </div>

          <div className="py-[56px]">
            <div className="w-full h-px bg-[#353535] max-w-6xl mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-4xl mx-auto">
            {values.slice(3).map((value, index) => (
              <div key={index + 3} className="relative">
                <div className="px-8 text-white">
                  <div className="flex items-center gap-[14px] mb-4">
                    <div className="w-[60px] h-[60px] rounded-full border border-[#006B05] flex items-center justify-center">
                      {value.icon}
                    </div>
                    <h3 className="text-2xl text-[#FAFAFA] font-semibold">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-[#999999] text-lg leading-relaxed">
                    {value.description}
                  </p>
                </div>
                {index < 1 && (
                  <div className="absolute top-0 right-0 w-px h-full bg-[#353535]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

