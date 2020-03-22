import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

function Planet ({ color = 'black', style, hasBelt, isAnimated, className }) {
  const { angle } = useSpring({
    from: { angle: 0 },
    angle: 50
  })

  function updateGradient (event) {
    const x = event.pageX - event.target.offsetLeft - event.target.offsetParent.offsetLeft
    const y = event.pageY - event.target.offsetTop - event.target.offsetParent.offsetTop
    event.target.style.setProperty('--x', x + 'px')
    event.target.style.setProperty('--y', y + 'px')
  }

  return (
    <div className="planet">
      <div
        style={{
          backgroundColor: color,
          position: 'absolute',
          ...style
        }}
        className={`circle ${isAnimated ? 'animated' : ''} ${className || ''}`}
        onMouseMove={isAnimated ? updateGradient : undefined}
      ></div>

      { hasBelt && (
        <animated.div
          style={{
            transform: angle.interpolate(angle => `skewX(-${angle}deg)`),
            position: 'absolute',
            ...style
          }}
          className="circle overlap"
        >
        </animated.div>
      )}
    </div>
  )
}

export default Planet
