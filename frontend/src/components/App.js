import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { Header} from './Header.js';
import { Content } from './Content.js';
import './App.css';

const slides = [
    {
        title: "a",
        subtitle: "b",
        desc: "c",
        img: "https://wallpaperaccess.com/full/3850947.jpg",
    },
    {
        title: "d",
        subtitle: "e",
        desc: "f",
        img: "https://s2.best-wallpaper.net/wallpaper/1920x1200/1811/Blonde-girl-back-view-black-skirt-dusk-summer_1920x1200.jpg",
    },
];

const initialSlide = {
    slideIndex: 0
}

const slideReducer = (state, event) => {
    if (event.type === 'NEXT') {
        return {
            ...state,
            slideIndex: state.slideIndex + 1 % slides.length
        }
    }
}

function App() {
    const [loading, setLoading] = useState(false);
    
    // 3s timeout for loading screen
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            
        }, 3000)
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