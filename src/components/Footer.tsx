"use client";
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { mockData } from "../mock";
import Image from "next/image";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#201919] text-[#fdfff1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="space-y-4 flex-row">
            <div className="flex items-center space-x-4">
              <Image
                src="/logo_white.png"
                alt="Instagram"
                width={70}
                height={20}
              />
              <h3 className="text-2xl font-bold text-[#fdfff1]">
                Wanessa Dias
              </h3>
            </div>
            <p className="text-[#fdfff1]/80 leading-relaxed">
              {mockData.artist.bio.substring(0, 120)}...
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#fdfff1]">Menu</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", id: "home" },
                { name: "About", id: "about" },
                { name: "Gallery", id: "gallery" },
                { name: "Services", id: "services" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-[#fdfff1]/80 hover:text-[#fdfff1] transition-colors duration-200 cursor-pointer"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#fdfff1]">
              Services
            </h4>
            <ul className="space-y-2">
              {mockData.services.map((service) => (
                <li key={service.id}>
                  <span className="text-[#fdfff1]/80">{service.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#fdfff1]">
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#473c38]" />
                <a
                  className="text-[#fdfff1]/80 text-sm"
                  href={`https://wa.me/${mockData.contact.phone.replace(
                    /\D/g,
                    ""
                  )}`}
                  target="_blank"
                >
                  {mockData.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#473c38]" />
                <span className="text-[#fdfff1]/80 text-sm">
                  {mockData.contact.email}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#473c38] mt-0.5" />
                <a
                  href={`https://www.google.com/maps/place/Bay+Ink+Tattoo+%26+Piercing/@32.7861466,-117.2085892,17z/data=!3m1!4b1!4m6!3m5!1s0x80deaa9d0a2551bb:0x236239fc9deef461!8m2!3d32.7861466!4d-117.2060143!16s%2Fg%2F11c1ph18vc?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D`}
                  target="_blank"
                  className="text-[#fdfff1]/80 text-sm leading-relaxed"
                >
                  {mockData.contact.address}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#473c38]/20 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#fdfff1]/60 text-sm">
              © {new Date().getFullYear()} Wanessa Dias. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
