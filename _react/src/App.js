import React from 'react';
import './App.css';
import nodeJsIcon from './nodejs-icon.png';
import css3Icon from './css3-icon.png';
import pythonIcon from './python-icon.png';
import k8sIcon from './kubernetes-icon.png';

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

function BasicSkillsCard(props) {
  const animDuration = Math.floor((1000+Math.random()*1000)/50)*50 ;
  return (
    <div
      className="BasicSkillsCard"
      data-aos="fade-in"
      data-aos-duration={String(animDuration)}
    >
      <div className="BasicSkillsImageContainer">
        <img
          src={props.icon}
          alt={props.alt}
          className="BasicSkillsImage"
        />
      </div>
      <div className="BasicSkillsHeaderContainer">
        <header>{props.header}</header>
      </div>
      <div>
        <p className="BasicSkillsDesc">
          {props.desc}
        </p>
      </div>
    </div>
  );
}

function SkillsChartRow(props) {
  return (
    <>
      <div className="SkillsChartName">{props.name}</div>
      <div className="SkillsChartBarContainer">
        <div
          className="SkillsChartBar"
          style={{width: props.width}}
        >
        </div>
      </div>
    </>
  );
}

function SkillsSection() {
  return (
    <section className="FullPageSection SkillsSection">
      <header className="SectionHeader">SKILLS</header>
      <div id="BasicSkillsRow">
        <BasicSkillsCard
          icon={nodeJsIcon}
          alt="nodejs"
          header="Server side programming"
          desc="Dynamic, data-driven websites using
                Express.js and Flask."
        />
        <BasicSkillsCard
          icon={css3Icon}
          alt="css3"
          header="Front end design"
          desc="Clean, intuitive interfaces using HTML, CSS and JS."
        />
        <BasicSkillsCard
          icon={pythonIcon}
          alt="python"
          header="Data analysis"
          desc="Processing and visualizing data with numpy, pandas
                and matplotlib."
        />
        <BasicSkillsCard
          icon={k8sIcon}
          alt="kubernetes"
          header="Microservices"
          desc="Writing and deploying portable code using Docker
                and Kubernetes."
        />
      </div>
      <div>
        <div
          className="SkillsChart"
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          <SkillsChartRow name="Python" width="90%" />
          <SkillsChartRow name="Node.js" width="80%" />
          <SkillsChartRow name="HTML/CSS" width="75%" />
          <SkillsChartRow name="SQL" width="72%" />
          <SkillsChartRow name="C/C++" width="70%" />
          <SkillsChartRow name="Java" width="70%" />
          <SkillsChartRow name="C# (.NET Core)" width="70%" />
          <SkillsChartRow name="Go" width="65%" />
          <SkillsChartRow name="React.js" width="60%" />
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="FullPageSection ContactSection">
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
      </div>
    </section>
  );
}

function App() {
  return (
    <main className="App">
      <IntroSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}

export default App;
