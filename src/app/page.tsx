import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wanessa Dias",
  description: "Tatuadora e Artista",
  icons: {
    icon: "/logo.png",
  },
};

export default function Home() {
  return (
    <main>
      <Header />
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}
