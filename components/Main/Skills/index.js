import React from 'react'
import { useTranslation } from 'react-i18next'
import Skill from './Skill'

const tools = [
  'Git',
  'GitHub',
  'SASS',
  'Webpack',
  'Gulp'
]

const services = [
  'EC2',
  'Lambda',
  'Ghost',
  'Netlify',
  'Vercel',
  'PayPal',
  'Stripe'
]

const technologies = [
  'Electron',
  'Gatsby',
  'Next.js',
  'React Native',
  'jQuery',
  'TypeScript',
  'GraphQL'
]

const allTools = tools.map(tool => (
  <Skill name={tool} key={tool} />
))

const allServices = services.map(service => (
  <Skill name={service} key={service} />
))

const allTechnologies = technologies.map(tech => (
  <Skill name={tech} key={tech} />
))

function Skills () {
  const { t } = useTranslation()

  return (
    <section id="skills" className="container medium skills">
      <h3>{ t('skills') }</h3>

      <div className="block skills-main">

        <div className="flex column center valign">
          <img
            src="/skills/front-end.svg"
            alt="Front-end skills : React.js, Vue.js, JavaScript"
          />
          <h4 style={{
            '--degree': '90deg'
          }}>Front-End</h4>
        </div>

        <div className="flux"></div>

        <div className="flex column center valign">
          <img
            src="/skills/back-end.svg"
            alt="Back-end skills : Node.js, PHP, MySQL"
          />
          <h4 style={{
            '--degree': '270deg'
          }}>Back-End</h4>
        </div>
      </div>

      <div className="skills-listing" style={{
        '--degree': '90deg'
      }}>
        <h4 className="squared-title">{ t('workedWith') }</h4>

        <div className="tools">
          { allTechnologies }
        </div>
      </div>

      <div className="skills-listing" style={{
        '--degree': '180deg'
      }}>
        <h4 className="squared-title">{ t('workedWithServices') }</h4>

        <div className="tools">
          { allServices }
        </div>
      </div>

      <div className="skills-listing" style={{
        '--degree': '270deg'
      }}>
        <h4 className="squared-title">{ t('workedWithTools') }</h4>

        <div className="tools">
          { allTools }
        </div>
      </div>
    </section>
  )
}

export default Skills
