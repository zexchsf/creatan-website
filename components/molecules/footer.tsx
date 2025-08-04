import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
  FaChevronRight,
} from "react-icons/fa";
import CreatanLogo from "@/assets/images/creatan-logo.png";
import { PiPhoneThin } from "react-icons/pi";
import { CiMail, CiLocationOn } from "react-icons/ci";

export interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={`bg-gray-50 py-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="mb-6">
              <Image
                src={CreatanLogo}
                alt="Creatan Garden Real Estate"
                width={132}
                height={132}
              />
            </div>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-[#006B05] hover:text-[#005004] transition-colors"
              >
                <FaFacebookF size={20} />
              </Link>
              <Link
                href="#"
                className="text-[#006B05] hover:text-[#005004] transition-colors"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                href="#"
                className="text-[#006B05] hover:text-[#005004] transition-colors"
              >
                <FaLinkedinIn size={20} />
              </Link>
              <Link
                href="#"
                className="text-[#006B05] hover:text-[#005004] transition-colors"
              >
                <FaTelegramPlane size={20} />
              </Link>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-[#464646] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-[#272727] hover:text-[#006B05] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#272727] hover:text-[#006B05] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/properties"
                  className="text-[#272727] hover:text-[#006B05] transition-colors"
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-[#272727] hover:text-[#006B05] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#272727] hover:text-[#006B05] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-[#464646] mb-4">
              Properties
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/properties/residential"
                  className="text-[#464646] hover:text-[#006B05] transition-colors flex items-center group"
                >
                  <FaChevronRight className="mr-2 text-xs text-[#006B05]" />
                  Residential
                </Link>
              </li>
              <li>
                <Link
                  href="/properties/rentals"
                  className="text-[#464646] hover:text-[#006B05] transition-colors flex items-center group"
                >
                  <FaChevronRight className="mr-2 text-xs text-[#006B05]" />
                  Rentals
                </Link>
              </li>
              <li>
                <Link
                  href="/properties/shortlets"
                  className="text-[#464646] hover:text-[#006B05] transition-colors flex items-center group"
                >
                  <FaChevronRight className="mr-2 text-xs text-[#006B05]" />
                  Short lets
                </Link>
              </li>
              <li>
                <Link
                  href="/properties/commercial"
                  className="text-[#464646] hover:text-[#006B05] transition-colors flex items-center group"
                >
                  <FaChevronRight className="mr-2 text-xs text-[#006B05]" />
                  Commercial properties
                </Link>
              </li>
              <li>
                <Link
                  href="/properties/land"
                  className="text-[#464646] hover:text-[#006B05] transition-colors flex items-center group"
                >
                  <FaChevronRight className="mr-2 text-xs text-[#006B05]" />
                  Land
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-[#464646] mb-4 flex items-center gap-2">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-[#464646] flex items-center gap-2 mb-1">
                  <PiPhoneThin className="text-lg" />
                  <span>Hotline</span>
                </p>
                <p className="text-[#272727]">+234 913 634 7616,</p>
                <p className="text-[#272727]">+234 906 466 5805</p>
              </div>
              <div>
                <p className="text-[#464646] flex items-center gap-2 mb-1">
                  <CiMail className="text-lg" />
                  Email:
                </p>
                <p className="text-[#272727]">
                  creatangardenestatelltd@gmail.com
                </p>
              </div>
              <div>
                <p className="text-[#464646] flex items-center gap-2 mb-1">
                  <CiLocationOn className="text-lg" />
                  Head office:
                </p>
                <p className="text-[#272727]">
                  Suit A24, Time Square Mall, Ikota villa,
                  <br />
                  Eti-osa L.G.A
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#D9DBE9] mt-12 pt-8">
          <p className="text-[#464646] text-sm">
            All Rights Reserved . Copyright © 2025 Creatan Garden
          </p>
        </div>
      </div>
    </footer>
  );
}
