import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { SecurityOpsShowcase } from './components/SecurityOpsShowcase';
import { Experience } from './components/Experience';
import { TechStack } from './components/TechStack';
import { Certifications } from './components/Certifications';
import { Volunteer } from './components/Volunteer';
import { Contact } from './components/Contact';
import { NeuralBackground } from './components/NeuralBackground';

export default function App() {
  return (
    <div className="dark min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <NeuralBackground />
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <SecurityOpsShowcase />
        <Experience />
        <TechStack />
        <Certifications />
        <Volunteer />
        <Contact />
      </div>
    </div>
  );
}