import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
import { useWindowScroll } from 'react-use'

function Header () {
  const { i18n } = useTranslation()
  const { y } = useWindowScroll()
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  function handleTranslating () {
    if (i18n.language === 'fr') {
      i18n.changeLanguage('en')
    } else {
      i18n.changeLanguage('fr')
    }
  }

  return (
    <div className={`sticky-header ${y > 0 ? 'stickied' : ''}`}>
      <header>
        <a href="https://keziahmoselle.fr/">
          <img
            src="/static/icons/logo.svg"
            className="left-logo"
            alt="Homepage"
          />
        </a>

        <a className="middle-logo" href="https://keziahmoselle.fr/">
          <img src="/static/icons/logo.svg" className="header-logo" alt="Homepage" />
        </a>

        <button
          onClick={() => setIsMenuExpanded(!isMenuExpanded)}
          aria-label="Menu"
          aria-expanded={isMenuExpanded}
          aria-controls="menu"
        >
          <FiMenu size={28} />
        </button>
        
        <nav id="menu" className={`menu ${isMenuExpanded ? 'show' : ''}`}>
          <div className="menu-header">
            <button
              onClick={() => setIsMenuExpanded(!isMenuExpanded)}
              aria-label="Menu"
              aria-expanded={isMenuExpanded}
              aria-controls="menu"
            >
              <FiX size={28} />
            </button>
          </div>

          <ul>
            <li>
              <a href="https://blog.keziahmoselle.fr/">
                Blog
              </a>
            </li>
            <li>
              <a href="https://github.com/KeziahMoselle" rel="nofollow noopener noreferrer">
                <img src="/static/logos/github.svg" alt="My GitHub profile" />
              </a>
            </li>
            <li>
              <a onClick={handleTranslating} href="#">
                <img
                  src="/static/icons/translate.svg"
                  alt={`${i18n.language === 'fr' ? 'Translate to english' : 'Traduire en français'}`}
                />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
