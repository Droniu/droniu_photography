import React, { useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import './Header.css';
import { CSSTransition } from 'react-transition-group';


export function Header(props) {
    
    const large = props.large
    const [loadingState, setLoading] = useState(true) 

    return (
    <>
    <CSSTransition 
    timeout={1000} 
    classNames="header"
    in={large}
    onEntered= {() => {
        setLoading(false)
    }}>
        <div>
        {
            large ?
            <>
                <div className="navItem"> 
                <img src="./static/images/full_e2e2e2.svg"/>
                </div>
                
            </>
            :
            <>
                <div className="navItem">Events</div>
                <div className="navItem">Portraits</div>
                <div className="navItem">                
                <img src="./static/images/full_e2e2e2.svg"/></div>
                <div className="navItem">Services</div>
                <div className="navItem">Contact</div>
            </>

        }
        </div>

    </CSSTransition>
    <CSSTransition
    timeout={1000} 
    classNames="loader"
    in={large}
    >
        <div>
        <PropagateLoader color = "#e2e2e2" loading = {loadingState}/>
        </div>
    </CSSTransition>




    </>
    );
}

