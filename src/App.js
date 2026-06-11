import React, { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import Particles from './components/Particles';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import SocialSidebar from './components/SocialSidebar';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      <CustomCursor />
      <ScrollProgress />
      <SocialSidebar />
      
      <div className={`min-h-screen text-slate-200 relative ${loading ? 'h-screen overflow-hidden' : ''}`}>
        <Particles
          particleColors={['#ffffff']}
          particleCount={800}
          particleSpread={15}
          speed={0.08}
          particleBaseSize={280}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
        />
        
        <div className="relative z-10">
          <main>
            <Home isLoading={loading} />
            <About />
            <Projects />
            <Certifications />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
