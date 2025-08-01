import React, { useEffect, useRef } from 'react';
import { projects } from '../data/projects';

const Carousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    let scrollSpeed = 1;
    let isHovered = false;

    const scroll = () => {
      if (!isHovered && scrollElement) {
        scrollElement.scrollLeft += scrollSpeed;
        
        // Reset to beginning when reached end
        if (scrollElement.scrollLeft >= scrollElement.scrollWidth - scrollElement.clientWidth) {
          scrollElement.scrollLeft = 0;
        }
      }
      requestAnimationFrame(scroll);
    };

    // Mouse events to pause/resume scrolling
    const handleMouseEnter = () => { isHovered = true; };
    const handleMouseLeave = () => { isHovered = false; };

    scrollElement.addEventListener('mouseenter', handleMouseEnter);
    scrollElement.addEventListener('mouseleave', handleMouseLeave);

    scroll();

    return () => {
      scrollElement.removeEventListener('mouseenter', handleMouseEnter);  
      scrollElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Duplicate projects for seamless infinite scroll
  const duplicatedProjects = [...projects, ...projects];

  return (
    <section className="py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-orbitron">
            <span className="bg-gradient-to-r from-slate-200 via-blue-200 to-slate-200 bg-clip-text text-transparent">
              Featured Work
            </span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-8"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            A continuous showcase of my latest projects and achievements
          </p>
        </div>

        {/* Carousel container */}
        <div className="relative">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {duplicatedProjects.map((project, index) => (
              <CarouselCard key={`${project.id}-${index}`} project={project} />
            ))}
          </div>
        </div>

        {/* Instruction text */}
        <div className="text-center mt-8">
          <p className="text-slate-400 text-sm">
            Hover over any project to pause the carousel
          </p>
        </div>
      </div>
    </section>
  );
};

const CarouselCard: React.FC<{ project: any }> = ({ project }) => {
  return (
    <div className="flex-shrink-0 w-80 group cursor-pointer">
      <div className="chrome-card h-full hover:scale-105 transition-all duration-500">
        {/* Project image */}
        <div className="relative overflow-hidden rounded-t-xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
          
          {/* Technology badge */}
          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 text-xs font-semibold bg-blue-600/80 text-white rounded-full backdrop-blur-sm">
              {project.technology}
            </span>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-white text-sm font-semibold px-4 py-2 bg-black/50 rounded-full backdrop-blur-sm">
              View Project
            </div>
          </div>
        </div>

        {/* Project info */}
        <div className="p-4">
          <h4 className="text-lg font-bold text-slate-200 mb-2 font-orbitron group-hover:text-blue-300 transition-colors">
            {project.title}
          </h4>
          <p className="text-slate-300 text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Features preview */}
          <div className="flex flex-wrap gap-1 mt-3">
            {project.features.slice(0, 3).map((feature: string, idx: number) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs bg-slate-800/50 text-slate-400 rounded"
              >
                {feature}
              </span>
            ))}
            {project.features.length > 3 && (
              <span className="px-2 py-1 text-xs text-slate-500">
                +{project.features.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 rounded-xl border border-blue-400/30 shadow-lg shadow-blue-400/20"></div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;