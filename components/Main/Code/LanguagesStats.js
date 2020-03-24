import React from 'react'
import { useTranslation } from 'react-i18next'
import filterRepositoriesBytes from '../../utils/filterRepositoriesBytes'

function LanguagesStats ({ userStats }) {
  const { t } = useTranslation()
  const { percentages, languagesColor } = filterRepositoriesBytes(userStats.repositories.nodes)

  return (
    <div className="block column valign">
      <h4>{ t('code.languagesStats') }</h4>

      <div className="languages-stats">
        { percentages.map(([language, percentage]) => (
          <React.Fragment key={language}>
            <h6>{ language }</h6>
            <span
              className="language-color"
              aria-label={`${language} ${Math.round(percentage)}%`}
              style={{
                width: `${percentage}%`,
                backgroundColor: languagesColor[language]
              }}
            >
              { language }
            </span>
          </React.Fragment>
        )) }
      </div>
    </div>
  )
}

export default LanguagesStats
