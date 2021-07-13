import React, { useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import './Header.scss';
import { CSSTransition } from 'react-transition-group';


export function Header(props) {
    
    const large = props.large
    const [loadingState, setLoading] = useState(true) 
    const [chosenTab, setTab] = useState(props.chosenTab) 

    var tabs = [
        {
            // logo div - index 0
            text: "",
        },
        {
            text: "Portraits",
        },
        {
            text: "Events",
        }
    ]


    return (
    <>
    <CSSTransition 
    timeout={1000} 
    classNames="header"
    in={large}
    onEntered= {() => {
        setLoading(false)
    }}>
        <div
        className="headerStatic"
        style={{
            "": 2
        }}
        >
        {
            large ? null :
            <>
                {/* <div className="navItem"></div>
                <div className="navItem">Portraits</div>
                <div className="navItem">Events</div>
                <div className="navItem">Services</div>
                <div className="navItem">Contact</div> */}
                {
                [...tabs].map((tab, i) => {
                    return <div 
                        className={i === chosenTab
                            ? "navItem selectedNavItem"
                            : "navItem"}
                        key={i}
                        onClick={() => setTab(i)}
                        >
                            {i === 0
                            ? <img src="./static/images/full_e2e2e2.svg"/>
                            : tab.text}
                        </div>
                })
            }
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

