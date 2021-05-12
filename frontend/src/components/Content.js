import React from "react";
import './Content.scss';

const slides = [
    {
        title: 'Person A',
        subtitle: 'A',
        desc: 'Nobody likes A.',
        img: './static/images/photos/1.jpg'
    },
    {
        title: 'Person J',
        subtitle: 'J',
        desc: 'Some people like J.',
        img: './static/images/photos/2.jpg'
    },
    {
        title: 'Person T',
        subtitle: 'T',
        desc: 'Everyone loves T.',
        img: './static/images/photos/3.jpg'
    },
    {
        title: 'Person K',
        subtitle: 'K',
        desc: 'Lol it is the K',
        img: './static/images/photos/4.jpg'
    },
    {
        title: 'Person L',
        subtitle: 'L',
        desc: 'Unbelievable',
        img: './static/images/photos/5.jpg'
    },
]

const initialState = {
    slideIndex: 3
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

function Tilt(active) {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (!ref.current || !active) { return ;}

        console.log(ref.current)
        //if (!active) {return ;}

        const state = {
            rect: undefined,
            mouseX: undefined,
            mouseY: undefined

        };

        let element = ref.current;

        const handleMouseMove = e => {
            if (!element) { return; }
            if (!state.rect) {
                state.rect = element.getBoundingClientRect();
            }
            state.mouseX = e.clientX;
            state.mouseY = e.clientY;
            const px = (state.mouseX - state.rect.left) / state.rect.width;
            const py = (state.mouseY - state.rect.top ) / state.rect.height;
            console.log(state.rect.top, py)
            element.style.setProperty('--px', px);
            element.style.setProperty('--py', py);
        };

        element.addEventListener('mousemove', handleMouseMove);



        return () => {
            element.removeEventListener('mousemove', handleMouseMove)
        }
    });

    return ref;
}

function Slide({ slide, offset }) {
    
    const active = offset === 0 ? true : null;
    const ref = Tilt(active)

    return <div 
                ref={ref}
                className="slide"
                data-active={active}
                style={{
                    '--offset': offset,
                    '--dir': offset === 0 ? 0 : (offset > 0 ? 1 : -1),
                    backgroundImage: `url('${slide.img}')`
            }}>
                <h2>{slide.title}</h2>
                <h3>{slide.slideIndex}</h3>
                <p>{slide.desc}</p>
            </div>
}

export function Content() {
    
    const [state, dispatch] = React.useReducer(slideReducer, initialState);

    return (
       <div className="slideSection">   
       <div className="slideGrid">
                {
                    [...slides, ...slides, ...slides].map( (slide, i) => {
                        let offset = slides.length + (state.slideIndex - i);
                        return <Slide 
                            slide={slide} 
                            offset = {offset}
                            key={i}/>
                    })
                }
                <button onClick={() => {
                    dispatch({type: 'PREV'})
                }}>Previous</button>
                <button onClick={() => {
                    dispatch({type: 'NEXT'})
                }}>Next</button>
            </div>
        </div>
        
        );
}