import React from 'react'
import Service from './Service'
import { FiCode } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

const MY_SERVICES = [
  {
    Icon: FiCode,
    title: 'Title',
    description: 'Description'
  },
  {
    Icon: FiCode,
    title: 'Title',
    description: 'Description'
  },
  {
    Icon: FiCode,
    title: 'Title',
    description: 'Description'
  }
]

function Services () {
  const { t } = useTranslation()

  return (
    <section id="services" className="container services">
      <h3>{ t('services.title') }</h3>

      <div className="services-list">
        { MY_SERVICES.map(service => (
          <Service {...service} />
        ))}
      </div>
    </section>
  )
}

export default Services
