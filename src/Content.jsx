import React from "react";
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "./assets/build-animation.json";
import "./styles/content.scss";
import bannerProfile from "./assets/banner-profile.webp";
import profilePic from "./assets/me.webp";
import FormsparkForm from "./components/form";
import ExpandableTextCyber50 from "./qualificationTexts/cs50cyber";
import ExpandableTextP50 from "./qualificationTexts/cs50p";
import ExpandableTextW50 from "./qualificationTexts/cs50w";
import ExpandableTextX50 from "./qualificationTexts/cs50x";

const FadeInSection = ({ children }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
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

function Content() {
    return (
        <>
            <div className="Content-align" style={{ marginTop: "12rem" }}>
                <div id="mainCard" className="over-Card card">
                    <div className="row">
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
                <div className="content-section">
                    <h3 id="Qualifikationen" className="card-title text-center mb-4">Qualifikationen</h3>
                    <div className="Content-align">
                        <div className="over-Card card" style={{ backgroundColor: "transparent" }}>
                            <div id="qualiRow" className="row">
                                <div className="col-xxl-3 col-sm-12 mb-4">
                                    <ExpandableTextX50 />
                                </div>
                                <div className="col-xxl-3 col-sm-12 mb-4">
                                    <ExpandableTextP50 />
                                </div>
                                <div className="col-xxl-3 col-sm-12 mb-4">
                                    <ExpandableTextW50 />
                                </div>
                                <div className="col-xxl-3 col-sm-12 mb-4">
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