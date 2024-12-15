import React from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import Features from './components/Features';
import GadgetListing from './components/GadgetListing';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <HeroBanner />
        <Features />
        <GadgetListing />
        <ContactForm />
      </div>
    </div>
  );
}

export default App;