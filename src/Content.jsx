import React, { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import animationData from "./assets/build-animation.json";
import "./styles/content.scss";
import bannerProfile from "./assets/banner-profile.webp";
import profilePic from "./assets/me.webp";
import { motion } from "framer-motion";
import ExpandableTextCyber50 from "./qualificationTexts/cs50cyber";
import ExpandableTextP50 from "./qualificationTexts/cs50p";
import ExpandableTextW50 from "./qualificationTexts/cs50w";
import ExpandableTextX50 from "./qualificationTexts/cs50x";


function Content() {

    return ( 
    <>
    <div className="Content-align" style={{marginTop: "12rem"}}>
        <div id="mainCard" className="over-Card card">
            <div className="row">
                <div className="col text-center">
                    <img id="profilePic" src={profilePic} className="card-img-top" alt="banner-profile"/>
                </div>
            </div>  
        </div>
    </div>
    <div className="text-center move-negative-50">
        <h2 class="card-title">Paul Wenner</h2> 
        <h3 class="card-title">Webdesigner und -entwickler</h3>
    </div>
    <h3 id="Qualifikationen" class="card-title text-center mb-4">Qualifikationen</h3>
    <div className="Content-align">
        <div className="over-Card card" style={{backgroundColor: "transparent"}}>
            <div id="qualiRow" class="row">
            <div class="col-xxl-3 col-sm-12 mb-4">
                    <ExpandableTextX50/>
                </div>
                <div class="col-xxl-3 col-sm-12 mb-4">
                    <ExpandableTextP50/>
                </div>
                <div class="col-xxl-3 col-sm-12 mb-4">
                    <ExpandableTextW50/>
                </div>
                <div class="col-xxl-3 col-sm-12 mb-4">
                    <ExpandableTextCyber50/>
                </div>
            </div> 
        </div>
    </div>
    </>
  )
}

export default Content;
