import React from 'react';
import './App.css';
import './Card.css';
import nodeJsIcon from './nodejs-icon.png';
import css3Icon from './css3-icon.png';
import pythonIcon from './python-icon.png';
import k8sIcon from './kubernetes-icon.png';

function BasicSkillsCard(props) {
  return (
    <div className="Card">
      <div className="CardImageContainer">
        <img
          src={props.icon}
          alt={props.alt}
          className="CardImage"
        />
      </div>
      <div className="CardHeaderContainer">
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

function SkillsChartCell(props) {
  return (
    <div className="SkillsChartCell">
      <div className="SkillsChartName">{props.name}</div>
      <div className="SkillsChartBarContainer">
        <div
          className="SkillsChartBar"
          style={{width: props.width}}
        >
        </div>
      </div>
    </div>
  );
}

function SkillsSection() {
  return (
    <section className="FullPageSection SkillsSection">
      <header className="SectionHeader">SKILLS</header>
      <div className="CardsContainer">
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
      <div className="SkillsChartContainer">
        <div className="SkillsChart">
          <SkillsChartCell name="Python" width="90%" />
          <SkillsChartCell name="Node.js" width="80%" />
          <SkillsChartCell name="HTML/CSS" width="75%" />
          <SkillsChartCell name="SQL" width="72%" />
          <SkillsChartCell name="C/C++" width="70%" />
          <SkillsChartCell name="Java" width="70%" />
          <SkillsChartCell name="C# (.NET Core)" width="70%" />
          <SkillsChartCell name="Go" width="65%" />
          <SkillsChartCell name="React.js" width="60%" />
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
