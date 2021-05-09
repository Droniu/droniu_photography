import React from "react";
import './Content.css';

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

export function Content() {
    return (
        <div id="videoDiv">
            <img src="./static/images/photos/1.jpg" />
        </div>
        
        );
}