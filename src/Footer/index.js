import React, { Component } from 'react'
import './index.css'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <h2>Contact</h2>
          
          <div className="footer-container">
            <h4>Details</h4>
            <ul>
              <li>Strasbourg, Alsace, France</li>
              <li>keziah.moselle@gmail.com</li>
            </ul>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer