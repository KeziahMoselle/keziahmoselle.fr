import React from 'react'
import Head from 'next/head'
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

.rotating-reverse {
  animation: rotating-reverse 10s infinite;
}

@keyframes rotating {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes rotating-reverse {
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0deg);
  }
}

.rainbow-text .char {

  color: hsl(
    calc(360deg * var(--char-percent)
    ),
    90%,
    65%
  );

}

.rainbow-text.animated .char {
  animation: rainbow-colors 2s linear infinite;
  animation-delay: calc(-2s * var(--char-percent));
}

@keyframes rainbow-colors {
  0% { color: hsl(0turn, 90%, 65%); }
  25% { color: hsl(.25turn, 90%, 65%); }
  50% { color: hsl(.5turn, 90%, 65%); }
  75% { color: hsl(.75turn, 90%, 65%); }
  100% { color: hsl(1turn, 90%, 65%); }
}
</style>`

function Dad () {
  return (
    <div
      className="flex valign center"
      style={{
        minHeight: '100vh',
        backgroundImage: 'url(/bidoof/bidoof-wallpaper.webp)',
        backgroundSize: 'cover'
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: style }}></div>

      <img className="rotating" style={{ position: 'absolute', top: 64, left: 64 }} src="/bidoof/bidoof-left.png" alt="" />
      <img className="rotating-reverse" style={{ position: 'absolute', top: 64, right: 64 }} src="/bidoof/bidoof-right.png" alt="" />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
        <img src="/bidoof/bidoof-chad.png" style={{ height: 400, width: 'auto', objectFit: 'contain' }} alt="" />

        <div style={{
          position: 'relative'
        }}>
          <h1 className="rainbow-text animated" data-splitting style={{ fontFamily: 'Arial', lineHeight: 1.2, textAlign: 'center', fontSize: '4rem' }}>
            {'Bon anniversaire Skyo'.split('').map((char) => (
              <span className="char">{char}</span>
            ))}
            <br/>
            <small>{'notre Bidoof national <3'.split('').map((char) => (
              <span className="char">{char}</span>
            ))}</small>
          </h1>
          <div className="flex" style={{
            position: 'absolute',
            top: 0
          }}>
            <Lottie
              config={animationsOptions}
              width="100%"
              playingState="playing"
              speed={0.7}
              style={{
                width: '50%'
              }}
            />
            <Lottie
              config={animationsOptions}
              width="100%"
              playingState="playing"
              speed={0.7}
              style={{
                width: '50%'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dad
