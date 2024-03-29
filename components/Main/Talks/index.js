import React from 'react'
import Talk from './Talk'
import { useTranslation } from 'react-i18next'

const allTalks = [
  {
    slug: 'accessibility-react-vue',
    date: '2020-03-05',
    at: 'Alsacréations, Strasbourg',
    group: 'VueStrasbourg',
    groupUrl: 'https://twitter.com/VueStrasbourg',
    slides: 'https://slides.com/keziahmoselle/an-introduction-to-accessibility-in-react-and-vue#/',
    repository: 'https://github.com/VueStrasbourg/alsacreations-accessibility-react-vue',
    url: 'https://www.meetup.com/fr-FR/StrasbourgJS/events/268379010/',
    video: 'https://youtu.be/8GiLpgGmOw4'
  },
  {
    slug: 'advanced-js-patterns',
    date: '2019-12-04',
    at: 'Plage Digitale, Strasbourg',
    group: 'VueStrasbourg',
    groupUrl: 'https://twitter.com/VueStrasbourg',
    slides: 'https://slides.com/edimitchel/advancedjs-design-pattern/#/1',
    repository: 'https://github.com/VueStrasbourg/alsacreations-accessibility-react-vue',
    url: 'https://www.meetup.com/fr-FR/StrasbourgJS/events/266231677/',
    video: 'https://youtu.be/UEOV1HQIEug'
  },
  {
    slug: 'methodology-js-toolkit',
    date: '2021-11-18',
    at: 'Studio Meta, Strasbourg',
    group: 'wdstr',
    groupUrl: 'https://twitter.com/wdstr',
    slides: 'https://app.ludus.one/wdstr-2021-js-toolkit',
    repository: null,
    url: 'https://www.helloasso.com/associations/wdstr/evenements/wdstr-79-echange-methodes-de-partage-entre-designer-et-develop-studio-meta',
    video: null
  }
]

function Talks () {
  const { t, i18n } = useTranslation()

  const intl = new Intl.DateTimeFormat(i18n.language, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const talksList = allTalks.map((talk, index) => (
    <div key={index} data-aos="fade">
      <Talk
        {...talk}
        intl={intl}
      />
    </div>
  ))

  return (
    <section id="talks" className="container medium talks">
      <h3>{ t('talks.title') }</h3>

      <div className="block">
        { talksList }
      </div>
    </section>
  )
}

export default Talks
