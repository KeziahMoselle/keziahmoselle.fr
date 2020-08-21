import React from 'react'
import { useSpring, animated } from 'react-spring'
import { useTranslation } from 'react-i18next'
import { FiFile } from 'react-icons/fi'
import Planet from '../../Planet'

function Hero () {
  const { t } = useTranslation()

  return (
    <section id="hero" className="container hero relative">
      <div className="bar"></div>

      <h1>
        Keziah <br/> Moselle
      </h1>

      <h2>{ t('title') }.</h2>

      <p>
        { t('description', {
          age: age(),
          sinceDate: new Date().getFullYear() - 2014
        })}
      </p>

      <div className="flex">
        <button className="btn translate-y" onClick={scrollToFooter}>
          { t('contactMe') }
        </button>

        <a
          href="/keziah-moselle-cv-fr.pdf"
          target="_blank"
          className="btn white bordered translate-y"
        >
          <FiFile className="left" />
          { t('CV') }
        </a>
      </div>

      <Planet
        isAnimated={true}
        hasBelt={true}
        color="black"
      />
    </section>
  )
}

function scrollToFooter () {
  document.querySelector('footer')
    .scrollIntoView({ behavior: 'smooth' })
}

function age () {
  const date = new Date()
  const currentYear = date.getFullYear()

  if (date.getMonth() >= 7) {
    return currentYear - 2000
  } else {
    return currentYear - 2001
  }
}

export default Hero
