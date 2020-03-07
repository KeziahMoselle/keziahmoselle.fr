import React from 'react'
import { useTranslation } from 'react-i18next'

function Header () {
  const { i18n } = useTranslation()

  function handleTranslating () {
    if (i18n.language === 'fr') {
      i18n.changeLanguage('en')
    } else {
      i18n.changeLanguage('fr')
    }
  }

  return (
    <header>
      <a href="https://keziahmoselle.fr/">
        <img src="/static/icons/logo.svg" className="header-logo" alt="Homepage" />
      </a>
      
      <ul className="header-menu">
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
            <img src="/static/icons/translate.svg" alt={`${i18n.language === 'fr' ? 'Translate to english' : 'Traduire en français'}`} />
          </a>
        </li>
      </ul>
    </header>
  )
}

export default Header