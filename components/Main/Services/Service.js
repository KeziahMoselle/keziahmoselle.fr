import React from 'react'
import { useTranslation } from 'react-i18next'

function Service ({ Icon, title, description }) {
  return (
    <div className="service">
      <Icon size={42} />
      <h4>{ title }</h4>
      <p>{ description }</p>
    </div>
  )
}

export default Service
