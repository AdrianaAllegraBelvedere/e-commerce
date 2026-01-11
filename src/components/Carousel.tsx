import { Link } from "react-router-dom"
import type { CarouselProps } from "../interfaces/slide"

import '../styles/Carousel.css'
import { useState, useEffect  } from "react"


export const Carousel = ({ slides }: CarouselProps) => {

   useEffect(() => {
      const interval = setInterval(() => {
        goNext()
      }, 3000)

      return () => clearInterval(interval)
    }, [goNext])

  const [currentIndex, setCurrentIndex] = useState(0)

  const currentSlide = slides[currentIndex]

  function goNext () {
  setCurrentIndex((prevIndex) =>
    prevIndex === slides.length - 1 ? 0 : prevIndex + 1
  )
  }

  const goPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    )
  }

 


  return (
    <div className="carousel">
      <button
        className="carouselArrow carouselArrowLeft"
        onClick={goPrev}
        aria-label="Slide anterior"
      >
        ‹
      </button>

      <Link to={currentSlide.href} className="carouselLink">
        <img
          src={currentSlide.src}
          alt={currentSlide.alt}
          className="carouselImage"
        />
      </Link>
      <div className="carouselIndicators">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={
              index === currentIndex
                ? "carouselIndicator active"
                : "carouselIndicator"
            }
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>


      <button
        className="carouselArrow carouselArrowRight"
        onClick={goNext}
        aria-label="Slide siguiente"
      >
        ›
      </button>
    </div>
  )
}
