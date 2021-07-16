import React, { useState, useEffect} from 'react';
import './Slides.scss';
import { RingLoader } from 'react-spinners';

interface Slide {
    id: string,
    cover: string,
    title: string,
    subtitle?: string,

}


export function Slides() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [slides, setSlides] = useState<Slide[]>([]);

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
                Error: {(error as any).message}
            </div>
        )
      } else if (!isLoaded) {
        return (
            <div className="container">
                <RingLoader color="white"/>
                <div className="vspace"></div>
                <span className="wait">Loading...</span>
            </div>
        )
      } else {
        return (
            //<div className="container">{JSON.stringify(slides)}</div>
            <div 
            className="slide"
            style={{
                backgroundImage: `url(${slides[0].cover})`
            }}>
        </div>
        )
      }
}