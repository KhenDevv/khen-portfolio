import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online store built with Laravel and React. Features include user authentication, payment integration, and real-time inventory tracking.',
      tech: ['Laravel', 'React', 'Tailwind CSS', 'PostgreSQL'],
      github: '#',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Task Management System',
      description: 'A collaborative project management tool for teams. Includes task assignments, kanban boards, and automated email notifications.',
      tech: ['PHP', 'MySQL', 'JavaScript', 'Livewire'],
      github: '#',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1454165833767-1316b321d021?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Developer Portfolio',
      description: 'A modern, responsive portfolio website designed to showcase developer skills and projects with a premium aesthetic.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      github: '#',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="mb-16 text-center">
        <h2 className="text-4xl mb-4">Featured Projects</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
        <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
          A selection of my recent work, ranging from complex enterprise systems to elegant frontend designs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card overflow-hidden group hover:border-blue-500/30 transition-all"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <a href={project.github} className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors" title="Source Code">
                  <Github size={20} className="text-white" />
                </a>
                <a href={project.demo} className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors" title="Live Demo">
                  <ExternalLink size={20} className="text-white" />
                </a>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl mb-3 flex items-center gap-2">
                <Code className="text-blue-500" size={18} />
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="skill-badge">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
