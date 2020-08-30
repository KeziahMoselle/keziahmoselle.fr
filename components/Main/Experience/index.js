import React from 'react'
import { useTranslation } from 'react-i18next'
import Chip from './Chip'
import Planet from '../../Planet'

const experiences = [
  {
    company: 'Valanka',
    title: 'Développeur Full-Stack',
    years: 'Avril 2020',
    url: 'https://valanka.fr/',
    facts: [
      'Réalisation d\'un blog avec <strong>Ghost CMS</strong>',
      'Réalisation d\'un module de <strong>newsletter</strong>'
    ]
  },
  {
    company: 'vanessamoselle photographie',
    title: 'Développeur Full-Stack',
    years: 'Octobre 2019',
    url: 'https://shop.vanessamoselle.com',
    facts: [
      'Réalisation d\'un <strong>site e-commerce</strong> à l\'aide de React.js (Next.js) et Node.js',
      'Paiement par <strong>carte bancaire ou PayPal</strong>'
    ]
  },
  {
    company: 'Piloterr (CRM/ERP)',
    title: 'Développeur Front-End',
    years: '2019',
    url: null,
    facts: [
      '<strong>Intégration de maquettes</strong> avec ElementUI et Vue.js'
    ]
  },
  {
    company: 'Groupement d\'Action Sociale de Colmar',
    title: 'Développeur Full-Stack',
    years: '2018-2020',
    url: null,
    facts: [
      'Refonte du site <strong>Joomla vers PHP 7</strong> (migrations base de données)',
      'Réalisation d\'un <strong>back-office</strong>, gestion d\'articles, d\'utilisateurs..',
      '<strong>Espace membre</strong>, visualisation d\'articles...'
    ]
  },
  {
    company: 'Olympiades de sciences de l\'ingénieur',
    title: '1er prix STI2D sur l\'académie de Strasbourg',
    years: '2017-2018',
    url: 'https://github.com/KeziahMoselle/braille-embosser',
    facts: [
      'Réalisation d\'une <strong>application mobile</strong> avec React Native',
      'Développement d\'un serveur Node.js sur <strong>Raspberry Pi</strong> (IoT)'
    ]
  }
]

function Experience () {
  const { t } = useTranslation()

  return (
    <section id="experience" className="container medium experience relative">
      <h3>{ t('experience') }</h3>

      { experiences.map((experience, index) => (
        <div className="block card column" key={index} data-aos="fade">
          <h4>{ experience.company }</h4>
          <h5>{ experience.title }</h5>
          <h6>{ experience.years }</h6>
          <ul>
            { experience.facts.map((fact, index) => (
              <li
                key={index}
                dangerouslySetInnerHTML={{ __html: fact }}
              >
              </li>
            )) }
          </ul>
          { experience.url && (
            <Chip
              link={experience.url}
              company={experience.company}
            />
          )}
        </div>
      ))}

      <Planet
        style={{
          position: 'absolute',
          top: '-15vh',
          left: '-30vw'
        }}
      />
    </section>
  )
}

export default Experience
