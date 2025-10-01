"use client";
import React from "react";
import { Star, Award, Users } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="pt-16 relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1608666599953-b951163495f4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHx0YXR0b28lMjBzdHVkaW98ZW58MHx8fHwxNzU4NjgwNjk1fDA&ixlib=rb-4.1.0&q=85"
          alt="Tattoo Studio Background"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-[#fdfff1]/90"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-[#201919] leading-tight">
                Art that marks
                <span className="block text-[#473c38]">your story</span>
              </h1>
              <p className="text-xl text-[#473c38]/80 max-w-lg leading-relaxed">
                Specialist in realistic and blackwork tattoos with over 2 years
                of experience. Each piece is unique and created especially for
                you.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-[#473c38]" />
                <span className="text-[#473c38] font-semibold">experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-[#473c38]" />
                <span className="text-[#473c38] font-semibold">
                  500+ clients
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-[#473c38] fill-current" />
                <span className="text-[#473c38] font-semibold">
                  4.9/5 reviews
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-[#473c38] hover:bg-[#201919] text-[#fdfff1] px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => scrollToSection("contact")}
              >
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                className="border-[#473c38] text-[#473c38] hover:bg-[#473c38] hover:text-[#fdfff1] px-8 py-3 text-lg transition-all duration-300"
              >
                View Portfolio
              </Button>
            </div>
          </div>

          {/* Artist Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/profile.avif"
                alt="Wanessa Dias"
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
                width={1920}
                height={1080}
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-[#473c38]/10 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-[#201919]/5 rounded-2xl -z-10"></div>

            {/* Floating Card */}
            <div className="absolute bottom-8 left-8 bg-[#fdfff1] p-6 rounded-xl shadow-lg border border-[#473c38]/10">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#473c38]">8+</p>
                <p className="text-sm text-[#473c38]/80">Years of experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
