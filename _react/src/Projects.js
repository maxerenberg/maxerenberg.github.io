import React from 'react';
import './App.css';
import './Card.css';
import fecPic from './2016-fec-data.png';
import ocrPic from './ocr.png';
import kagglePic from './kaggle.png';
import onTheRadarPic from './onTheRadar.png';

function ProjectCard(props) {
  return (
    <div className="Card">
      <div className="CardImageContainer">
        <a href={props.href}>
          <img className="CardImage" src={props.img} alt={props.alt} />
          <p className="CardImageDesc">{props.desc}</p>
        </a>
      </div>
      <div className="CardHeaderContainer">
        <a href={props.href}>
          <header>{props.header}</header>
        </a>
      </div>
    </div>
  );
}

function ProjectsSection() {
  return (
    <section className="FullPageSection ProjectsSection">
      <header className="SectionHeader">PROJECTS</header>
      <div className="CardsContainer">
        <ProjectCard
          img={fecPic}
          alt="chloropleth map of U.S."
          header="2016 FEC Analysis"
          desc="A deep dive into campaign finance data using pandas
                and matplotlib."
          href="https://github.com/maxerenberg/2016-FEC-data"
        />
        <ProjectCard
          img={ocrPic}
          alt="OCR Reader UI"
          header="OCR Reader UI"
          desc="A interactive web UI for optical character recognition."
          href="https://github.com/maxerenberg/ocr-reader-ui"
        />
        <ProjectCard
          img={kagglePic}
          alt="Kaggle Logo"
          header="Kaggle Titanic Contest"
          desc="A simple SVM classifier for Titanic survival rates."
          href="https://github.com/maxerenberg/kaggle-titanic"
        />
        <ProjectCard
          img={onTheRadarPic}
          alt="On The Radar"
          header="On The Radar"
          desc="An Android app for discovering events closeby on campus."
          href="https://github.com/maxerenberg/hackthevalley4"
        />
      </div>
    </section>
  );
}

export default ProjectsSection;
