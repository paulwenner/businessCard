import React, { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import animationData from "./assets/build-animation.json";
import "./styles/content.scss";
import bannerProfile from "./assets/banner-profile.webp";
import profilePic from "./assets/me.webp";
import { motion } from "framer-motion";

function Content() {

    return ( 
    <>
    <div className="Content-align" style={{marginTop: "12rem"}}>
        <div id="mainCard" className="card">
            <div className="row">
                <div className="col text-center">
                    <img id="profilePic" src={profilePic} className="card-img-top" alt="banner-profile"/>
                </div>
            </div>  
        </div>
    </div>
    <div className="text-center move-negative-50">
        <h2 class="card-title">Paul Wenner</h2> 
        <h3 class="card-title text-white">Webdesigner und -entwickler</h3>
    </div>
    </>
  )
}

export default Content;
