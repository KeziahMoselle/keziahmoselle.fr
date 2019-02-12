import React from 'react'
import { useSpring, animated } from 'react-spring'
import './index.css'

function Hero () {
  const { opacity, y } = useSpring({
    from: { opacity: 0, y: -20 },
    opacity: 1, y: 0
  })
  
  return (
    <animated.div style={{opacity}} className="container hero">
      <div className="bar"></div>
      <animated.h1 style={{
        transform: y.interpolate(y => `translateY(${y}px)`)
      }}>Keziah <br/> Moselle</animated.h1>
      <h2>Front-end developer.</h2>
      <p>
        Autodidacte de 18 ans, je suis passioné par le développement web et l'UI/UX depuis 2014.
      </p>
      <button>Get in touch</button>
    </animated.div>
  )
}

export default Hero