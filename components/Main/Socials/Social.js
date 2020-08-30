import React from 'react'
import CopyButton from '../../CopyButton'

function Social ({ name, href, color, Icon }) {
  return (
    <div data-aos="fade">
      { href && (
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
      ) || (
        <CopyButton
          style={{ backgroundColor: color }}
          className="social"
          value={name}
          leftIcon={<Icon size={30} stroke="white" style={{ marginRight: 16 }} />}
        />
      )}
    </div>
  )
}

export default Social
