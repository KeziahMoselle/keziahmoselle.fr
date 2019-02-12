import React, { Component } from 'react'
import logo from '../assets/logo.svg'
import './index.css'

class Header extends Component {
  render() {
    return (
      <header>
        <img src={logo} className="header-logo" alt="Keziah's logo" />
        
        <ul className="header-menu">
          <li><a href="#">link</a></li>
        </ul>
      </header>
    )
  }
}

export default Header