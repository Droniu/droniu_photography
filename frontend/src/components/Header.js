import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import './Header.css';

export function Header(props) {
    
    const large = props.large
    var logoValue;
    var heightValue;
    if (large){
        heightValue = "100%"
    } else {
        heightValue = "10%"
    }

    return (
    
    <div id="cont" style={{height: heightValue}}>
        <img src="./static/images/full_e2e2e2.svg"/>
        <PropagateLoader color ="#e2e2e2" loading={large} />
        <div style={{height: "20%"}}></div>
    </div>
    );
}

