import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Technology from './components/Technology';
import BusinessModel from './components/BusinessModel';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <HowItWorks />
        <Benefits />
        {/* <Technology /> */}
        <BusinessModel />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;