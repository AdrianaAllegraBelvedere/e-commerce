import { Outlet } from 'react-router-dom'
import './App.css'
import HeaderComponent from './components/HeaderComponent'

function App() {

  return (
    <>
      <div className="container">
        <HeaderComponent/>
        <main>
          <Outlet/>
        </main>
      </div>
    </>
  )
}

export default App
