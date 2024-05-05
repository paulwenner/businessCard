import React, { useState } from 'react';
import Card from './Card';
import Portfolio from './Portfolio';
import './styles/global.css';
import { motion } from "framer-motion";

function App() {
  const [isFirstVisible, setIsFirstVisible] = useState(true);

  const toggleVisibility = () => {
    setIsFirstVisible(!isFirstVisible)
  }

  const disappearVariantsUp = {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: -100, transition: { duration: 0.5 } }
  };
  

  return ( 
    <div>
      <motion.div
        animate={isFirstVisible ? "visible" : "hidden"}
        variants={disappearVariantsUp}
      >
        <Card />
      </motion.div> 

      <motion.div
        id="see-more-button"
        animate={isFirstVisible ? "more" : "less"}
        variants={{
          more: { top: 600, transition: { duration: 0.5 } },
          less: { top: 50, position: "fixed", transition: { duration: 0.5 } }
        }}
      >
        {isFirstVisible ? (
          <motion.p
            className="Seemore-toggle"
            onClick={toggleVisibility}
          ><i className="fa-solid fa-chevron-down"></i> Mehr erfahren</motion.p>
        ) : (
          <motion.p
            className="Seemore-toggle"
            onClick={toggleVisibility}
          ><i className="fa-solid fa-chevron-up"></i> Weniger erfahren</motion.p>
        )}
      </motion.div>
      
      <Portfolio/>
    )
    </div>
  );
}

export default App;