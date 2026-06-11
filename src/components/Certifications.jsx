import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, Building2, Eye } from 'lucide-react';

import udemyPMThumb from '../assets/images/udemy-portfolio.jpg';
import pythonCert from '../assets/images/python-cert.jpg';
import cert2 from '../assets/2 certificate.jpg';
import cert3 from '../assets/3 certificate.jpg';
import cert4 from '../assets/4 certificate.jpg';

const Certifications = () => {
  const certifications = [
    {
      title: 'Python Complete Course For Beginners',
      issuer: 'Horizon Tech (Udemy)',
      date: 'March 2026',
      icon: <Award className="text-yellow-500" />,
      image: pythonCert,
      link: 'https://ude.my/UC-005051a9-f8e8-4b5b-9909-16c40e7d8db7'
    },
    {
      title: 'Advanced Program in Product Development and Management',
      issuer: 'MTF Institute (Udemy Academic)',
      date: 'March 2026',
      icon: <Award className="text-indigo-500" />,
      image: udemyPMThumb,
      link: 'https://ude.my/UC-abc9ef47-d535-473b-b285-249d9946e180'
    },
    {
      title: 'Oracle SQL',
      issuer: 'Great Learning',
      date: 'August 2024',
      icon: <Award className="text-blue-500" />,
      image: cert2,
      link: 'https://www.mygreatlearning.com/certificate/AWXUTXDX'
    },
    {
      title: 'Advanced SQL',
      issuer: 'Great Learning',
      date: 'August 2024',
      icon: <Award className="text-green-500" />,
      image: cert3,
      link: 'https://www.mygreatlearning.com/certificate/BGJKFPYB'
    },
    {
      title: 'SQL Projects for Beginners',
      issuer: 'Great Learning',
      date: 'August 2024',
      icon: <Award className="text-purple-500" />,
      image: cert4,
      link: 'https://www.mygreatlearning.com/certificate/EAFDBLFH'
    }
  ];

  return (
    <section id="certifications">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl mb-4">Certifications</h2>
            <p className="text-slate-400 max-w-xl">
              Validated expertise and professional recognition from leading institutions.
            </p>
          </div>
          <button className="text-blue-400 font-medium flex items-center gap-2 hover:text-blue-300 transition-colors mt-6 md:mt-0">
            View All Credentials
            <Eye size={18} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card group relative overflow-hidden aspect-[16/11] rounded-2xl"
            >
              {/* Image / Thumbnail Section */}
              {cert.image ? (
                <div className="w-full h-full relative">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-center p-6 backdrop-blur-sm"
                  >
                    <div className="mb-4 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-2xl">
                      {cert.icon}
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-2 leading-tight">
                      {cert.title}
                    </h3>

                    <div className="flex flex-col items-center gap-1 mb-6">
                      <div className="flex items-center gap-2 text-slate-300 text-sm">
                        <Building2 size={14} className="text-blue-500" />
                        {cert.issuer}
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 text-xs">
                        <Calendar size={14} />
                        {cert.date}
                      </div>
                    </div>

                    {cert.link && (
                      <button
                        className="px-8 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-sm font-bold transition-all shadow-lg shadow-blue-600/30 active:scale-95"
                        onClick={() => window.open(cert.link, '_blank')}
                      >
                        Go to Site
                      </button>
                    )}
                  </motion.div>
                </div>
              ) : (
                <div className="p-8 h-full flex flex-col justify-center text-center">
                  <div className="mb-6 w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-3xl mx-auto">
                    {cert.icon}
                  </div>
                  <h3 className="text-lg font-medium mb-4">{cert.title}</h3>
                  <div className="text-slate-400 text-sm mb-1">{cert.issuer}</div>
                  <div className="text-slate-500 text-xs">{cert.date}</div>
                  {cert.link && (
                    <button
                      className="mt-6 text-blue-400 font-semibold hover:text-blue-300"
                      onClick={() => window.open(cert.link, '_blank')}
                    >
                      View Credential →
                    </button>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;