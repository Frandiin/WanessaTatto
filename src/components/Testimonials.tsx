"use client";
import React from "react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { mockData } from "../mock";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#473c38]/5 to-[#fdfff1] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#201919] mb-6">
            What our customers say
          </h2>
          <p className="text-xl text-[#473c38]/80 max-w-2xl mx-auto">
            Our customers&apos; satisfaction is our greatest achievement
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 cursor-pointer">
          {mockData.testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="group hover:shadow-xl transition-all duration-500 border-[#473c38]/10 bg-[#fdfff1] hover:bg-[#fdfff1]/90 transform hover:-translate-y-2 flex flex-col h-full"
            >
              <CardContent className="p-8 flex flex-col flex-grow">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-[#473c38]/30 group-hover:text-[#473c38]/50 transition-colors duration-300" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star
                      key={index}
                      className="h-5 w-5 text-[#473c38] fill-current"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-[#473c38]/90 mb-6 leading-relaxed italic flex-grow">
                  {testimonial.text}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 mt-auto">
                  <Image
                    width={100}
                    height={100}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#473c38]/10"
                  />
                  <div>
                    <h4 className="font-semibold text-[#201919]">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-[#473c38]/70">Customer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-[#473c38] rounded-3xl p-8 md:p-12 text-center">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-[#fdfff1]">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-[#fdfff1]/80">Satisfied Customers</div>
            </div>
            <div className="text-[#fdfff1]">
              <div className="text-4xl font-bold mb-2">2+</div>
              <div className="text-[#fdfff1]/80">Years of Experience</div>
            </div>
            <div className="text-[#fdfff1]">
              <div className="text-4xl font-bold mb-2">4.9</div>
              <div className="text-[#fdfff1]/80">Average Rating</div>
            </div>
            <div className="text-[#fdfff1]">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-[#fdfff1]/80">Guaranteed Security</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
