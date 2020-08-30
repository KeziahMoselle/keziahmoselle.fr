import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import filterRepositoriesBytes from '../../utils/filterRepositoriesBytes'

function LanguagesStats ({ userStats }) {
  const { t } = useTranslation()
  const [label, setLabel] = useState('')

  const { percentages, languagesColor } = filterRepositoriesBytes(userStats.repositories.nodes)

  function handleOnMouseOver (event) {
    const labelToShow = event.target.getAttribute('aria-label')
    setLabel(labelToShow)
  }

  function handleOnMouseLeave () {
    setLabel('')
  }

  return (
    <div
      className="block column valign"
      onMouseLeave={handleOnMouseLeave}
    >
      <h4>{ t('code.languagesStats') }</h4>

      <div className="languages-stats">
        { percentages.map(([language, percentage]) => (
          <React.Fragment key={language}>
            <h6>{ language }</h6>
            <span
              onMouseOver={handleOnMouseOver}
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
      <h6 className="language-label">{ label }</h6>
    </div>
  )
}

export default LanguagesStats
