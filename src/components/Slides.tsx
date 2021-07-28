import { useState, useEffect, UIEvent } from 'react';
import './Slides.scss';
import { PropagateLoader } from 'react-spinners';
import {Section, PageProps} from '../lib/types'
import {Contact} from './Contact'

interface SlideProps {
    id: string,
    cover: string,
    title: string,
    subtitle?: string,
}

const Slide = (slide: SlideProps) => <>
  <div className="slide">
    <img src={slide.cover} alt={slide.title}></img>
    <span className="subtitle">
      <a href={"https://instagram.com/"+slide.subtitle}>
        {"@"+slide.subtitle}
      </a>
    </span>
    <span className="title">{slide.title}</span>
  </div></>

export const Slides = ({pageMethod, pageState}: PageProps) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [slides, setSlides] = useState<SlideProps[]>([]);

    const onScroll = (e: UIEvent) => {
      setScrolled(true);
    }

    // fetch catalogs from backend

    useEffect(() => {
        fetch("https://api.droniu.pl/catalogs")
          .then(res => res.json())
          .then(
            (result) => {
              setSlides(result);
              setIsLoaded(true);
            },

            (error) => {
              setError(error);
              setIsLoaded(true);
            }
          )
      }, [])

      if (error) {
        
        return (
            <div className="container">
                Please use different browser!
                {/*(error as any).message*/}
            </div>
        )
      } else if (!isLoaded) {
        return (
            <div className="waitContainer">
                <PropagateLoader color="white"/>
                <div className="vspace"></div>
                <span className="wait">Loading...</span>
            </div>
        )
      } else if (0) {
        return <></>// <Gallery /> element
      } else if (pageState.section === Section.Contact) {
        return <Contact pageMethod={pageMethod} pageState={pageState}/>
      } else {
        return (
            <div onScroll={onScroll} 
            className="slideContainer">
            <div className="promptArrow arrowBounce"
            style={{
              display: scrolled ? "none" : "flex"
            }}>ˬ</div>
            {
              slides.map((slide: SlideProps) => <Slide key={slide.id} {...slide}/>)
            }
            </div>
        )
      }
}
