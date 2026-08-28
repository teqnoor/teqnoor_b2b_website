import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-10 pb-6 px-6 md:px-16 lg:px-24 border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {/* 1. Brand Section */}
        <div className="md:col-span-7 flex flex-col items-start">
          <div className="mb-4">
            <Image
              src="/images/b2b-logo.png"
              alt="b2b Logo"
              width={140} // Reduced slightly for better proportions
              height={35}
              style={{ height: "auto" }}
              className="object-contain"
              priority
            />
          </div>
          <p className="text-gray-500 text-[14px] leading-[1.6] mb-5 max-w-[500px]">
            B2BSEO Digital Marketing Agency is a B2B SEO agency in London for
            high value deals. We build the rankings, authority, and AI
            visibility to put you on the shortlist.
          </p>
          {/* Social Icons */}
          <div className="flex gap-3">
            {[
              { Icon: FaFacebookF, href: "https://facebook.com/teqnoor" },
              { Icon: FaTwitter, href: "https://twitter.com/teqnoor" },
              {
                Icon: FaLinkedinIn,
                href: "https://www.linkedin.com/company/teqnoor-limited/",
              },
              {
                Icon: FaInstagram,
                href: "https://www.instagram.com/teqnoorofficial/",
              },
              {
                Icon: FaPinterestP,
                href: "https://www.pinterest.com/teqnoorofficial/",
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center text-[#8A2BE2] hover:bg-[#8A2BE2] hover:text-white transition-all duration-300"
              >
                <social.Icon size={12} />
              </a>
            ))}
          </div>
        </div>

        {/* 3. Contact Section */}
        <div className="md:col-span-5">
          <h4 className="text-[18px] font-[700] text-gray-800 mb-4">Contact</h4>
          <ul className="flex flex-col gap-3">
            {/* WhatsApp Link */}
            <li className="flex items-center gap-3 text-gray-500 group">
              <FaWhatsapp className="text-[#8A2BE2]" size={16} />
              <a
                href="https://wa.me/447918092156"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] hover:text-[#8A2BE2] transition-colors"
              >
                +447918092156
              </a>
            </li>

            {/* Phone Link */}
            <li className="flex items-center gap-3 text-gray-500 group">
              <FaPhoneAlt className="text-[#8A2BE2]" size={14} />
              <a
                href="tel:02035764066"
                className="text-[14px] hover:text-[#8A2BE2] transition-colors"
              >
                02035764066
              </a>
            </li>

            {/* Email Link */}
            <li className="flex items-center gap-3 text-gray-500 group">
              <FaEnvelope className="text-[#8A2BE2]" size={14} />
              <a
                href="mailto:info@teqnoor.com"
                className="text-[14px] hover:text-[#8A2BE2] transition-colors"
              >
                info@teqnoor.com
              </a>
            </li>

            {/* Address */}
            <li className="flex items-start gap-3 text-gray-500">
              <FaMapMarkerAlt className="text-[#8A2BE2] mt-1" size={16} />
              <span className="text-[14px] leading-snug">
                27 Gloucester Street, London WC1N 3AX
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-[1200px] mx-auto mt-10 text-center">
        <p className="text-gray-400 text-[12px]">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://teqnoor.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8A2BE2] hover:text-[#7928CA] transition-colors font-medium"
          >
            TEQNOOR
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
