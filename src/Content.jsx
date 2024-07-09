import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import Lottie from 'lottie-react';
import LinkedInAnimation from "./assets/LinkedInAnimation.json";
import "./styles/content.scss";
import profilePic from "./assets/me.webp";
import FormsparkForm from "./components/form";
import ExpandableTextCyber50 from "./qualificationTexts/cs50cyber";
import ExpandableTextP50 from "./qualificationTexts/cs50p";
import ExpandableTextW50 from "./qualificationTexts/cs50w";
import ExpandableTextX50 from "./qualificationTexts/cs50x";

const FadeInSection = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div

      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

const WhyMe_Text = () => {
  const lines = [
    "Ich setze mich seit <b>zweieinhalb Jahren</b> intensiv mit <b>Software Development</b> auseinander.",
    "In meinen <b>vier belegten CS50 Kursen</b> der <b>Harvard University</b> konnte ich tiefgehende Kenntnisse in verschiedenen <b>Programmiersprachen</b> wie <b>C</b>, <b>Python</b> und <b>SQL</b> erwerben, mich mit <b>Datenstrukturen</b> und <b>Algorithmen</b> auseinandersetzen, wesentliche Prinzipien der <b>Cybersicherheit</b> verstehen und praktische Erfahrungen in der <b>Webentwicklung</b> sammeln.",
    "Zudem habe ich gelernt, komplexe Probleme zu lösen, effizienten Code zu schreiben und moderne <b>Webtechnologien</b> wie <b>Flask</b>, <b>Django</b> und <b>React</b> zu nutzen.",
    "Diese Kurse haben mir eine solide Grundlage und wertvolle praktische Fähigkeiten für meine zukünftige Karriere im <b>Software Development</b> gegeben.",
    "Bei <b>Crateflow</b> arbeite ich als <b>Trainee</b> im Bereich <b>Full-Stack-Entwicklung</b> und habe die Gelegenheit genutzt, meine Fähigkeiten in verschiedenen technischen Bereichen signifikant zu erweitern.",
    "Besonders intensiv beschäftigte ich mich mit <b>Docker</b> und <b>Nginx</b>, um robuste und skalierbare Lösungen zu entwickeln.",
    "Im <b>Backend-Bereich</b> programmiere ich <b>APIs</b> mit <b>Django</b> und dem <b>Django REST Framework</b>.",
    "Parallel dazu entwickle ich im <b>Frontend</b> benutzerfreundliche Interfaces mit <b>React</b> und <b>TypeScript</b>.",
    "Diese Services verknüpfe ich effizient mittels <b>Docker Compose</b>, um eine nahtlose Integration und Automatisierung zu gewährleisten.",
  ];

  return (
    <>
      {lines.map((line, index) => (
        <FadeInSection key={index}>
          <div dangerouslySetInnerHTML={{ __html: line }} />
        </FadeInSection>
      ))}
    </>
  );
};

function Content() {
  function openLink(url) {
            window.open(url, '_blank');
        }


  return (
    <>
      <div className="Content-align" style={{ marginTop: "12rem", width: "100vw"}}>
        <div id="mainCard" className="over-Card card">
          <div className="row" style={{margin: "0px"}}>
            <div className="col text-center">
              <img id="profilePic" src={profilePic} className="card-img-top" alt="banner-profile" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center move-negative-50">
        <h2 className="card-title">Paul Wenner</h2>
        <h3 className="card-title">Webdesigner und -entwickler</h3>
      </div> 


      <FadeInSection>
        <div className="content-section mb-5">
          <h3 id="Qualifikationen" className="card-title text-center mb-4">Warum ich?</h3>
          <div className="Content-align">
            <div className="over-Card card" style={{ backgroundColor: "transparent" }}>
              <div className="row">
                <div className="card-text" style={{ fontSize: "1.5rem", padding: "20px"}}>
                  <WhyMe_Text />
                </div>
              </div>
              <div className="row" style={{ maxHeight: "40vh" }}>
                <motion.div 
                whileHover={{scale: 1.1}}
                onClick={() => openLink('https://www.linkedin.com/in/paul-wenner-94780128b/')} 
                style={{ cursor: 'pointer', maxHeight: "40vh" }}>
                  <Lottie
                    animationData={LinkedInAnimation}
                    loop={false}             
                    style={{ height: "30vh" }}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="content-section">
          <h3 id="Qualifikationen" className="card-title text-center mb-4">Qualifikationen</h3>
          <div className="Content-align">
            <div className="over-Card card" style={{ backgroundColor: "transparent" }}>
              <div id="qualiRow" className="row">
                <div className="col-xxl-3 col-sm-12 mb-4" style={{padding: "5px"}}>
                  <ExpandableTextX50 />
                </div>
                <div className="col-xxl-3 col-sm-12 mb-4" style={{padding: "5px"}}>
                  <ExpandableTextP50 />
                </div>
                <div className="col-xxl-3 col-sm-12 mb-4" style={{padding: "5px"}}>
                  <ExpandableTextW50 />
                </div>
                <div className="col-xxl-3 col-sm-12 mb-4" style={{padding: "5px"}}>
                  <ExpandableTextCyber50 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="content-section">
          <h3 id="Kontakt" className="card-title text-center mb-4">Kontaktieren Sie mich!</h3>
          <div className="Content-align">
            <div className="over-Card card" style={{ backgroundColor: "transparent" }}>
              <FormsparkForm />
            </div>
          </div>
        </div>
      </FadeInSection>
    </>
  );
}

export default Content;