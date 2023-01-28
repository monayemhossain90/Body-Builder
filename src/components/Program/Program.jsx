import React from 'react';
import "./Program.css";
import righTArrow from "../../assets/rightArrow.png"

const Program = ({program}) => {
    const {image,heading,details} = program;
    return (
        <div className='category'>
           {image}
           <span className='heading'>{heading}</span>
           <span className='details'>{details}</span>
           <div className="join-now">
            <button>Join Now</button>
            <img src={righTArrow} alt="" />
           </div>
        </div>
    );
};

export default Program;