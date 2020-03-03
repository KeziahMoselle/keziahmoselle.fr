import React from 'react'

function Chip ({ link, company }) {
  const href = link || '#!'

  return (
    <a
      className="chip"
      href={href}
      target="_blank"
      rel="nofollow noopener noreferrer">
      <img src="/static/icons/link.svg" alt="External link" />
      <span className="visually-hidden">En lire plus sur { company }</span>
    </a>
  )
}

export default Chip