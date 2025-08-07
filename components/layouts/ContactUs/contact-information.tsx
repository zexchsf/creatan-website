import LocationIcon from "@/assets/icons/location-icon.png";
import MailIcon from "@/assets/icons/mail-icon.png";
import PhoneIcon from "@/assets/icons/phone-icon.png";
import Image from "next/image";

const contactInfo = [
  {
    icon: <Image src={MailIcon} height={60} width={60} alt="Mail Icon" />,
    content: "creatangardenestateltd@gmail.com",
  },
  {
    icon: <Image src={PhoneIcon} height={60} width={60} alt="Phone Icon" />,
    content: "+234 913 634 7616, +234 906 466 5805",
  },
  {
    icon: (
      <Image src={LocationIcon} height={60} width={60} alt="Location Icon" />
    ),
    content: "Suit A24, Time Square Mall, Ikota villa, Eti-osa L.G.A",
  },
];

export function ContactInformation() {
  return (
    <section className="bg-[#1D1D1D] px-6 py-3">
      <div className="grid md:grid-cols-3 gap-3 text-center">
        {contactInfo.map((info, index) => (
          <div
            key={index}
            className="flex flex-col items-center h-40 bg-[#272727] border border-[#323232] justify-center gap-6 rounded-[10px]"
          >
            <div className="flex-shrink-0">{info.icon}</div>
            <p className="text-white font-medium">{info.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
