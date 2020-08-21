import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FiMenu, FiX, FiArrowLeft } from 'react-icons/fi'
import { MdTranslate } from 'react-icons/md'
import { useTranslation } from 'react-i18next'
import { useWindowScroll } from 'react-use'
import { sections } from '../Main/index'

function Header ({ navLinks = sections, goBack }) {
  const { i18n, t } = useTranslation()
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
        <Link href="/">
          <a className="left-logo">
            <img
              src="/logos/keziahmoselle.svg"
              alt="Homepage"
            />
          </a>
        </Link>

        <ul className="appear-on-scroll">
          { !goBack && (
            <React.Fragment>
              <li>
                <a
                  className="appear-logo"
                  href="https://github.com/KeziahMoselle"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <img src="/logos/github.svg" alt="KeziahMoselle's GitHub profile" />
                </a>
              </li>

              <li>
                <a href="https://blog.keziahmoselle.fr/" target="_blank">
              Blog
                </a>
              </li>
            </React.Fragment>
          )}

          { goBack && (
            <React.Fragment>
              <li>
                <Link href="/" scroll={false}>
                  <a>
                    <FiArrowLeft size={28} />
                  </a>
                </Link>
              </li>
            </React.Fragment>
          )}
        </ul>

        <Link href="/">
          <a className="middle-logo">
            <img src="/logos/keziahmoselle.svg" className="header-logo" alt="Homepage" />
          </a>
        </Link>

        { !goBack && (
          <ul className="right-list">
            <li>
              <button onClick={handleTranslating} className="flex valign chip-inline bordered">
                <MdTranslate />
                { i18n.language === 'fr'
                  ? 'Français'
                  : 'English'
                }
              </button>
            </li>
            <li>
              <button
                onClick={() => setIsMenuExpanded(!isMenuExpanded)}
                aria-label="Menu"
                aria-expanded={isMenuExpanded}
                aria-controls="menu"
              >
                <FiMenu size={28} />
              </button>
            </li>
          </ul>
        )}

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

              { navLinks.map((section, index) => (
                <li key={index}>
                  <Link href={`#${section.toLowerCase()}`}>
                    <a>
                      { section }
                    </a>
                  </Link>
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
                  <img src="/logos/github.svg" alt="My GitHub profile" />
                </a>
              </li>
              <li>
                <button onClick={handleTranslating}>
                  <MdTranslate size={32} />
                  { i18n.language === 'fr'
                    ? t('translateTo.english')
                    : t('translateTo.french')
                  }
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
