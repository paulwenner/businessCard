import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import Lottie from 'lottie-react';
import LinkedInAnimation from "./assets/LinkedInAnimation.json";
import "./styles/content.scss";
import profilePic from "./assets/me.webp";
import FormsparkForm from "./components/form";
import ShowMoreText from "react-show-more-text";
import { scroller } from "react-scroll";
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
    "Ich setze mich seit zweieinhalb Jahren intensiv mit Software Development auseinander.",
    "In meinen vier belegten CS50 Kursen der Harvard University konnte ich tiefgehende Kenntnisse in verschiedenen Programmiersprachen wie C, Python und SQL erwerben, mich mit Datenstrukturen und Algorithmen auseinandersetzen, wesentliche Prinzipien der Cybersicherheit verstehen und praktische Erfahrungen in der Webentwicklung sammeln.",
    "Zudem habe ich gelernt, komplexe Probleme zu lösen, effizienten Code zu schreiben und moderne Webtechnologien wie Flask, Django und React zu nutzen.",
    "Diese Kurse haben mir eine solide Grundlage und wertvolle praktische Fähigkeiten für meine zukünftige Karriere im Software Development gegeben.",
    "Bei Crateflow arbeite ich als Trainee im Bereich Full-Stack-Entwicklung und habe die Gelegenheit genutzt, meine Fähigkeiten in verschiedenen technischen Bereichen signifikant zu erweitern.",
    "Besonders intensiv beschäftigte ich mich mit Docker und Nginx, um robuste und skalierbare Lösungen zu entwickeln.",
    "Im Backend-Bereich programmiere ich APIs mit Django und dem Django REST Framework.",
    "Parallel dazu entwickle ich im Frontend benutzerfreundliche Interfaces mit React und TypeScript.",
    "Diese Services verknüpfe ich effizient mittels Docker Compose, um eine nahtlose Integration und Automatisierung zu gewährleisten.",
  ].map((line, index) => (
    <div key={index} dangerouslySetInnerHTML={{ __html: line }} />
  ));

  const handleClick = () => {
    scroller.scrollTo("Qualifikationen", {
      duration: 0,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  };
  return (
    <ShowMoreText
      lines={6}
      more="Mehr anzeigen"
      less="Weniger anzeigen"
      anchorClass="show-more-text"
      expanded={false}
      onClick={handleClick}
    >
      {lines}
    </ShowMoreText>
  );
};

function Content() {
  function openLink(url) {
            window.open(url, '_blank');
        }


  return (
    <>
      <div className="Content-align" style={{ marginTop: "12rem"}}>
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
        <div className="d-flex justify-content-center">
          <div style={{ width: "100%", maxWidth: "900px"}}>
            <h3 id="Kontakt" className="card-title text-center mb-4">Kontaktieren Sie mich!</h3>
            <div>
              <div>
                <FormsparkForm />
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </>
  );
}

export default Content;