import React from 'react'
import Talk from './Talk'

const allTalks = [
  {
    title: 'Advanced JS and design patterns',
    slug: 'edimitchel-keziah-talk',
    date: 'mercredi 4 décembre 2019',
    at: 'Plage Digitale, Strasbourg',
    summary: [
      'Observers',
      'Pipeline operator',
      'Proxies'
    ],
    slides: 'https://slides.com/edimitchel/advancedjs-design-pattern/#/1',
    repository: 'https://github.com/VueStrasbourg/alsacreations-accessibility-react-vue',
    url: 'https://www.meetup.com/fr-FR/StrasbourgJS/events/266231677/',
    video: 'https://youtu.be/UEOV1HQIEug'
  },
  {
    title: 'Comment rendre ses sites plus accessibles (React & Vue)',
    slug: 'accessibility-talk',
    date: 'jeudi 5 mars 2020',
    at: 'Alsacréations, Strasbourg',
    summary: [
      'What is accessibility ?',
      'Introduction to ARIA',
      'Create accessible components',
      'Bonus (quick tips)'
    ],
    slides: 'https://slides.com/keziahmoselle/an-introduction-to-accessibility-in-react-and-vue#/',
    repository: 'https://github.com/VueStrasbourg/alsacreations-accessibility-react-vue',
    url: 'https://www.meetup.com/fr-FR/StrasbourgJS/events/268379010/'
  }
]

function Talks () {
  const talksList = allTalks.map((talk, index) => (
    <Talk
      key={index}
      {...talk}
    />
  ))

  return (
    <section id="talks" className="container medium talks">
      <h3>Talks</h3>

      <div className="block">
        { talksList }
      </div>
    </section>
  )
}

export default Talks
