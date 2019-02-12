import React, { Component } from 'react'
import logo from './logo.svg'
import githubLogo from './github.svg'
import './index.css'

class Header extends Component {
  render() {
    return (
      <>
        <div className="bar"></div>
        <header>
          <img src={logo} className="header-logo" alt="Keziah logo" />
          
          <ul className="header-menu">
            <li>
              <a href="https://github.com/KeziahMoselle">
                <img src={githubLogo} alt="GitHub logo" />
              </a>
            </li>
          </ul>
        </header>
      </>
    )
  }
}

export default Header