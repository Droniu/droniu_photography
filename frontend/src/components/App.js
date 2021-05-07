import React, { Component } from "react";
import { render } from "react-dom";


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
    return (
    <div>
        <h1>Hello World</h1>
        {slides.map(slide => {
            <div className="slide">{slide.title}</div>
        })}
        <button>Previous</button>
        <button>Next</button>
    </div>
    );
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);