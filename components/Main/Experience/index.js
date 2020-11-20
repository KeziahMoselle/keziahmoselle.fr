import React from 'react'
import { useTranslation } from 'react-i18next'
import Chip from './Chip'
import Planet from '../../Planet'

const experiences = [
  {
    company: 'Studio Meta',
    title: 'Développeur Front-End',
    years: 'Octobre 2020 - Aujourd\'hui',
    url: 'https://studiometa.fr/',
    backgroundImage: 'studiometa.jpg'
  },
  {
    company: 'Freelance',
    title: 'Développeur web',
    years: 'Juin 2018 - Aujourd\'hui',
    backgroundImage: 'keziahmoselle.jpg'
  }
]

function Experience () {
  const { t } = useTranslation()

  return (
    <section id="experience" className="container medium experience relative">
      <h3>{ t('experience') }</h3>

      <div>
        { experiences.map((experience, index) => (
          <React.Fragment>
            <div
              className="block card big column mb-0" key={index}
              data-aos="fade"
              style={{
                backgroundImage: `url('/experience/${experience.backgroundImage}')`
              }}>
            </div>
            <div class="card-body">
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
          </React.Fragment>
        ))}
      </div>

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
