import React, { useState, useEffect } from 'react'
import { Lottie } from '@crello/react-lottie'
import { useTranslation } from 'react-i18next'
import { FiHeart } from 'react-icons/fi'

import animationData from './lottie/party-popper.json'

const ENDPOINT = '/.netlify/functions/appreciations'

const animationsOptions = {
  animationData
}

function LikeButton () {
  const [isLiked, setIsLiked] = useState(false)
  const [appreciations, setAppreciations] = useState(0)

  useEffect(() => {
    getAppreciations()
  }, [])

  async function getAppreciations () {
    const response = await fetch(ENDPOINT)

    if (response.ok) {
      const data = await response.json()
      setAppreciations(data.Item.total)
    }
  }

  function incrementAppreciations () {
    fetch(ENDPOINT, {
      method: 'POST'
    })
  }

  function handleLike () {
    setIsLiked(true)
    setAppreciations(appreciations + 1)
    incrementAppreciations()
  }

  return (
    <React.Fragment>
      <button
        className={`chip like-button ${isLiked ? 'liked' : ''}`}
        onClick={handleLike}

      >
        <FiHeart size={24} fill={isLiked ? 'var(--accent)' : ''} />
        <div id="poppers-animation">
          <Lottie
            config={animationsOptions}
            height={168}
            width={168}
            playingState={isLiked ? 'playing' : 'stopped'}
            speed={0.8}
            lottieEventListeners={[
              {
                name: 'complete',
                callback: () => setIsLiked(false)
              }
            ]}
          />
        </div>
      </button>

      <span>{ appreciations }</span>
    </React.Fragment>
  )
}

export default LikeButton
