import React from 'react'
import Hero from './Hero'
import Skills from './Skills'
import Experience from './Experience'
import Formations from './Formations'
import Projects from './Projects'
import Achievements from './Achievements'
import Talks from './Talks'
import About from './About'
import Code from './Code'

export const sections = [
  'About',
  'Projects',
  'Skills',
  'Code',
  'Experience',
  'Achievements',
  'Talks',
  'Formations'
]

export function Main ({ projects, codeStats }) {
  return (
    <React.Fragment>
      <Hero />
      <About />
      <Projects projects={projects} />
      <Skills />
      <Code codeStats={codeStats} />
      <Experience />
      <Achievements />
      <Talks />
      <Formations />
    </React.Fragment>
  )
}
