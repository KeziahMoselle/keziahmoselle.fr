import React from 'react'

function Icon ({ icon, name, href }) {
  return (
    <React.Fragment>
      { href && (
        <a
          className="talk-link"
          href={href}
          aria-label={name}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          { icon }
        </a>
      ) || (
        <span
          className="talk-link"
          aria-label={name}
        >
          { icon }
        </span>
      )}
    </React.Fragment>
  )
}

export default Icon
