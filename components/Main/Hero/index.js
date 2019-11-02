import React from 'react'
import { useSpring, animated } from 'react-spring'
import { useTranslation } from 'react-i18next'

function Hero () {
  const { t } = useTranslation()

  const { opacity, y } = useSpring({
    from: { opacity: 0, y: 20 },
    opacity: 1, y: 0
  })

  const { x, color } = useSpring({
    from: { x: 200 },
    x: 0, color: 'black'
  })

  const { angle } = useSpring({
    from: { angle: 0 },
    angle: 50
  })

  function scrollToFooter () {
    document.querySelector('footer')
      .scrollIntoView({ behavior: 'smooth' })
  }

  function updateGradient (event) {
    const x = event.pageX - event.target.offsetLeft - event.target.offsetParent.offsetLeft
    const y = event.pageY - event.target.offsetTop - event.target.offsetParent.offsetTop
    event.target.style.setProperty('--x', x + 'px')
    event.target.style.setProperty('--y', y + 'px')
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
    <animated.div style={{opacity}} className="container hero relative">
      <div className="bar"></div>

      <animated.h1 style={{ transform: y.interpolate(y => `translateY(${y}px)`) }}>
        Keziah <br/> Moselle
      </animated.h1>

      <h2>{ t('title') }.</h2>

      <p>
        Autodidacte de { age() } ans, je suis passioné par le développement web et l'UI/UX depuis { new Date().getFullYear() - 2014 } ans.
      </p>

      <div>
        <button className="btn translate-y" onClick={scrollToFooter}>Me contacter</button>
        <div className="circle"></div>
        <animated.div style={{
          backgroundColor: color,
          transform: x.interpolate(x => `translateX(${x}px)`)
        }} className="circle animated" onMouseMove={updateGradient}></animated.div>
      </div>
      <animated.div style={{
        transform: angle.interpolate(angle => `skewX(-${angle}deg)`)
      }} className="circle overlap"></animated.div>
    </animated.div>
  )
}

export default Hero