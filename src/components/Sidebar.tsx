import React from 'react';
import './Sidebar.scss';
import logo from '../logo.svg';

export function Sidebar() {
    return ( 
        <div className="sidebar">
            <div>
                <img id="logo" src={logo} alt=""></img>
            </div>
        </div>
    )
}