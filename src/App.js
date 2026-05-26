import React, { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      <div className={`min-h-screen bg-black text-slate-200 ${loading ? 'h-screen overflow-hidden' : ''}`}>
        <main>
          <Home isLoading={loading} />
          <About />
          <Projects />
          <Certifications />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
