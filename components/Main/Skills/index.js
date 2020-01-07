import React from 'react'
import { useTranslation } from 'react-i18next'
import Skill from './Skill'

function Skills() {
  const { t } = useTranslation()

  return (
    <div className="container medium skills">
      <h3>{ t('skills') }</h3>
      
      <div className="block">
        <div className="flex column center valign">
          <h4>Front-End</h4>
          <img src="/static/skills/front-end.svg" alt="Diagram of my front-end skills" />
        </div>

        <div className="flex column center valign">
          <h4>Back-End</h4>
          <img src="/static/skills/back-end.svg" alt="Diagram of my back-end skills" />
        </div>
      </div>

      <div className="block center column valign">
        <h4>{ t('tools') }</h4>
        
        <div className="tools">
          <Skill name="Git" />
          <Skill name="GitHub" />
          <Skill name="SASS" />
          <Skill name="Webpack" />
        </div>
      </div>
    </div>
  )
}


export default Skills