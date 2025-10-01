/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { mockData } from "../mock";
import { useState } from "react";
import Image from "next/image";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const allImages = [...mockData.gallery];

  const openLightbox = (image: unknown, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % allImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(allImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex =
      currentIndex === 0 ? allImages.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedImage(allImages[prevIndex]);
  };

  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-br from-[#fdfff1] to-[#473c38]/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Camera className="h-8 w-8 text-[#473c38]" />
            <h2 className="text-4xl md:text-5xl font-bold text-[#201919]">
              Gallery
            </h2>
          </div>
          <p className="text-xl text-[#473c38]/80 max-w-2xl mx-auto">
            Explore our collection of work and special moments from the studio
          </p>
        </div>

        {/* Pinterest-style Masonry Gallery */}
        <div className="masonry-container columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6">
          {allImages.map((image, index) => {
            // Variações de altura para efeito masonry mais dinâmico
            const heights = [
              "h-96", // 384px - grande

              "h-104", // 416px - muito grande
              "h-68", // 272px - médio-pequeno

              "h-76", // 304px - médio

              "h-92", // 368px - grande
            ];
            const randomHeight = heights[index % heights.length];

            return (
              <div
                key={`gallery-${image.id}-${index}`}
                className={`masonry-item group relative overflow-hidden rounded-2xl shadow-md cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl break-inside-avoid mb-6 ${randomHeight}`}
                onClick={() => openLightbox(image, index)}
              >
                <Image
                  width={1920}
                  height={1080}
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Pinterest-style subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Bottom info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-base font-semibold mb-1 truncate">
                      {image.title}
                    </h3>
                  </div>

                  {/* Top right action button */}
                  <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#473c38] hover:scale-110">
                    <Camera className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pinterest-style Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-200 z-20"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-200 z-20 hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-200 z-20 hover:scale-110"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image Container */}
            <div
              className="relative max-w-6xl max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Main Image */}
              <div className="relative">
                <Image
                  width={100}
                  height={100}
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
                />

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {currentIndex + 1} / {allImages.length}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-[#473c38] rounded-3xl p-8 md:p-12 text-[#fdfff1]">
            <h3 className="text-3xl font-bold mb-4">
              Get Inspired and Create Your Next Tattoo
            </h3>
            <p className="text-[#fdfff1]/80 mb-6 max-w-2xl mx-auto">
              Each image tells a unique story. Why don&apos;t we create yours?
            </p>
            <button
              onClick={() =>
                document
                  ?.getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-[#fdfff1] text-[#473c38] px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Let&apos;s Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
