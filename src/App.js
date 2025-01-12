import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Project from './components/Project';
import VerticalNav from './components/VerticalNav';
function App() {
  return (
    <div className="bg-white flex flex-col items-center">
      <Navbar />
      <Hero/>
      <About/>
      <Experience/>
      <Project/>
      <VerticalNav/>
    </div>
  );
}

export default App;