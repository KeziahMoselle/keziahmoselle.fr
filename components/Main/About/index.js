import React from 'react'
import { useTranslation } from 'react-i18next'
import Planet from '../../Planet'

function About () {
  const { t } = useTranslation()

  return (
    <section id="about" className="container about">
      <h3>{ t('about.title') }</h3>

      <div className="block">
        <p>
          { t('about.description') }
        </p>
      </div>
    </section>
  )
}

export default About
