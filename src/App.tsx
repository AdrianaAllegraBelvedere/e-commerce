import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <div className="container">
        <header>
          <h1>“E-commerce MVP”</h1>
        </header>
        <main>
          <Outlet/>
        </main>
      </div>
    </>
  )
}

export default App
