import {  NavLink } from 'react-router-dom'
import { HOME, CART } from '../routes/paths.ts'

const HeaderComponent = () => {
  return (
      <header>
        <nav>
          <NavLink to={HOME}>
            E-commerce MVP
          </NavLink>

          <NavLink to={CART}>
            Cart
          </NavLink>
        </nav>
      </header>
  )
}

export default HeaderComponent
