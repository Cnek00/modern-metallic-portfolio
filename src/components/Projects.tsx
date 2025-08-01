import React from 'react';
import { ExternalLink, Github, Zap } from 'lucide-react';
import { projects, Project } from '../data/projects';

interface ProjectsProps {
  selectedTechnology: string;
}

const Projects: React.FC<ProjectsProps> = ({ selectedTechnology }) => {
  const filteredProjects = projects.filter(project => project.technology === selectedTechnology);

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {filteredProjects.length > 0 && (
          <>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 font-orbitron">
                <span className="bg-gradient-to-r from-slate-200 via-blue-200 to-slate-200 bg-clip-text text-transparent">
                  {selectedTechnology} Projects
                </span>
              </h3>
              <div className="h-1 w-20 mx-auto bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <div className="chrome-card group hover:scale-[1.02] transition-all duration-500">
      {/* Project image */}
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 text-xs font-semibold bg-blue-600/80 text-white rounded-full backdrop-blur-sm">
            {project.technology}
          </span>
        </div>
      </div>

      {/* Project content */}
      <div className="p-6">
        <h4 className="text-xl font-bold text-slate-200 mb-3 font-orbitron group-hover:text-blue-300 transition-colors">
          {project.title}
        </h4>
        
        <p className="text-slate-300 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.features.map((feature, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-xs bg-slate-800/50 text-slate-300 rounded border border-slate-700/50"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Last updated */}
        <div className="text-xs text-slate-400 mb-4">
          Updated: {project.lastUpdated}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          {project.demoUrl && (
            <a 
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 chrome-button py-2 px-4 text-sm font-semibold text-white hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </a>
          )}
          
          {project.githubUrl && (
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 glass-button py-2 px-4 text-sm font-semibold text-slate-200 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
            >
              <Github className="w-4 h-4 mr-2" />
              Source Code
            </a>
          )}
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 rounded-xl border border-blue-400/30 shadow-lg shadow-blue-400/20"></div>
      </div>
    </div>
  );
};

export default Projects;