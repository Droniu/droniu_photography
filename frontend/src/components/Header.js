import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import './Header.css';

export function Header(props) {
    
    const large = props.large


    return (
    
    <div id="cont"  className={large ? "headerPre" : "headerAfter" }>
        {
            large ?
            <React.Fragment>
                <img src="./static/images/full_e2e2e2.svg"/>
                <PropagateLoader color ="#e2e2e2"/>
                <div style={{height: "20%"}}></div>
            </React.Fragment>
            :
            <React.Fragment>
                <div className="navItem">Events</div>
                <div className="navItem">Portraits</div>
                <div className="navItem">                
                <img src="./static/images/full_e2e2e2.svg"/></div>
                <div className="navItem">Services</div>
                <div className="navItem">Contact</div>
            </React.Fragment>

        }

    </div>
    );
}

