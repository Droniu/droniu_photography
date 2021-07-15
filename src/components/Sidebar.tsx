import React from 'react';
import './Sidebar.scss';
import logo from '../logo.svg';
import fb from '../fb_logo.svg';
import ig from '../ig_logo.svg';
import mail from '../mail_logo.svg';

export function Sidebar() {
    return ( 
        <div className="sidebar">
            <div className="logoContainer">
                <img id="logo" src={logo} alt=""></img>
            </div>
            <div className="textContainer">
                {/* text */}
                <span>Droniu Photography</span>
            </div>
            <div className="socialContainer">
                <img src={fb} alt="fb"></img>
                <img src={ig} alt="fb"></img>
                <img src={mail} alt="fb"></img>
                {/* socials */}
            </div>
        </div>
    )
}