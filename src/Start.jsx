import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Content from './Content';
import './styles/card.scss';
import './styles/portfolio.scss';
import ProfilePic from "./static/img/Bewerbungsbild.webp";


const Card = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isFirstVisible, setIsFirstVisible] = useState(true);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [portfolioVisible, setPortfolioVisible] = useState(false);

  const disappearVariantsUp = {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: -100, transition: { duration: 0.5 } }
  };

  const portfolioVariants = {
    hidden: { opacity: 0, y: 30, transition: { duration: 0.5 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible); 
  };

  const toggleSectorVisibility = () => {
    if (isFirstVisible) {
      setIsFirstVisible(false);
      setTimeout(() => {
        setShowPortfolio(true);
        setTimeout(() => {
          setPortfolioVisible(true); 
        }, 10); 
      }, 500);
    } else {
      setPortfolioVisible(false); 
      setTimeout(() => {
        setShowPortfolio(false);
        setIsFirstVisible(true);
      }, 500); 
    }
  }

  const copyTextToClipboard = async (text) => {
    if (!navigator.clipboard) {
      console.log('Clipboard API not available');
      alert('Die Zwischenablage ist in diesem Browser nicht verfügbar. Bitte kopieren Sie die Adresse manuell.');
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      setEmailCopied(true);
      setTimeout(() => {
        setEmailCopied(false);
      }, 5000);
    } catch (err) {
      console.error('Fehler beim Kopieren: ', err);
      alert('Kopieren fehlgeschlagen. Bitte kopieren Sie die Adresse manuell.');
    }
  };
  
  useEffect(() => {
    document.body.style.backgroundColor = isFirstVisible ? "#121212" : "#141414";
    document.querySelector("#see-more-button").style.backgroundColor = isFirstVisible ? "transparent" : "#323232";
  }, [isFirstVisible]);

  return (
    <div id='canvas'>
          <motion.div
              animate={isFirstVisible ? "visible" : "hidden"}
              variants={disappearVariantsUp}
              id="Card"
          >
              
              <div 
              className="mobile-pic-container">
                  <img className="mobile-pic" src={ProfilePic} alt="Profile" />
              </div>
              <div 
              id="container" 
              className="theme--dark">
                  <input id="menu" type="checkbox" />
                  <div className="header">
                  <div className="logo"></div>
                  </div>
                  <section className="left-section">
                  <img className="profile-pic" src={ProfilePic} alt="Profile" />
                  <div className="profile-detail">
                      <p className="profile-maps">
                      <p className="ml-2">paulwenner.de</p>
                      </p>
                      <p className="profile-name">Paul Wenner</p>
                      <p className="profile-summary">Fullstack Software Developer bei Crateflow</p>
                  </div>
                  <div className="profile-pils">
                      <span className="pils"><a href="https://www.instagram.com/_.paulwennr/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i> Instagram</a></span>
                      <span className="pils"><a href="https://www.linkedin.com/in/paul-wenner-94780128b/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i> LinkedIn </a></span>
                      <span className="pils"><a href="https://github.com/paulwenner" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i> Github </a></span>
                      <span className="pils"><a onClick={toggleVisibility} href="#" rel="noopener noreferrer"><i className="fa-solid fa-envelope"></i> Mail</a></span>
                  </div>
                  </section>
                  <div className="front-smooth"></div>
                  </div>
                  <div id="mail-container"  className={`slide-in ${isVisible ? 'active' : ''}`}>
                  <div className="container">
                      <div className={`copy-text ${emailCopied ? 'active' : ''}`}>
                      <input type="text" className="text" value="paul@paulwenner.de" readOnly />
                      <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`${emailCopied ? 'push' : 'unpush'}`} 
                      onPointerUp={() => copyTextToClipboard("paul@paulwenner.de")}>
                          <i className={`${emailCopied ? 'fa-solid fa-clone' : 'fa fa-clone'}`}></i>
                          </motion.button>
                      </div>
                  </div>
                  </div>
              </motion.div>

              
              <motion.div
                  id="see-more-button"
                  animate={isFirstVisible ? "more" : "less"}
                  whileHover={isFirstVisible ? "" : { backgroundColor: "#464646"}}
                  style={isFirstVisible ? { backgroundColor: "transparent"} : ""}
                  variants={{
                  more: { top: 0, marginTop : "2rem", transition: { duration: 0 } },
                  less: { top: 0, position: "fixed", transition: { duration: 0 } }
                  }}
                  onClick={toggleSectorVisibility}
              >
                  <motion.p
                  className="Seemore-toggle"
                  style={{ cursor: "pointer" }}
                  >
                  {isFirstVisible ? 
                      <i className="fa-solid fa-chevron-down"></i> 
                      : 
                      <i className="fa-solid fa-chevron-up"></i>
                  }
                  {isFirstVisible ? " Mehr erfahren" : " Weniger erfahren"}
                  </motion.p>
              </motion.div>  

            {showPortfolio && (
              <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
                <motion.div
                  initial="hidden"
                  animate={portfolioVisible ? "visible" : "hidden"}
                  variants={portfolioVariants}
                  id="Portfolio"
                >
                  <Content />
                </motion.div>
              </div>
            )} 
    </div>
  );
}

export default Card;
