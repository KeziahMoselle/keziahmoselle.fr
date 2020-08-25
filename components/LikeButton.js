import React, { useState, useEffect } from 'react'
import { Lottie } from '@crello/react-lottie'
import { useTranslation } from 'react-i18next'
import { FiHeart } from 'react-icons/fi'

import animationData from './lottie/party-popper.json'

const animationsOptions = {
  animationData
}

function LikeButton () {
  const { t } = useTranslation()
  const [isLiked, setIsLiked] = useState(false)

  return (
    <React.Fragment>
      <button
        className={`chip like-button ${isLiked ? 'liked' : ''}`}
        onClick={() => setIsLiked(true)}

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
    </React.Fragment>
  )
}

export default LikeButton
