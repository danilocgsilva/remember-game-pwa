import { useState, useEffect } from 'react'
import 'bulma/css/bulma.css'
import { doMbileMenu } from './mobile_menu.js'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    doMbileMenu()
  });

  return (
    <>
      <nav className="navbar has-shadow">
        <div className="navbar-brand">
          <a className="navbar-burger" id="burger">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>

        <div className="navbar-menu" id="nav-links">
          <div className="navbar-start">
            <a className="navbar-item" id="createTerms">Create terms</a>
            <a className="navbar-item" id="configurations">Configurations</a>
            <a className="navbar-item" id="training">Training</a>
            <a className="navbar-item" id="listing">Listing</a>
          </div>
        </div>
      </nav>

      <section className="section" id="contentArea">
        <h1>Welcome!!!</h1>
      </section>
    </>
  )
}

export default App
