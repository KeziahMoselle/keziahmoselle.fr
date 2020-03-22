import React from 'react'
import { useSpring, animated } from 'react-spring'
import { useTranslation } from 'react-i18next'
import { FiFile } from 'react-icons/fi'
import Planet from '../../Planet'

function Hero () {
  const { t } = useTranslation()

  const { opacity, y } = useSpring({
    from: { opacity: 0, y: 20 },
    opacity: 1,
    y: 0
  })

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

  return (
    <animated.section id="hero" style={{ opacity }} className="container hero relative">
      <div className="bar"></div>

      <animated.h1 style={{ transform: y.interpolate(y => `translateY(${y}px)`) }}>
        Keziah <br/> Moselle
      </animated.h1>

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
    </animated.section>
  )
}

export default Hero
