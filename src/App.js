import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SkillsShowcase from './components/SkillsShowcase';
import Projects from './components/Projects';
import Contact from './components/Contact';
import WorkExperience from './components/Expirence';
import ProfessionalSummary from './components/Summary';
import Awards from './components/Awards';
import Certificates from './components/Certifications';
import Education from './components/Education';


function App() {
  return (
    <div className='font-sans'>
      <Header />
      <Hero />
      <ProfessionalSummary />
      
     
      
      <section id="workexpirence">
      <WorkExperience />
      </section>


      <section id="skills">
      <SkillsShowcase />
      </section>

      <section id="projects">
      <Projects />
      </section>
     
      <Awards />


      <section id="certificates">
      <Certificates />
      </section>
     
      <Education />

      
   
      <section id="contact">
      <Contact />
      </section>
      </div>
  );
}

export default App;