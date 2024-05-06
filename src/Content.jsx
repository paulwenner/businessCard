import React, { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import animationData from "./assets/build-animation.json";
import "./styles/content.scss";
import bannerProfile from "./assets/banner-profile.webp";
import { motion } from "framer-motion";

function Content() {

    return ( 
    <>
    <div id="Content-align">
        <div className="card">
            <img src={bannerProfile} className="card-img-top" alt="banner-profile"/>
            <div className="card-body">
                <h2 class="card-title">Hallo! Ich bin Paul.</h2>
                <p className="card-text">Ich baue diese Webseite gerade auf. </p>
            </div>
        </div>
    </div>
    <Lottie id="lottie" animationData={animationData}/>
    </>
  )
}

export default Content;
