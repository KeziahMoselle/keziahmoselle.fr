import React from 'react'

function Chip ({ link }) {
  const href = link || '#!'

  return (
    <a
      className="chip"
      href={href}
      target="_blank"
      rel="nofollow noopener noreferrer">
      <img src="/static/link.svg" alt="external link icon" />
    </a>
  )
}

export default Chip