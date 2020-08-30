import React from 'react'

function Icon ({ icon, name, href, className }) {
  const classesToApply = `tooltipped ${className || ''}`

  return (
    <React.Fragment>
      { href && (
        <a
          className={classesToApply}
          href={href}
          aria-label={name}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          { icon }
        </a>
      ) || (
        <span
          className={classesToApply}
          className="icon"
          aria-label={name}
        >
          { icon }
        </span>
      )}
    </React.Fragment>
  )
}

export default Icon
