import React from 'react';
import "./Footer.css";
import linkedine from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import logo from "../../assets/logo.png";

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="blur footer-blur-1"></div>
            <div className="blur footer-blur-2"></div>
            <hr />
            <div className="footer">
                <img src={github} alt="github" />
                <img src={linkedine} alt="linkedin" />
                <img src={instagram} alt="instagram" />
            </div>
            <div className="footer-logo">
                <img src={logo} alt="" />
            </div>
        </div>
    );
};

export default Footer;