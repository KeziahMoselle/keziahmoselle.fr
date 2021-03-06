import React from 'react'
import Social from './Social'
import { useTranslation } from 'react-i18next'
import { FiGithub, FiTwitter, FiEdit3 } from 'react-icons/fi'
import { SiDiscord } from 'react-icons/si'
import { FaDev } from 'react-icons/fa'

const SOCIALS = [
  {
    name: 'GitHub',
    href: 'https://github.com/KeziahMoselle',
    color: '#24292E',
    Icon: FiGithub
  },
  {
    name: 'Blog',
    href: process.env.BLOG_URL,
    color: '#000000',
    Icon: FiEdit3
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/KeziahMoselle',
    color: '#1DA1F2',
    Icon: FiTwitter
  },
  {
    name: 'Keziah#6631',
    color: '#2D52A9',
    Icon: SiDiscord
  },
  {
    name: 'Dev.to',
    href: 'https://dev.to/keziahmoselle',
    color: '#000000',
    Icon: FaDev
  }
]

function Socials () {
  const { t } = useTranslation()

  return (
    <section id="socials" className="container medium socials">
      <h3>{ t('socials.title') }</h3>
      <p>{ t('socials.description') }</p>

      <div className="socials-list">
        { SOCIALS.map((social, index) => (
          <Social
            key={index}
            {...social}
          />
        ))}
      </div>

    </section>
  )
}

export default Socials
