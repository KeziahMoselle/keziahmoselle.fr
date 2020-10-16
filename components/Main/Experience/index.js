import React from 'react'
import { useTranslation } from 'react-i18next'
import Chip from './Chip'
import Planet from '../../Planet'

const experiences = [
  {
    company: 'Studio Meta',
    title: 'Développeur Front-End',
    years: 'Octobre 2020 - Aujourd\'hui',
    url: 'https://studiometa.fr/'
  },
  {
    company: 'Freelance',
    title: 'Développeur web',
    years: 'Juin 2018 - Aujourd\'hui'
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
          { experience.facts && (<ul>
              { experience.facts.map((fact, index) => (
                <li
                  key={index}
                  dangerouslySetInnerHTML={{ __html: fact }}
                >
                </li>
              )) }
            </ul>)
          }
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
