import React from 'react'
import { useTranslation } from 'react-i18next'
import Planet from '../../Planet'

function About () {
  const { t } = useTranslation()

  return (
    <section id="about" className="container about">
      <article className="relative">
        <Planet
          color="var(--secondary-dark)"
          className="flowing"
          style={{
            left: -60,
            top: '50%',
            transform: 'translateY(-50%)'
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
