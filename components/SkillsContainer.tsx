'use client';

import { useEffect, useRef } from 'react';
import { skills } from "@/utils/skills";
import Title from "./Title";
import Skill from "./Skill";

function SkillsContainer() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    const elements = containerRef.current.querySelectorAll<HTMLDivElement>('.skill-container');

    elements.forEach((el: HTMLDivElement) => {
      observer.observe(el);
    });

    return () => {
      elements.forEach((el: HTMLDivElement) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="w-3/4 py-16 px-6 mx-auto" ref={containerRef}>
      <Title text="My Skills/Technologies" className="text-4xl font-extrabold text-primary-foreground mb-12" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`skill-container opacity-0 ${index % 2 === 0 ? '' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }} // Add delay based on index
          >
            <Skill skill={skill} />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default SkillsContainer;
