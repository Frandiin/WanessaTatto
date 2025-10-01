"use client";
import React from "react";
import { Clock, DollarSign, Palette, RotateCcw } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { mockData } from "../mock";

const Services = () => {
  const serviceIcons: {
    [key: number]: React.ComponentType<{ className?: string }>;
  } = {
    1: Palette,
    2: RotateCcw,
    3: RotateCcw,
    4: Clock,
  };

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-[#fdfff1]/50 to-[#fdfff1]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#201919] mb-6">
            Services
          </h2>
          <p className="text-xl text-[#473c38]/80 max-w-2xl mx-auto">
            We offer a complete range of services to transform your idea into
            reality
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {mockData.services.map((service) => {
            const IconComponent = serviceIcons[service.id];
            return (
              <Card
                key={service.id}
                className="group hover:shadow-xl transition-all duration-500 border-[#473c38]/10 bg-[#fdfff1] hover:bg-[#fdfff1]/80 transform hover:-translate-y-2 flex flex-col h-full"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-[#473c38]/10 rounded-full group-hover:bg-[#473c38]/20 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-[#473c38]" />
                  </div>
                  <CardTitle className="text-xl font-bold text-[#201919] mb-2">
                    {service.name}
                  </CardTitle>
                  <CardDescription className="text-[#473c38]/80">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 flex flex-col flex-grow">
                  <div className="space-y-3 flex-grow">
                    {service.duration && (
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-[#473c38]" />
                        <span className="text-[#473c38]/80">
                          {service.duration}
                        </span>
                      </div>
                    )}
                    {service.price && (
                      <div className="flex items-center gap-2 text-sm">
                        <DollarSign className="h-4 w-4 text-[#473c38]" />
                        <span className="font-semibold text-[#473c38]">
                          {service.price}
                        </span>
                      </div>
                    )}
                  </div>

                  <Button
                    className="w-full mt-6 bg-[#473c38] hover:bg-[#201919] text-[#fdfff1] transition-all duration-300 group-hover:scale-105"
                    onClick={() =>
                      document
                        ?.getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Schedule Consultation
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="bg-[#fdfff1] rounded-3xl p-8 md:p-12 border border-[#473c38]/10 shadow-lg">
          <h3 className="text-3xl font-bold text-[#201919] text-center mb-12">
            How It Works
          </h3>

          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            <div className="absolute top-8 w-full h-0.5 bg-[#473c38]/20 -translate-y-1/2"></div>

            <div className="grid md:grid-cols-4 ">
              {[
                {
                  step: "01",
                  title: "Consultation",
                  description:
                    "Initial conversation to understand your idea and expectations",
                },
                {
                  step: "02",
                  title: "Design",
                  description:
                    "Creation of a personalized drawing based on the briefing",
                },
                {
                  step: "03",
                  title: "Approval",
                  description:
                    "Revisions and adjustments until the final project approval",
                },
                {
                  step: "04",
                  title: "Execution",
                  description:
                    "Execution of the tattoo with all care and technique",
                },
              ].map((item, index) => (
                <div key={index} className="text-center group relative">
                  <div className="w-16 h-16 bg-[#473c38] text-[#fdfff1] rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-semibold text-[#201919] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-[#473c38]/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#473c38]/20"></div>

              {[
                {
                  step: "01",
                  title: "Consultation",
                  description:
                    "Initial conversation to understand your idea and expectations",
                },
                {
                  step: "02",
                  title: "Design",
                  description:
                    "Creation of a personalized drawing based on the briefing",
                },
                {
                  step: "03",
                  title: "Approval",
                  description:
                    "Revisions and adjustments until the final project approval",
                },
                {
                  step: "04",
                  title: "Execution",
                  description:
                    "Execution of the tattoo with all care and technique",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-start gap-6 mb-8 last:mb-0"
                >
                  {/* Step Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-[#473c38] text-[#fdfff1] rounded-full flex items-center justify-center text-lg font-bold group-hover:scale-110 transition-transform duration-300">
                      {item.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow pt-2">
                    <h4 className="text-lg font-semibold text-[#201919] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-[#473c38]/80 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
