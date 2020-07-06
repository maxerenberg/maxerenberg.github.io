import React from 'react';
import './App.css';
import SkillsSection from './Skills';
import ProjectsSection from './Projects';

function IntroSection() {
  return (
    <section className="FullPageSection IntroSection">
      <header id="MyNameHeader">
        Hi, I'm <span id="MyNameSpan">Max Erenberg</span>
      </header>
      <header>
        I'm a software developer
      </header>
      <div id="IntroLinksContainer">
        <a href={process.env.PUBLIC_URL + "/Max_Erenberg_Resume.pdf"}>Resume</a>
        <a href="https://github.com/maxerenberg">Projects</a>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="ContactSection">
      <header className="SectionHeader">CONTACT</header>
      <div className="ContactInfoContainer">
          <div className="ContactType">Email:</div>
          <div>merenber@uwaterloo.ca</div>
          <div className="ContactType">LinkedIn:</div>
          <div>
            <a href="https://ca.linkedin.com/in/max-erenberg">
              /in/max-erenberg
            </a>
          </div>
          <div className="ContactType">GitHub:</div>
          <div>
            <a href="https://github.com/maxerenberg">
              /maxerenberg
            </a>
          </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <main className="App">
      <IntroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}

export default App;
