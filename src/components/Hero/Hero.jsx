import React from 'react';
import "./Hero.css";
import Header from "../Header/Header";
import hero from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calorie from "../../assets/calories.png";
import {motion} from "framer-motion";



const Hero = () => {
    const transition = {type:"spring",duration:2};

    return (
        <div className="hero">
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header/>
                {/*best add*/}
                <div className="the-best-add">
                    <motion.div
                    initial={{left:"238px"}}
                    whileInView={{left:"8px"}}
                    transition={{...transition,type:"tween"}}
                    ></motion.div>
                    <span> The best fitness club in the town</span>
                </div>
            {/*    hero head*/}
                <div className="hero-text">
                    <div>
                        <span className="strokeText">Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div>
                        <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                    </div>
                </div>
                {/* figures */}
                <div className="figures">
                    <div>
                        <span>+ 140</span>
                        <span>EXPERT COACHES</span>
                    </div>
                    <div>
                        <span>+ 978</span>
                        <span>MEMBERS JOINED</span>
                    </div>
                    <div>
                        <span>+ 50</span>
                        <span>FITNESS PROGRAMS</span>
                    </div>
                </div>
                {/* hero buttons */}
                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>

            </div>
            <div className="right-h">
                <button className="btn">Join Now</button>
                <motion.div className="heart-rate"
                initial={{right:"-4rem"}}
                whileInView={{right:"4rem"}}
                transition={{...transition,type:"tween"}}
                >
                    <img src={heart} alt="heart" />
                    <span>Heart Rate</span>
                    <span>116 BPM</span>
                </motion.div>
                {/* hero images */}
                <img src={hero} className="heroImg" alt="hero" />
                <img src={hero_image_back} className="heroImgBack" alt="hero back" />
                {/* calorie images */}
                <motion.div className="calories"
                 initial={{right:"30rem"}}
                 whileInView={{right:"25rem"}}
                 transition={{...transition,type:"tween"}}
                >
                <img src={calorie} alt="hero back" />
                <div>
                    <span>Calories burned</span>
                    <span>220 kcal</span>
                </div>
                </motion.div>
                
            </div>
        </div>
    );
};

export default Hero;