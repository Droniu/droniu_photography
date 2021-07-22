import React, { useEffect, useState } from 'react';
import './Sidebar.scss';
import logo from '../logo.svg';
import fb from '../fb_logo.svg';
import ig from '../ig_logo.svg';
import mail from '../mail_logo.svg';
import {Section, PageProps} from '../lib/types'


export const Sidebar = ({pageMethod, pageState}: PageProps) => {
    
    const [isClicked, setClicked] = useState(false)
    useEffect(() => {
        if (isClicked) {
            pageMethod({section: Section.Contact})
            setClicked(false)
        }
        console.log(pageState)
    }, [isClicked, pageMethod])


    return ( 
        <div className="sidebar">
            <div className="logoContainer">
                <a href="/">
                <img id="logo" src={logo} alt=""></img>
                </a>
            </div>
            <div className="textContainer">
                <span>Droniu Photography</span>
            </div>
            <div className="socialContainer">
                <a href="https://www.facebook.com/droniuphoto/"
                target="_blank"
                rel="noreferrer">
                    <img src={fb} 
                        alt="Facebook">
                    </img>
                </a>
                <a href="https://www.instagram.com/droniu/"
                target="_blank"
                rel="noreferrer">
                <img src={ig} 
                    alt="Instagram">

                </img>
                </a>
                <img src={mail} 
                    alt="Contact me"
                    onClick={() => setClicked(true)}>
                </img>
            </div>
        </div>
    )
}