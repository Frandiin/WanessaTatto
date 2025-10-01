"use client";
import { Menu, X } from "lucide-react";

import { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-[#fdfff1] shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Wanessa Dias" width={60} height={60} />
            <h1 className="text-2xl font-bold text-[#473c38]">Wanessa Dias</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8  ">
              <Button
                onClick={() => scrollToSection("home")}
                className="text-[#473c38] hover:text-[#201919] hover:border-b-1 hover:border-b-[#201919] transition-colors duration-200 font-medium "
              >
                Home
              </Button>
              <Button
                onClick={() => scrollToSection("about")}
                className="text-[#473c38] hover:text-[#201919] hover:border-b-1 hover:border-b-[#201919] transition-colors duration-200 font-medium "
              >
                About
              </Button>

              <Button
                onClick={() => scrollToSection("gallery")}
                className="text-[#473c38] hover:text-[#201919] hover:border-b-1 hover:border-b-[#201919] transition-colors duration-200 font-medium "
              >
                Gallery
              </Button>
              <Button
                onClick={() => scrollToSection("services")}
                className="text-[#473c38] hover:text-[#201919] hover:border-b-1 hover:border-b-[#201919] transition-colors duration-200 font-medium "
              >
                Services
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="text-[#473c38] hover:text-[#201919] hover:border-b-1 hover:border-b-[#201919] transition-colors duration-200 font-medium "
              >
                Contact
              </Button>
            </div>
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-[#473c38] hover:bg-[#201919] text-[#fdfff1] transition-colors duration-200 px-6 py-2"
            >
              Schedule Consultation
            </Button>
          </div>

          {/* Mobile menu Button */}
          <div className="md:hidden">
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#473c38] hover:text-[#201919] transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#fdfff1] border-t border-[#473c38]/10">
              <Button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-3 py-2 text-[#473c38] hover:text-[#201919] font-medium transition-colors duration-200"
              >
                Home
              </Button>
              <Button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 py-2 text-[#473c38] hover:text-[#201919] font-medium transition-colors duration-200"
              >
                About
              </Button>
              <Button
                onClick={() => scrollToSection("portfolio")}
                className="block w-full text-left px-3 py-2 text-[#473c38] hover:text-[#201919] font-medium transition-colors duration-200"
              >
                Portfolio
              </Button>
              <Button
                onClick={() => scrollToSection("gallery")}
                className="block w-full text-left px-3 py-2 text-[#473c38] hover:text-[#201919] font-medium transition-colors duration-200"
              >
                Gallery
              </Button>
              <Button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-3 py-2 text-[#473c38] hover:text-[#201919] font-medium transition-colors duration-200"
              >
                Services
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 text-[#473c38] hover:text-[#201919] font-medium transition-colors duration-200"
              >
                Contact
              </Button>
              <div className="px-3 py-2">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-[#473c38] hover:bg-[#201919] text-[#fdfff1] transition-colors duration-200"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
