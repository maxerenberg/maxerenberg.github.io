import React from 'react';
import './App.css';
import githubLogo from './github-logo.png';
import linkedinLogo from './linkedin-logo.png';
import mailIcon from './mail-icon.png';

function SocialMediaLinkItem(props) {
  return (
    <li className="SocialMediaLinkItem">
      <a href={props.href}>
        <img src={props.src} />
      </a>
    </li>
  );
}

function IntroSection() {
  return (
    <section className="FullPageSection IntroSection">
      <header id="MyNameHeader">
        Hi, I'm <span id="MyNameSpan">Max Erenberg</span>
      </header>
      <header>
        I'm a software developer
      </header>
      <ul id="IntroLinksContainer">
        <SocialMediaLinkItem
          href="https://github.com/maxerenberg"
          src={githubLogo} />
        <SocialMediaLinkItem
           href="https://ca.linkedin.com/in/max-erenberg"
           src={linkedinLogo} />
        <SocialMediaLinkItem
           href="mailto:merenber@uwaterloo.ca"
           src={mailIcon} />
      </ul>
      <p style={{marginTop: '4em'}}>
        Click <a href="/Max_Erenberg_Resume.pdf">here</a> to view my resume
      </p>
    </section>
  );
}

function BlurbSection() {
  return (
    <section className="FullPageSection BlurbSection">
      <p>
        I am a 4th year undergrad student in Computer Science at the University
        of Waterloo. I am also the current System Administrator for the&nbsp;
        <a href="https://csclub.uwaterloo.ca">Computer Science Club</a>.
      </p>
      <p>
        I enjoy learning about and experimenting with GNU/Linux, tiling window
        managers, and open source software in general. I recently wrote a&nbsp;
        <a href="https://github.com/maxerenberg/xidlechain">power management tool</a>
        &nbsp;for Linux laptops using X11, Pulseaudio, DBus, and GLib.
      </p>
      <p>
        I just finished a coop
        term at <a href="https://mattermost.com/">Mattermost</a>, an open source
        team collaboration platform, where I worked as a backend web developer.
        Most of my commits are visible in the&nbsp;
        <a href="https://github.com/mattermost/mattermost-server/pulls?q=is%3Apr+author%3Amaxerenberg+">
        public GitHub repo.</a>
      </p>
      <p>
        If you wish to send me a message, I can be reached via&nbsp;
        <a href="mailto:merenber@uwaterloo.ca">email</a> or IRC (my nick on Freenode
        is merenber).
      </p>
      <p>
        Thanks for dropping by my corner of the web!
      </p>
    </section>
  )
}

function CopyrightSection() {
  return (
    <footer class="CopyrightSection">
      Copyright (c) 2021 Max Erenberg
    </footer>
  )
}

function App() {
  return (
    <main className="App">
      <IntroSection />
      <BlurbSection />
      <CopyrightSection />
    </main>
  );
}

export default App;
