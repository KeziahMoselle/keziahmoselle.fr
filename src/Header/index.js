import React from 'react'
import logo from './logo.svg'
import githubLogo from './github.svg'
import './index.css'

function Header () {
  return (
    <header>
      <a href="https://keziahmoselle.fr/">
        <img src={logo} className="header-logo" alt="Keziah logo" />
        <p>Website under construction...</p>
      </a>
      
      <ul className="header-menu">
        <li>
          <a href="https://github.com/KeziahMoselle">
            <img src={githubLogo} alt="GitHub logo" />
          </a>
        </li>
      </ul>
    </header>
  )
}

export default Header