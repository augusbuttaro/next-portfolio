'use client'

import { Info } from "@/utils/info";
import Image from "next/image";
import { useEffect } from "react";

function Hero() {
  useEffect(() => {
    // Add animation on page load
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      heroSection.classList.add('slide-in-left');
    }
  }, []);

  return (
    <section className="flex items-center justify-center min-h-screen hero-section text-primary-foreground">
      <div className="absolute inset-0 z-10 bg-overlay"></div>

      <div className="z-20 flex items-end justify-between gap-16 px-8 md:px-16 py-16 max-w-7xl mx-auto">
        
        <div className="flex flex-col justify-center md:items-start text-center md:text-left space-y-8  w-[60%]">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            <span className="block">{Info.name}</span>
            <span className="block">{Info.surname}</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-8">{Info.position}</h2>
          <p className="text-base  mb-12">{Info.description}</p>
        </div>
        
        <div className="flex justify-end items-end w-1/3 mt-8 md:mt-0">
          <Image
            src={Info.image}
            alt="Profile picture"
            className="z-10 rounded-lg self-end shadow-lg transform shadow shadow-secondary hover:scale-105 transition duration-500"
            width={350}
            height={350}
          />
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          opacity: 0;
          animation: slideInLeft 1.2s ease-out forwards;
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}

export default Hero;
