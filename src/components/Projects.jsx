import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import img1 from '../assets/images/adv_project_1.jpg';
import img2 from '../assets/images/adv_project_2.jpg';
import img3 from '../assets/images/adv_project_3.jpg';
import pmsImg from '../assets/images/pms.jpg';
import outcomexImg from '../assets/images/OutComeX.jpg';

const ProjectModal = ({ selectedProject, onClose }) => {
  const scrollRef = useRef(null);
  const { scrollY } = useScroll({ container: scrollRef });

  // Parallax effect: text moves slower and fades out
  const textY = useTransform(scrollY, [0, 1000], [0, 400]);
  const textOpacity = useTransform(scrollY, [0, 500], [1, 0.1]);

  return (
    <motion.div
      ref={scrollRef}
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={{ type: "spring", damping: 30, stiffness: 200 }}
      className="fixed inset-0 z-[100] bg-[#111] overflow-y-auto overflow-x-hidden custom-scrollbar"
    >
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="max-w-4xl mx-auto px-6 py-12 relative z-0"
      >
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>

        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            {selectedProject.title}
          </h1>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-slate-400 font-medium mb-2">Year</h3>
            <p className="text-white text-lg">{selectedProject.year}</p>
          </div>

          <div>
            <h3 className="text-slate-400 font-medium mb-2">Tech & Technique</h3>
            <p className="text-white text-lg">{selectedProject.techAndTechnique}</p>
          </div>

          <div>
            <h3 className="text-slate-400 font-medium mb-2">Description</h3>
            <p className="text-white text-lg leading-relaxed">{selectedProject.description}</p>
          </div>

          <div>
            <h3 className="text-slate-400 font-medium mb-4">Key Features:</h3>
            <ul className="space-y-3">
              {selectedProject.keyFeatures.map((feature, idx) => (
                <li key={idx} className="text-white text-lg flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-[#00FF00] rounded-full shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Gallery Section */}
      <div className="relative z-10 w-full pt-20 pb-24">
        <div className="w-full max-w-5xl mx-auto px-4 md:px-6">
          <div className="flex flex-col w-full rounded-2xl overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.5)] border border-slate-800/50">
            {selectedProject.gallery.map((imgSrc, idx) => (
              <div key={idx} className="w-full">
                <img
                  src={imgSrc}
                  alt={`${selectedProject.title} screenshot ${idx + 1}`}
                  className="w-full h-auto block"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  // For floating image
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    if (containerRef.current) {
      containerRef.current.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const projects = [
    {
      id: '01',
      title: 'Habit Tracker',
      techAndTechnique: 'React Native, Expo, JavaScript (React 19), Firebase',
      techShort: ['React Native', 'Expo', 'Firebase'],
      year: '2024',
      description: 'A mobile habit tracker app that lets users create, schedule, and track daily habits with streaks and history logging, powered by Firebase for auth and real-time data sync.',
      roleTitle: 'Lead Mobile Developer',
      roleDescription: 'Owned the entire development lifecycle:',
      roleDuties: [
        'Backend: Configured Firebase Auth and Firestore for real-time sync',
        'Frontend: Built the app using React Native and Expo',
        'State Management: Implemented real-time listeners for instant updates',
        'UI/UX: Designed a clean, calendar-based interface'
      ],
      keyFeatures: [
        '🔐 Email/password login via Firebase Auth',
        '📅 Calendar-based habit scheduling',
        '⚡ Real-time Firestore sync',
        '🔥 Daily check-off with auto-incrementing streak counter',
        '📊 Dashboard with streak counts and completion status'
      ],
      technicalHighlights: [
        'Implemented real-time data synchronization across devices',
        'Optimized Firestore queries for fast loading times',
        'Created custom animations for habit completion'
      ],
      link: '#',
      thumbnail: img2,
      gallery: [img1, img2, img3],
    },
    {
      id: '02',
      title: 'Payment Monitoring System',
      techAndTechnique: 'PHP 8.2, Laravel 10, MySQL, Laravel Sanctum, Blade, React 19, Tailwind CSS 3, Vite 8, Docker, Render',
      techShort: ['Laravel 10', 'React 19', 'Tailwind CSS'],
      year: '2024',
      description: 'Internal web app for tracking payments, billing, and service renewals. Manages SOA records, domain/hosting, and monthly billing with automated reminders.',
      keyFeatures: [
        '🧾 SOA Monitoring — tracks invoices, payments, due dates, and attachments',
        '🌐 Domain & Hosting — manages registrations and expiration tracking',
        '💳 Monthly Billing — monitors recurring payments with status tracking',
        '🔄 Renewal Monitoring — tracks service and technical maintenance renewals',
        '🔔 Reminder System — automated 1st, 2nd reminder & demand letter tracking with real-time notification bells',
        '📁 CSV Import/Export — bulk data upload and download',
        '🗃️ Soft Deletes & Archives — archive and restore records',
        '🔐 Role-Based Access Control — superadmin + per-module permissions (view, add, edit)',
        '👥 User Management — create users, reset passwords',
        '📝 Audit Logging — tracks all system actions'
      ],
      link: '#',
      thumbnail: pmsImg,
      gallery: [pmsImg],
    },
    {
      id: '03',
      title: 'OutComeX',
      techAndTechnique: 'Python, PyQt6, PyTorch, Sentence Transformers (all-mpnet-base-v2)',
      techShort: ['Python', 'PyQt6', 'PyTorch'],
      year: '2024',
      description: 'AI-powered desktop application that analyzes BSIT course outlines and measures alignment with current IT industry competencies using NLP.',
      keyFeatures: [
        '📄 Upload course outlines (DOCX/PDF)',
        '📊 Industry competency dataset management (CSV)',
        '🧠 NLP-based semantic skill matching',
        '📈 Alignment score computation',
        '📉 Interactive charts and visualizations',
        '💡 Recommendations for curriculum improvement',
        '🕒 Analysis history and version tracking',
        '📑 PDF report generation',
        '🔐 User authentication and role-based access'
      ],
      link: '#',
      thumbnail: outcomexImg,
      gallery: [outcomexImg],
    }
  ];

  return (
    <>
      <section id="projects" className="section-padding relative overflow-hidden bg-transparent" ref={containerRef}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-[#a8b2d1] text-2xl font-serif">*</span>
            <h2 className="text-[#e2e8f0] text-sm tracking-widest font-semibold uppercase">Featured Project</h2>
          </div>

          <div className="flex flex-col border-t border-slate-800">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative border-b border-slate-800 py-10 cursor-pointer"
                onMouseEnter={() => setHoveredProject(project)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => setSelectedProject(project)}
              >
                <div className="flex items-start gap-4">
                  <span className="text-slate-500 font-mono mt-2 transition-colors duration-300 group-hover:text-white">
                    _{project.id}.
                  </span>
                  <div>
                    <h3 className="text-5xl md:text-7xl font-bold text-[#e2e8f0] transition-colors duration-300 group-hover:text-[#00FF00] flex items-center gap-4 font-sans tracking-tight">
                      {project.title}
                      <ExternalLink
                        className="opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                        size={40}
                        strokeWidth={2}
                      />
                    </h3>
                    <p className="text-slate-400 mt-4 text-sm font-medium tracking-wide">
                      {project.techShort.join(' \u2022 ')}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Thumbnail */}
        <AnimatePresence>
          {hoveredProject && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="absolute pointer-events-none z-50 w-[400px] h-[300px] overflow-hidden rounded-lg shadow-2xl"
              style={{
                top: mousePosition.y - 150,
                left: mousePosition.x + 40,
              }}
            >
              <img
                src={hoveredProject.thumbnail}
                alt={hoveredProject.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Full Screen Detailed View via Component */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            selectedProject={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
