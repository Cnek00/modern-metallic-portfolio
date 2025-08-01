import React from 'react';
import { Code, Zap, Target, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { icon: Code, title: 'Clean Code', description: 'Writing maintainable and efficient code' },
    { icon: Zap, title: 'Performance', description: 'Optimizing for speed and efficiency' },
    { icon: Target, title: 'Precision', description: 'Attention to detail in every project' },
    { icon: Lightbulb, title: 'Innovation', description: 'Creative solutions to complex problems' }
  ];

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-orbitron">
            <span className="bg-gradient-to-r from-slate-200 via-blue-200 to-slate-200 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6">
            <div className="glass-panel p-8">
              <h3 className="text-2xl font-bold text-slate-200 mb-4 font-orbitron">
                Passionate Developer & Problem Solver
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                With over 3 years of experience in full-stack development, I specialize in creating 
                innovative digital solutions that combine cutting-edge technology with exceptional user experience. 
                My expertise spans across multiple programming languages and frameworks, allowing me to tackle 
                complex challenges with creative and efficient solutions.
              </p>
              <p className="text-slate-300 leading-relaxed">
                I'm a passionate developer who loves working with Python, JavaScript, TypeScript, Node.js, and Java. 
                I enjoy building everything from web scrapers and REST APIs to desktop applications and e-commerce platforms. 
                Always eager to learn new technologies and collaborate on exciting projects.
              </p>
            </div>

            {/* Technical expertise */}
            <div className="glass-panel p-6">
              <h4 className="text-lg font-semibold text-slate-200 mb-4 font-orbitron">Core Expertise</h4>
              <div className="grid grid-cols-2 gap-3">
                {['Python Development', 'FastAPI & Django', 'Web Scraping', 'Desktop Applications', 
                  'JavaScript & TypeScript', 'REST API Design', 'Database Management', 'Full Stack Development'].map((skill) => (
                  <div key={skill} className="text-sm text-slate-300 bg-slate-800/50 px-3 py-2 rounded border border-slate-700/50">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="chrome-card group">
                <div className="p-6 text-center">
                  <div className="inline-block p-4 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <skill.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-slate-200 mb-2 font-orbitron">
                    {skill.title}
                  </h4>
                  <p className="text-sm text-slate-400">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement stats */}
        <div className="mt-16">
          <div className="glass-panel p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  20+
                </div>
                <div className="text-slate-300 text-sm">Projects Completed</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  3+
                </div>
                <div className="text-slate-300 text-sm">Years Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  5+
                </div>
                <div className="text-slate-300 text-sm">Technologies</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  GitHub
                </div>
                <div className="text-slate-300 text-sm">Active Profile</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;