"use client";
import React, { useState } from "react";
import { motion } from "framer-motion"; // Para animações
import { MapPin, Phone, Mail, Clock, Instagram, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { mockData } from "../mock";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const whatsappMessage = `


Hello! My name is ${formData.name}

Here are the details of my tattoo order:

Idea of the tattoo: ${formData.message}

`.trim(); // Remove espaços extras no início e fim
    const whatsappUrl = `https://wa.me/${mockData.contact.phone.replace(
      /\D/g,
      ""
    )}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
    setFormData({ name: "", phone: "", email: "", message: "" }); // Limpa o formulário
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-[#fdfff1] to-[#473c38]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#201919] mb-6">
            Get in touch
          </h2>
          <p className="text-xl text-[#473c38]/80 max-w-2xl mx-auto">
            Ready to get started on your next tattoo? Let&apos;s talk about your
            idea!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Formulário - Colunas 1-2 em lg */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="bg-[#fdfff1] border-[#473c38]/10 shadow-lg h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#201919] mb-2">
                  Request a Quote
                </CardTitle>
                <p className="text-[#473c38]/80">
                  Fill out the form and we will contact you via WhatsApp to
                  schedule your appointment.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[#473c38] mb-2"
                      >
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="border-[#473c38]/20 focus:border-[#473c38] focus:ring-[#473c38] transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-[#473c38] mb-2"
                      >
                        Phone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 217 716 3462"
                        required
                        className="border-[#473c38]/20 focus:border-[#473c38] focus:ring-[#473c38] transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#473c38] mb-2"
                    >
                      E-mail
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="email@email.com"
                      required
                      className="border-[#473c38]/20 focus:border-[#473c38] focus:ring-[#473c38] transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#473c38] mb-2"
                    >
                      Tattoo Idea
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about the tattoo you have in mind..."
                      rows={4}
                      required
                      className="border-[#473c38]/20 focus:border-[#473c38] focus:ring-[#473c38] transition-all duration-200"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#473c38] hover:bg-[#201919] text-[#fdfff1] py-3 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Informações + Mapa + Social - Colunas 3-5 em lg */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Informações de Contato */}
            <Card className="bg-[#fdfff1] border-[#473c38]/10 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#201919]">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-[#473c38] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#201919] mb-1">
                      Address
                    </h4>
                    <p className="text-[#473c38]/80">
                      {mockData.contact.address}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-[#473c38] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#201919] mb-1">Phone</h4>
                    <p className="text-[#473c38]/80">
                      {mockData.contact.phone}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-[#473c38] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#201919] mb-1">
                      E-mail
                    </h4>
                    <p className="text-[#473c38]/80">
                      {mockData.contact.email}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#fdfff1] border-[#473c38]/10 shadow-lg">
              <CardContent>
                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-[#473c38] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#201919] mb-1">
                      <span className="border-b border-[#201919] pb-1 inline-block">
                        Visit us
                      </span>
                    </h4>
                    <div className="text-[#473c38]/80 flex flex-col gap-2">
                      <p>Monday: {mockData.contact.hours.weekdays}</p>
                      <p>Tuesday: {mockData.contact.hours.weekdays}</p>
                      <p>Wednesday: {mockData.contact.hours.weekdays}</p>
                      <p>Thursday: {mockData.contact.hours.weekdays}</p>
                      <p>Friday: {mockData.contact.hours.weekdays}</p>
                      <p>Saturday: {mockData.contact.hours.weekdays}</p>

                      <p>Sunday: {mockData.contact.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Redes Sociais - Ocupa 100% da largura na parte inferior */}
            <Card className="bg-[#473c38] text-[#fdfff1] shadow-lg col-span-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Follow us on Social Media
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/dias__wannessa",
                        "_blank"
                      )
                    }
                    className="flex-1 border-[#fdfff1]/20 text-[#fdfff1] hover:bg-[#fdfff1] hover:text-[#473c38] transition-all duration-300 transform hover:scale-105"
                  >
                    <Instagram className="h-5 w-5 mr-2" />
                    @dias__wannessa
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() =>
                      window.open("https://wa.me/+17812996869", "_blank")
                    }
                    className="flex-1 border-[#fdfff1]/20 text-[#fdfff1] hover:bg-[#fdfff1] hover:text-[#473c38] transition-all duration-300 transform hover:scale-105"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Whatsapp
                  </Button>
                </div>
                <p className="text-[#fdfff1]/80 text-sm mt-4 text-center">
                  See our latest work and follow our care tips.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
