import React from 'react'
import Hero from './Hero'
import Skills from './Skills'
import Experience from './Experience'
import Formations from './Formations'
import Projects from './Projects'
import Achievements from './Achievements'
import Talks from './Talks'

export const sections = [
  'Projects',
  'Skills',
  'Experience',
  'Achievements',
  'Talks',
  'Formations'
]

export function Main () {
  return (
    <React.Fragment>
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Achievements />
      <Talks />
      <Formations />
    </React.Fragment>
  )
}
