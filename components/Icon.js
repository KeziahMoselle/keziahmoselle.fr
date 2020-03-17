import React from 'react'

function Icon ({ icon, name, href, ...rest }) {
  return (
    <React.Fragment>
      { href && (
        <a
          href={href}
          aria-label={name}
          target="_blank"
          rel="nofollow noopener noreferrer"
          {...rest}
        >
          { icon }
        </a>
      ) || (
        <span
          className="icon"
          aria-label={name}
          {...rest}
        >
          { icon }
        </span>
      )}
    </React.Fragment>
  )
}

export default Icon
