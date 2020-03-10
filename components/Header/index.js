import React, { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
import { useWindowScroll } from 'react-use'
import { sections } from '../Main/index'

function Header () {
  const { i18n } = useTranslation()
  const { y } = useWindowScroll()
  const [isStickied, setIsStickied] = useState('')
  const [isMenuExpanded, setIsMenuExpanded] = useState(false)

  useEffect(() => {
    if (y > 30) {
      setIsStickied('stickied')
    } else {
      setIsStickied('')
    }
  }, [y])

  useEffect(() => {
    if (isMenuExpanded) {
      document.querySelector('body').classList.add('no-scroll')
    } else {
      document.querySelector('body').classList.remove('no-scroll')
    }
  }, [isMenuExpanded])

  function handleTranslating () {
    if (i18n.language === 'fr') {
      i18n.changeLanguage('en')
    } else {
      i18n.changeLanguage('fr')
    }
  }

  return (
    <div className={`sticky-header ${isStickied}`}>
      <header>
        <a className="left-logo" href="https://keziahmoselle.fr/">
          <img
            src="/static/icons/logo.svg"
            alt="Homepage"
          />
        </a>

        <ul className="appear-on-scroll">
          <li>
            <button onClick={handleTranslating}>
              <img
                src="/static/icons/translate.svg"
                alt={`${i18n.language === 'fr' ? 'Translate to english' : 'Traduire en français'}`}
              />
            </button>
          </li>

          <li>
            <a
              className="appear-logo"
              href="https://github.com/KeziahMoselle"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <img src="/static/logos/github.svg" alt="KeziahMoselle's GitHub profile" />
            </a>
          </li>

          <li>
            <a href="https://blog.keziahmoselle.fr/" target="_blank">
              Blog
            </a>
          </li>
        </ul>

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

          <div className="menu-body">
          
            <ul>
            
              { sections.map((section, index) => (
                <li key={index}>
                  <a href={`#${section.toLowerCase()}`}>
                    { section }
                  </a>
                </li>
              ))}
            
            </ul>

            <ul>
              <li>
                <a
                  href="https://blog.keziahmoselle.fr/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/KeziahMoselle"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <img src="/static/logos/github.svg" alt="My GitHub profile" />
                </a>
              </li>
              <li>
                <button onClick={handleTranslating}>
                  <img
                    src="/static/icons/translate.svg"
                    alt={`${i18n.language === 'fr' ? 'Translate to english' : 'Traduire en français'}`}
                  />
                </button>
              </li>
            </ul>

          </div>
        </nav>
      </header>

      <div
        onClick={() => setIsMenuExpanded(false)}
        className={`menu-overlay ${isMenuExpanded ? 'opened' : ''}`}
      >
      </div>
    </div>
  )
}

export default Header
