import React from 'react';
import { motion } from 'framer-motion';
const About = () => {

  return (
    <section id="about" className="relative py-24">
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
                  
                  {/* Subtle tint that disappears on hover */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700 ease-in-out z-20 pointer-events-none"></div>

                  <img 
                    src="/pfft.jpg" 
                    alt="Profile" 
                    className="w-full object-cover transform scale-100 group-hover:scale-105 filter grayscale hover:grayscale-0 transition-all duration-700 ease-in-out relative z-10" 
                  />
                  
                  {/* Gentle bottom gradient for blending */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 z-20 pointer-events-none"></div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Technical Expertise Block (Side-by-Side Layout) */}
          <div className="pt-24 pb-12">
            
            <div className="flex flex-col gap-16 md:gap-24 w-full max-w-5xl mx-auto">
              {[
                {
                  title: 'FRONTEND',
                  skills: [
                    { name: 'HTML', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="w-6 h-6 md:w-8 md:h-8" /> },
                    { name: 'CSS', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="w-6 h-6 md:w-8 md:h-8" /> },
                    { name: 'TypeScript', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-6 h-6 md:w-8 md:h-8" /> },
                  ]
                },
                {
                  title: 'FRAMEWORK & LIBS',
                  skills: [
                    { name: 'React', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-6 h-6 md:w-8 md:h-8" /> },
                    { name: 'Next.JS', icon: <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center p-1"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="NextJS" className="w-full h-full object-contain" /></div> },
                    { name: 'Tailwind CSS', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" className="w-6 h-6 md:w-8 md:h-8" /> },
                    { name: 'Node.JS', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.JS" className="w-6 h-6 md:w-8 md:h-8" /> },
                  ]
                },
                {
                  title: 'DATABASE',
                  skills: [
                    { name: 'SupaBase', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" alt="Supabase" className="w-6 h-6 md:w-8 md:h-8" /> },
                    { name: 'Firebase', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" className="w-6 h-6 md:w-8 md:h-8" /> },
                    { name: 'PostgreSQL', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-6 h-6 md:w-8 md:h-8" /> },
                  ]
                },
                {
                  title: 'TOOLS',
                  skills: [
                    { name: 'Github', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-6 h-6 md:w-8 md:h-8 invert" /> },
                    { name: 'Git', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-6 h-6 md:w-8 md:h-8" /> },
                    { name: 'VSCode', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VSCode" className="w-6 h-6 md:w-8 md:h-8" /> },
                  ]
                }
              ].map((category, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-12 items-start">
                  {/* Left Column: Big Category Title */}
                  <motion.div 
                    className="flex justify-start md:justify-end"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <h3 className="text-4xl md:text-5xl font-syncopate font-bold text-slate-400 opacity-60 tracking-tighter uppercase drop-shadow-sm">
                      {category.title}
                    </h3>
                  </motion.div>
                  
                  {/* Right Column: Skills Grid */}
                  <div className="flex flex-wrap gap-x-8 gap-y-6 md:gap-x-12 md:gap-y-8">
                    {category.skills.map((skill, sIdx) => (
                      <motion.div
                        key={sIdx}
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.5, delay: sIdx * 0.1 }}
                        className="flex items-center gap-3 md:gap-4 group cursor-default"
                      >
                        <div className="transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                          {skill.icon}
                        </div>
                        <span className="text-lg md:text-xl font-medium text-slate-200 tracking-wide group-hover:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
