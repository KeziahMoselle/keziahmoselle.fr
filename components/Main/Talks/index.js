import React from 'react'
import Talk from './Talk'
import { useTranslation } from 'react-i18next'

const allTalks = [
  {
    title: 'Comment rendre ses sites plus accessibles',
    imgSlug: 'accessibility-react-vue',
    date: '2020-03-05',
    at: 'Alsacréations, Strasbourg',
    group: 'VueStrasbourg',
    groupUrl: 'https://vue.alsace/',
    slides: 'https://slides.com/keziahmoselle/an-introduction-to-accessibility-in-react-and-vue#/',
    repository: 'https://github.com/VueStrasbourg/alsacreations-accessibility-react-vue',
    url: 'https://www.meetup.com/fr-FR/StrasbourgJS/events/268379010/',
    video: 'https://youtu.be/8GiLpgGmOw4'
  },
  {
    title: 'Advanced JavaScript and design patterns',
    imgSlug: 'advanced-js-patterns',
    date: '2019-12-04',
    at: 'Plage Digitale, Strasbourg',
    group: 'VueStrasbourg',
    groupUrl: 'https://vue.alsace/',
    slides: 'https://slides.com/edimitchel/advancedjs-design-pattern/#/1',
    repository: 'https://github.com/VueStrasbourg/alsacreations-accessibility-react-vue',
    url: 'https://www.meetup.com/fr-FR/StrasbourgJS/events/266231677/',
    video: 'https://youtu.be/UEOV1HQIEug'
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
      <h3>{ t('talks') }</h3>

      <div className="block">
        { talksList }
      </div>
    </section>
  )
}

export default Talks
