import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './styles/card.scss';

const Card = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible); 
  };

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

  return (
    <>
      <div 
      className="mobile-pic-container">
        <img className="mobile-pic" src="https://media.licdn.com/dms/image/D4E03AQHgMht7sh3OUw/profile-displayphoto-shrink_800_800/0/1693824928881?e=1719446400&v=beta&t=kj522d2cwddRyj2L5nlkD2ReueoEEPQh6AwFPjOoHfE" alt="Profile" />
      </div>
      <div 
      id="container" 
      className="theme--dark">
        <input id="menu" type="checkbox" />
        <div className="header">
          <div className="logo"></div>
        </div>
        <section className="left-section">
          <img className="profile-pic" src="https://media.licdn.com/dms/image/D4E03AQHgMht7sh3OUw/profile-displayphoto-shrink_800_800/0/1693824928881?e=1719446400&v=beta&t=kj522d2cwddRyj2L5nlkD2ReueoEEPQh6AwFPjOoHfE" alt="Profile" />
          <div className="profile-detail">
            <span className="profile-maps">
              <p className="ml-2">paulwenner.de</p>
            </span>
            <p className="profile-name">Paul Wenner</p>
            <span className="profile-summary">Harvard CS50 zertifizierter freinschaffender Entwickler</span>
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
              <input type="text" className="text" value="paul.wenner@t-online.de" readOnly />
              <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`${emailCopied ? 'push' : 'unpush'}`} 
              onPointerUp={() => copyTextToClipboard("paul.wenner@t-online.de")}>
                <i className={`${emailCopied ? 'fa-solid fa-clone' : 'fa fa-clone'}`}></i>
                </motion.button>
            </div>
          </div>
        </div>
    </>
  );
}

export default Card;
