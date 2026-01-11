export interface CarouselSlide {
  id: number
  src: string
  alt: string
  href: string
}

export interface CarouselProps {
  slides: CarouselSlide[]
}