import React from "react";
import './Content.scss';

const slides = [
    {
        title: 'Person A',
        subtitle: 'A',
        desc: 'Nobody likes A.',
        img: './photos/1.jpg'
    },
    {
        title: 'Person J',
        subtitle: 'J',
        desc: 'Some people like J.',
        img: './photos/2.jpg'
    },
    {
        title: 'Person T',
        subtitle: 'T',
        desc: 'Everyone loves T.',
        img: './photos/3.jpg'
    }
]

const initialState = {
    slideIndex: 0
}

const slideReducer = (state, event) => {
    var len = slides.length;
    
    if (event.type === "NEXT") 
        return {
            ...state,
            slideIndex: (((state.slideIndex + 1) % len ) + len ) % len
        }
    if (event.type === "PREV") 
        return {
            ...state,
            slideIndex: state.slideIndex === 0 
                ? len - 1 
                : state.slideIndex - 1
        }
}

function Tilt() {
    
}

function Slide({ slide, offset }) {
    return <div className="slide" style={{
            '--offset': offset
            }}>{slide.title} {offset}</div>
}

export function Content() {
    
    const [state, dispatch] = React.useReducer(slideReducer, initialState);

    return (
        <div id="contentDiv">
            {
                slides.map( (slide, i) => {
                    return <Slide slide={slide} offset = {state.slideIndex - i}/>
                })
            }
            <button onClick={() => {
                dispatch({type: 'PREV'})
            }}>Previous</button>
            <button onClick={() => {
                dispatch({type: 'NEXT'})
            }}>Next</button>
        </div>
        
        );
}