import React from 'react'

function Social ({ name, href, color, Icon }) {
  return (
    <a
      className="social"
      style={{
        backgroundColor: color
      }}
      href={href}
      rel="nofollow noopener noreferrer"
      aria-label={name}
    >
      <Icon size={30} stroke="white" />
      { name }
    </a>
  )
}

export default Social
