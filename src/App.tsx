import React, { useState } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import './styles/effects.css';

function App() {
  const [selectedTechnology, setSelectedTechnology] = useState('Python');

  const handleTechnologySelect = (technology: string) => {
    setSelectedTechnology(technology);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 relative overflow-x-hidden">
      {/* Particle background */}
      <ParticleBackground />
      
      {/* Main content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Technologies 
          onTechnologySelect={handleTechnologySelect}
          selectedTechnology={selectedTechnology}
        />
        <Projects selectedTechnology={selectedTechnology} />
        <Carousel />
        <Footer />
      </div>

      {/* Global decorative elements */}
      <div className="fixed top-20 left-5 w-1 h-1 bg-blue-400 rounded-full animate-pulse z-20"></div>
      <div className="fixed bottom-20 right-5 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500 z-20"></div>
      <div className="fixed top-1/2 left-10 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-1000 z-20"></div>
      
      {/* Background gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}

export default App;