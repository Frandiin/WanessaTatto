import React from "react";
import { Award, Heart, Palette, Clock } from "lucide-react";
import { mockData } from "@/mock";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-[#fdfff1] to-[#fdfff1]/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#201919] mb-6">
                About {mockData.artist.name}
              </h2>
              <p className="text-lg text-[#473c38]/80 leading-relaxed mb-6">
                With a delicate hand and an eye for detail, Wanessa specializes
                in fine line and floral tattoos that celebrate subtlety, beauty,
                and individuality. Inspired by nature and feminine forms, her
                work blends softness with precision, resulting in timeless
                pieces that feel both intimate and elegant.
              </p>
              <p className="text-lg text-[#473c38]/80 leading-relaxed">
                Wanessa is passionate about working collaboratively with her
                clients, ensuring that each tattoo reflects their story while
                honoring her signature minimalist aesthetic.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 bg-[#fdfff1] rounded-xl border border-[#473c38]/10 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="bg-[#473c38]/10 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-[#473c38]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#201919] mb-1">
                    Certified
                  </h3>
                  <p className="text-sm text-[#473c38]/80">
                    Professional training and specialization courses
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[#fdfff1] rounded-xl border border-[#473c38]/10 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="bg-[#473c38]/10 p-3 rounded-lg">
                  <Heart className="h-6 w-6 text-[#473c38]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#201919] mb-1">
                    Total Care
                  </h3>
                  <p className="text-sm text-[#473c38]/80">
                    Complete follow-up during the entire process
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[#fdfff1] rounded-xl border border-[#473c38]/10 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="bg-[#473c38]/10 p-3 rounded-lg">
                  <Palette className="h-6 w-6 text-[#473c38]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#201919] mb-1">
                    Exclusive Art
                  </h3>
                  <p className="text-sm text-[#473c38]/80">
                    Unique drawings created especially for you
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[#fdfff1] rounded-xl border border-[#473c38]/10 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="bg-[#473c38]/10 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-[#473c38]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#201919] mb-1">No Rush</h3>
                  <p className="text-sm text-[#473c38]/80">
                    Time required for a perfect job
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  width={1920}
                  height={1080}
                  src="/image1.jpeg"
                  alt="Tattoo process"
                  className="w-full  object-cover rounded-xl shadow-lg"
                />
                <Image
                  width={1920}
                  height={1080}
                  src="/image2.jpeg"
                  alt="Tattoo detail"
                  className="w-full  object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="mt-8">
                <Image
                  width={1920}
                  height={1080}
                  src="/image3.jpeg"
                  alt="Tattoo studio"
                  className="w-full  object-cover rounded-xl shadow-lg mb-4"
                />
                <Image
                  width={1920}
                  height={1080}
                  src="/image4.jpeg"
                  alt="Equipment"
                  className="w-full  object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#473c38]/10 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
