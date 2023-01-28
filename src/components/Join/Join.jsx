import React from 'react';
import "./Join.css";

const Join = () => {
    return (
        <div className='join' id='join-us'>
            <div className="left-j">
                <div>
                    <span className='strokeText'>READY TO </span>
                    <span> LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY </span>
                    <span className='strokeText'> WITH US?</span>
                </div>
            </div>
            <div className="right-j">
                <div>
                <input type="email" placeholder='Write your email here' />
                <button>Join Now</button>
                </div>
            </div>
            
        </div>
    );
};

export default Join;