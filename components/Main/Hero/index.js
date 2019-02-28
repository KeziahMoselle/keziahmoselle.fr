import React from 'react'
import { useSpring, animated } from 'react-spring'

function Hero () {
  const { opacity, y } = useSpring({
    from: { opacity: 0, y: 20 },
    opacity: 1, y: 0
  })
  const { x, color } = useSpring({
    from: { x: 200 },
    x: 0, color: 'black'
  })

  function scrollToFooter () {
    document.querySelector('footer')
      .scrollIntoView({ behavior: 'smooth' })
  }
  
  return (
    <animated.div style={{opacity}} className="container hero relative">
      <div className="bar"></div>

      <animated.h1 style={{ transform: y.interpolate(y => `translateY(${y}px)`) }}>
        Keziah <br/> Moselle
      </animated.h1>

      <h2>Développeur Front-end.</h2>

      <p>
        Autodidacte de 18 ans, je suis passioné par le développement web et l'UI/UX depuis { new Date().getFullYear() - 2014 } ans.
      </p>

      <div>
        <button className="translate-y" onClick={scrollToFooter}>Me contacter</button>
        <div className="circle"></div>
        <animated.div style={{
          backgroundColor: color,
          transform: x.interpolate(x => `translateX(${x}px)`)
        }} className="circle"></animated.div>
      </div>
    </animated.div>
  )
}

export default Hero