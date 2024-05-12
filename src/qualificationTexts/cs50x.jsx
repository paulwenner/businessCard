import React, { useState, } from "react";
import "../styles/textsCss/expandableText.scss";
import cs50X from "../assets/cs50X.webp";
import "../styles/content.scss";
import { motion } from "framer-motion";
import { cs50x_Text } from '../texts';

const ExpandableTextCyber50  = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    let timeoutId = null;

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <motion.div 
        onMouseEnter={() => {
            clearTimeout(timeoutId);
            setIsExpanded(true);
        }}
        onMouseLeave={() => {
            timeoutId = setTimeout(() => {
                setIsExpanded(false);
            }, 0);
        }} 
        className="card" style={isExpanded ? { backgroundColor: "#707370"} : { backgroundColor: ""}}>
            <div className="card-body">
                <h5 className="card-title">CS50x</h5>
                <h6 className="card-subtitle mb-2">Grundkenntnisse der Informatik</h6>
                <p className={`text ${!isExpanded ? 'collapsed' : ''} card-text`}>
                {cs50x_Text}
                <motion.img 
                whileHover={{ scale: 1.05 }}
                className="mt-3 imageQualification" src={cs50X}/>
                </p>
            </div>
        </motion.div>
    )
}

export default ExpandableTextCyber50;
