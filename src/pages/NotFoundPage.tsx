import { NavLink } from "react-router-dom"
import { HOME } from "../routes/paths"

const NotFoundPage = () => {
  return (
    <section>
      <h2>404 - Página no encontrada</h2>
      <p>La URL que ingresaste no existe.</p>

      <NavLink to={HOME}>Volver al inicio</NavLink>
    </section>
  )
}

export default NotFoundPage
