import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Globe, Layout, Blocks, Zap, Wind, Flame, GitBranch, Github, Terminal, Palette, FileCode } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'HTML', icon: <FileCode size={24} />, category: 'Front End' },
    { name: 'CSS', icon: <Palette size={24} />, category: 'Front End' },
    { name: 'TypeScript', icon: <Code2 size={24} />, category: 'Front End' },
    { name: 'React', icon: <Blocks size={24} />, category: 'Framework & Libs' },
    { name: 'Next.JS', icon: <Zap size={24} />, category: 'Framework & Libs' },
    { name: 'Tailwind CSS', icon: <Wind size={24} />, category: 'Framework & Libs' },
    { name: 'Node.JS', icon: <Server size={24} />, category: 'Framework & Libs' },
    { name: 'SupaBase', icon: <Database size={24} />, category: 'Databases' },
    { name: 'Firebase', icon: <Flame size={24} />, category: 'Databases' },
    { name: 'PostgreSQL', icon: <Database size={24} />, category: 'Databases' },
    { name: 'GitHub', icon: <Github size={24} />, category: 'Tools' },
    { name: 'Git', icon: <GitBranch size={24} />, category: 'Tools' },
    { name: 'VSCode', icon: <Terminal size={24} />, category: 'Tools' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section id="about" className="bg-black relative py-24 border-t border-slate-900/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col gap-20">
          
          {/* About Me Block */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Creative decoration */}
              <div className="absolute -left-10 -top-10 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl"></div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight font-display relative z-10 flex items-center gap-4">
                About Me
                <span className="h-[2px] w-16 bg-blue-500 rounded-full inline-block"></span>
              </h2>
              
              {/* Creative Text Container */}
              <div className="relative z-10 bg-white/[0.02] backdrop-blur-md p-8 rounded-2xl border border-white/5 border-l-4 border-l-blue-500 shadow-2xl">
                <span className="absolute -top-6 -left-2 text-6xl text-blue-500/20 font-serif font-black">"</span>
                <p className="text-slate-300 leading-relaxed text-lg font-light relative z-10">
                  Aspiring Front-End Developer passionate about creating clean and user-friendly web experiences. 
                  I love exploring new technologies, learning new skills, and turning ideas into interactive designs. 
                  Reliable, adaptable, and always eager to grow and contribute to meaningful projects.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center md:justify-end"
            >
              <div className="relative w-full max-w-sm group">
                {/* Creative Backdrop Glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur-xl opacity-10 group-hover:opacity-40 transition duration-700"></div>
                
                {/* Abstract Offset Border */}
                <div className="absolute inset-0 border-2 border-slate-800 rounded-2xl transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                
                {/* Main Image Container */}
                <div className="relative rounded-2xl overflow-hidden z-10 border border-white/10 shadow-2xl bg-black">
                  
                  {/* Black Overlay that reveals the picture on hover */}
                  <div className="absolute inset-0 bg-black/80 group-hover:bg-black/0 transition-colors duration-700 ease-in-out z-20 pointer-events-none"></div>

                  <img 
                    src="/pfft.jpg" 
                    alt="Profile" 
                    className="w-full object-cover transform scale-100 group-hover:scale-105 filter grayscale contrast-125 hover:grayscale-0 hover:contrast-100 transition-all duration-700 ease-in-out relative z-10" 
                  />
                  
                  {/* Overlay subtle gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 z-20 pointer-events-none"></div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Technical Expertise Block (Separated and Below) */}
          <div className="border-t border-slate-900/60 pt-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-12 text-white tracking-tight font-display">
              Technical Expertise
            </h3>
            
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="bg-slate-900/40 backdrop-blur-md border border-slate-800/80 hover:border-blue-500/30 hover:bg-slate-900/70 p-8 rounded-2xl flex flex-col items-center justify-center text-center group transition-all duration-300 cursor-default shadow-lg hover:shadow-blue-500/5 min-h-[160px]"
                >
                  <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white tracking-tight">{skill.name}</h4>
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-2">
                    {skill.category.toUpperCase()}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
