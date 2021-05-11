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

function Tilt(active) {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (!ref.current) { return ;}
    

        const state = {
            rect: ref.current.getBoundingClientRect(),
            mouseX: undefined,
            mouseY: undefined

        };

        const resizeObserver = new ResizeObserver(entries => {
            state.rect = ref.current.getBoundingClientRect()
        });

        let element = ref.current;

        const handleMouseMove = e => {
            if (!element) { return; }
            state.mouseX = e.clientX;
            state.mouseY = e.clientY;
            const px = (state.mouseX - state.rect.left) / state.rect.width;
            const py = (state.mouseY - state.rect.top ) / state.rect.height;
            console.log(state.rect.top, py)
            element.style.setProperty('--px', px);
            element.style.setProperty('--py', py);
        };

        ref.current.addEventListener('mousemove', handleMouseMove);
        resizeObserver.observe(ref.current);



        return () => {
            resizeObserver.unobserve(element);
            element.removeEventListener('mousemove', handleMouse)
        }
    }, []);

    return ref;
}

function Slide({ slide, offset }) {
    
    const active = offset === 0 ? true : null;
    const ref = Tilt(active)

    return <div 
                ref={active ? ref : null}
                className="slide"
                data-active={active}
                style={{
                    '--offset': offset,
                    '--dir': offset === 0 ? 0 : (offset > 0 ? 1 : -1),
                    backgroundImage: `url('${slide.img}')`
            }}>
                {slide.title} {offset}
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