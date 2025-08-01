import React, { useState } from 'react';
import { technologies } from '../data/projects';

interface TechnologiesProps {
  onTechnologySelect: (technology: string) => void;
  selectedTechnology: string;
}

const Technologies: React.FC<TechnologiesProps> = ({ onTechnologySelect, selectedTechnology }) => {
  return (
    <section id="technologies" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-orbitron">
            <span className="bg-gradient-to-r from-slate-200 via-blue-200 to-slate-200 bg-clip-text text-transparent">
              Technologies & Projects
            </span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-8"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Explore my expertise across different technologies and discover the projects I've built with each stack.
          </p>
        </div>

        {/* Technology buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologies.map((tech) => (
            <button
              key={tech.name}
              onClick={() => onTechnologySelect(tech.name)}
              className={`relative group px-8 py-4 rounded-xl border border-slate-700/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                selectedTechnology === tech.name
                  ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/50 shadow-lg shadow-blue-500/25'
                  : 'bg-slate-900/30 hover:bg-slate-800/50'
              }`}
            >
              {/* Button glow effect */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              {/* Button content */}
              <div className="relative flex items-center space-x-3">
                <span className="text-2xl">{tech.icon}</span>
                <span className="font-semibold text-slate-200 font-orbitron">{tech.name}</span>
              </div>

              {/* Selection indicator */}
              {selectedTechnology === tech.name && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              )}

              {/* Hover effects */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
                <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
                <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-pink-400 to-transparent"></div>
              </div>
            </button>
          ))}
        </div>

        {/* Technology description */}
        <div className="text-center">
          <div className="glass-panel p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-200 mb-4 font-orbitron">
              {selectedTechnology} Projects
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Click on any technology above to explore the projects I've built using that stack. 
              Each project showcases different aspects of my expertise and problem-solving abilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;