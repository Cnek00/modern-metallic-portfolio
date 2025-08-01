import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        {/* Animated title */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4 relative">
            <span className="bg-gradient-to-r from-slate-200 via-blue-200 to-slate-200 bg-clip-text text-transparent animate-gradient-x font-orbitron tracking-wider">
              CNEK00
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-cyan-400/20 blur-3xl animate-pulse"></div>
          </h1>
          
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-8 animate-pulse"></div>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-2 font-orbitron">
            Full Stack Developer
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with cutting-edge technologies and innovative solutions
          </p>
        </div>

        {/* Glass morphism card */}
        <div className="glass-panel p-8 mb-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="chrome-button p-4">
              <div className="text-2xl font-bold text-blue-400 mb-2">3+</div>
              <div className="text-slate-300">Years Experience</div>
            </div>
            <div className="chrome-button p-4">
              <div className="text-2xl font-bold text-purple-400 mb-2">20+</div>
              <div className="text-slate-300">Projects Completed</div>
            </div>
            <div className="chrome-button p-4">
              <div className="text-2xl font-bold text-cyan-400 mb-2">5+</div>
              <div className="text-slate-300">Technologies Mastered</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a 
            href="https://github.com/Cnek00?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="chrome-button px-8 py-4 text-lg font-semibold text-white hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
          >
            View My Work
          </a>
          <a 
            href="mailto:cenkbelit@gmail.com"
            className="glass-button px-8 py-4 text-lg font-semibold text-slate-200 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
          >
            Contact Me
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-slate-400" />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border border-blue-400/30 rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 border border-purple-400/30 rotate-12 animate-float"></div>
      <div className="absolute top-1/2 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 left-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;