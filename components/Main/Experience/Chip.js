import React from 'react'
import { FiLink } from 'react-icons/fi'

function Chip ({ link, company }) {
  const href = link || '#!'

  return (
    <a
      className="chip"
      href={href}
      target="_blank"
      rel="nofollow noopener noreferrer">
      <FiLink size={24} />
      <span className="visually-hidden">Voir le site de { company }</span>
    </a>
  )
}

export default Chip
