import React, { useState, useEffect} from 'react';
import './Slides.scss';
import { PropagateLoader } from 'react-spinners';
import {Section, PageProps} from '../types'
import {Contact} from './Contact'

interface Slide {
    id: string,
    cover: string,
    title: string,
    subtitle?: string,
}


// export const Gallery = (uuid: string) => {
//     const []
//
// }

const Slide = (slide: Slide) => <>
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
    const [slides, setSlides] = useState<Slide[]>([]);
    const [contact, setContact] = useState(false);
    const [gallery, setGallery] = useState()


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
      } else if (pageState.section == Section.Contact) {
        return <Contact pageMethod={pageMethod} pageState={pageState}/>// <Contact /> element
      } else {
        return (
            <div className="slideContainer">
            {
              slides.map((slide: Slide) => <Slide {...slide}/>)
            }
            </div>
        )
      }
}