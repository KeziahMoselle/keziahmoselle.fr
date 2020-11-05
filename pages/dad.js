import React from 'react'
import { Lottie } from '@crello/react-lottie'
import animationData from '../components/lottie/party-popper.json'

const animationsOptions = {
  animationData,
  loop: true
}

const style = `<style>
.rotating {
  animation: rotating 10s infinite;
}

@keyframes rotating {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>`

function Dad () {
  return (
    <div
      class="flex valign center"
      style={{
        minHeight: '100vh'
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: style }}></div>

      <img
        src="/dad/center.png"
        width="100%"
        style={{
          position: 'absolute',
          width: '80%',
          top: 0
        }}
        class="rotating"
      />

      <img
        src="/dad/horizontal.png"
        width="100%"
        style={{
          position: 'absolute',
          transform: 'rotate(-15deg)'
        }}
      />

      <img
        src="/dad/diagonal.png"
        width="50%"
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0
        }}
      />

      <img
        src="/dad/diagonal.png"
        width="50%"
        style={{
          position: 'absolute',
          transform: 'scaleX(-1)',
          right: 0,
          bottom: 0
        }}
      />

      <div style={{
        position: 'relative'
      }}>
        <h1 style={{ fontFamily: 'monospace', textAlign: 'center', fontSize: '6rem' }}>🛦 Happy birthday Dad ! 🛦</h1>
        <div class="flex" style={{
          position: 'absolute'
        }}>
          <Lottie
            config={animationsOptions}
            width="100%"
            playingState="playing"
            speed={0.8}
            style={{
              width: '50%'
            }}
          />
          <Lottie
            config={animationsOptions}
            width="100%"
            playingState="playing"
            speed={0.8}
            style={{
              width: '50%'
            }}
          />
        </div>
      </div>

    </div>
  )
}

export default Dad
