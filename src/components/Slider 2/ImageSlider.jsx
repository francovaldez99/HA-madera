import React, {  useState  } from 'react'
import "./ImageSlider.css"
import {IoIosArrowForward,IoIosArrowBack} from "react-icons/io"


function ImageSlider({slides}) {
  const [CurrentIndex,SetCurrentIndex]=useState(0)

   const prevSlide = ()=>{
    SetCurrentIndex(CurrentIndex===0 ? slides.length-1 : CurrentIndex-1)
   };
   const nextSlide=()=>{
    SetCurrentIndex(CurrentIndex===slides.length-1 ? 0 : CurrentIndex+1)

   }

  return (
    <div className='slider-container'>
<div className='btn left-button' onClick={prevSlide}><IoIosArrowBack/></div>
<div className='btn rigth-button' onClick={nextSlide}><IoIosArrowForward/></div>
      { slides &&
        slides.map((image,index)=>{
          return (
          <>
            <div
              className={index === CurrentIndex ? 'slide active' : 'slide'}
                key={index}>
             { <img src={image.url} className='image' alt={`img - ${index+1}`} style={{display:`${ index ===CurrentIndex ? "block":"none"}`}}/>}
              <div className='text-box-image-slider '  style={{display:`${ index ===CurrentIndex ? "block":"none"}`}}>
                  <h3>{image.title}</h3>
                  <p>{image.text}</p>
              </div>
            </div>
          </>
          )
        })
      }
      
      {/* <div className='dots-container' >
        { slides &&
        slides.map((slide, slideIndex) => (
          <div
          className={`dot ${slideIndex===CurrentIndex?"dot-active":""}`}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div> */}

    </div>
  )
}

export default ImageSlider