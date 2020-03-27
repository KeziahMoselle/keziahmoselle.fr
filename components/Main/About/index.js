import React from 'react'
import { useTranslation } from 'react-i18next'
import Planet from '../../Planet'

function About () {
  const { t } = useTranslation()

  return (
    <section id="about" className="container about">
      <article className="relative">
        <Planet
          isAnimated
          hasBelt
          beltClassName="crescent"
          color="#0d0d0d"
          style={{
            left: -105,
            top: '50%',
            transform: 'translateY(-50%)',
            '--secondary-dark': '#1b1b1b'
          }}
        />

        <h3>{ t('about.title') }</h3>

        <div
          className="block"
          dangerouslySetInnerHTML={{ __html: t('about.description') }}
        >
        </div>
      </article>
    </section>
  )
}

export default About
