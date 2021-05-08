import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import './Header.css';

export function Header(props) {
    
    const large = props.large
    var heightValue;
    var transValue;
    if (large){
        heightValue = "100%"
        transValue = "height 0s"
    } else {
        heightValue = "5%"
        transValue = "height 1s"
    }

    return (
    
    <div id="cont"  style={{height: heightValue, transition: transValue}}>
        <img src="./static/images/full_e2e2e2.svg"/>
        <PropagateLoader color ="#e2e2e2" loading={large} />
        <div style={{height: "20%"}}></div>
    </div>
    );
}

