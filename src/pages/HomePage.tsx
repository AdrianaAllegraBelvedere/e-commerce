import { Carousel } from "../components/Carousel"
import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.png'
import banner3 from '../assets/banner3.png'
import type { CarouselSlide } from "../interfaces/slide"



const HomePage = () => {

  const slides:CarouselSlide[] = [
  {
    id: 1,
    src: banner1,
    alt: "Descuentos en productos seleccionados",
    href: "/promos/verano",
  },
  {
    id: 2,
    src: banner2,
    alt: "Envio gratis",
    href: "/productos/nuevos",
  },
  {
    id: 3,
    src: banner3,
    alt: "Productos para el hogar",
    href: "/envios",
  },
];


  return (
    <>
      <Carousel slides={slides} />
    </>
  )
}

export default HomePage
