'use client';

import { useEffect, useRef } from 'react';
import Project from "./Project";
import Title from "./Title";
import { projectList } from '@/utils/projects';

function ProjectContainer() {
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

    const elements = containerRef.current.querySelectorAll<HTMLDivElement>('.project-container');

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
      <Title text='My Projects' className='text-4xl font-extrabold text-primary-foreground mb-12' />
      <div className="grid grid-cols-1 gap-8">
        {projectList.map((project, index) => (
          <div 
            className={`project-container opacity-0 ${index % 2 === 0 ? '' : ''}`}
            key={index}
            style={{ animationDelay: `${index * 0.1}s` }} // Add delay based on index
          >
            <Project project={project} />
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

export default ProjectContainer;
