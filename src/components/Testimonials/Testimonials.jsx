import React from 'react';
import "./Testimonials.css";
import {testimonialsData} from "../../data/testimonialsData";
import { useState } from 'react';
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from 'framer-motion';


const Testimonials = () => {
    const [selected,setSelected]=useState(0);
    const tLength = testimonialsData.length;
    const transition = {type:"spring",duration:2};
    return (
        <div className='testimonials'>
            <div className="left-t">
                <span>TESTIMONIALS</span>
                <span className='strokeText'>WHAT THEY</span>
                <span>SAY ABOUT US</span>
                <motion.div
                  key={selected}
                  initial={{opacity:0,x:-100}}
                  animate={{opacity:1,x:0}}
                  exit={{opacity:0,x:100}}
                  transition={transition}>
  <span>
                {testimonialsData[selected].review}
                </span>
                <span style={{fontSize:"0.8rem",fontWeight:"500"}}>
                    <span style={{color:"var(--orange)"}}>{testimonialsData[selected].name} </span>
                     <span style={{color:"white"}}> - {testimonialsData[selected].status}</span>
                </span>
                </motion.div>
              

            </div>
            <div className="right-t">
                <motion.div className='right-t-frame1'
                initial={{opacity:0,x:-100}}
                transition={transition}
                whileInView={{opacity:1,x:0}}
                ></motion.div>

                <motion.div className='right-t-frame2'
                 initial={{opacity:0,x:100}}
                 transition={{...transition,duration:3}}
                 whileInView={{opacity:1,x:0}}
                ></motion.div>
                <motion.img 
                key={selected}
                 initial={{opacity:0,x:100}}
                 animate={{opacity:1,x:0}}
                 exit={{opacity:0,x:-100}}
                 transition={transition}
                
                src={testimonialsData[selected].image} alt="" />
                <div className="arrows">
                    <img src={leftArrow} alt="left arrow" onClick={()=>{
                        selected===0?setSelected(tLength-1):
                        setSelected((prev)=>prev-1)
                        
                    }}/>
                    <img src={rightArrow} alt="right arrow" onClick={
                        ()=>selected===tLength-1?setSelected(0):setSelected(prev=>prev+1)
                    }/>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;