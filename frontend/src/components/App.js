import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { Header} from './Header.js';
import { Content } from './Content.js';
import './App.scss';


function App() {
    const [loading, setLoading] = useState(false);
    
    // 3s timeout for loading screen
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            
        }, 2000)
    }, []);
    
    if (loading) {
        
    }

    return (
    <div id="mainContainer">
        {
            loading ?
                <Header large={true} />
            :
                <Header large={false} />

        }
        <Content />
    </div>
    );
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);