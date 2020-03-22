import React from 'react'
import { useTranslation } from 'react-i18next'
import Skill from './Skill'

const tools = [
  'TypeScript',
  'Git',
  'GitHub',
  'SASS',
  'Webpack'
]

function Skills () {
  const { t } = useTranslation()

  const allTools = tools.map(tool => (
    <Skill name={tool} />
  ))

  return (
    <section id="skills" className="container medium skills">
      <h3>{ t('skills') }</h3>

      <div className="block">
        <div className="flex column center valign">
          <h4>Front-End</h4>
          <img
            src="/skills/front-end.svg"
            alt="Front-end skills : React.js, Vue.js, JavaScript"
          />
        </div>

        <div className="flex column center valign">
          <h4>Back-End</h4>
          <img
            src="/skills/back-end.svg"
            alt="Back-end skills : Node.js, PHP, MySQL"
          />
        </div>
      </div>

      <div className="block center column valign">
        <h4>{ t('tools') }</h4>

        <div className="tools">
          { allTools }
        </div>
      </div>
    </section>
  )
}

export default Skills
