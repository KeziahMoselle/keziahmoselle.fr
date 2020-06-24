import React from 'react'
import { useTranslation } from 'react-i18next'
import Achievement from './Achievement'

const achievementsList = [
  {
    name: 'Hacktoberfest 2018',
    thumbnail: 'hacktoberfest_2018.png',
    year: '2018',
    link: 'https://twitter.com/KeziahMoselle/status/1055202328389865473',
    rank: '10 PR merged'
  },
  {
    name: 'Hacktoberfest 2019',
    thumbnail: 'hacktoberfest_2019.png',
    year: '2019',
    link: 'https://twitter.com/KeziahMoselle/status/1183725853240373248',
    rank: '4 PR merged'
  },
  {
    name: 'GitHub Game Off',
    thumbnail: 'github_game_off.png',
    year: '2018',
    link: 'https://itch.io/jam/game-off-2018/rate/335819',
    rank: '#242/327'
  },
  {
    name: 'Climate Fixathon',
    thumbnail: 'climate_fixathon.jpg',
    year: '2019',
    link: 'https://github.com/purpose-fixathon'
  },
  {
    name: 'GitHub Education #PinsToWin',
    thumbnail: 'github_education_pins.png',
    year: '2019',
    link: 'https://github.blog/2019-09-03-pins-to-win-stunning-student-profiles/',
    won: true
  },
  {
    name: '#100DaysOfCode',
    thumbnail: '100daysofcode.png',
    year: '2018',
    link: 'https://github.com/KeziahForks/100-days-of-code',
    won: true
  }
]

function Achievements () {
  const { t } = useTranslation()

  return (
    <section id="achievements" className="container medium achievements">
      <h3>{ t('achievements.title') }</h3>

      <div className="block achievements-list">
        {
          achievementsList.map((achievement, index) => (
            <Achievement
              key={index}
              {...achievement}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Achievements
