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
import LatestPost from './LatestPost'
import Services from './Services'

export const sections = [
  'About',
  'Services',
  'Projects',
  'Skills',
  'Experience',
  'Achievements',
  'Talks',
  'Article',
  'Code',
  'Formations'
]

export function Main ({ projects, codeStats, latestBlogPost }) {
  return (
    <React.Fragment>
      <Hero />
      <About />
      <Services />
      <Projects projects={projects} />
      <Skills />
      <Experience />
      <Achievements />
      <Talks />
      <LatestPost latestBlogPost={latestBlogPost} />
      <Code codeStats={codeStats} />
      <Formations />
    </React.Fragment>
  )
}
