import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <main>
        <Home />
        <About />
        <Projects />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}

export default App;
