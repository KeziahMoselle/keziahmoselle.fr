import React from 'react'
import Achievement from './Achievement'

const achievementsList = [
  {
    name: 'Hacktoberfest',
    thumbnail: 'hacktoberfest.png',
    year: '2018',
    link: 'https://twitter.com/KeziahMoselle/status/1055202328389865473',
    description: '',
    rank: '10 PR merged'
  },
  {
    name: 'GitHub Game Off',
    thumbnail: 'github_game_off.png',
    year: '2018',
    link: 'https://itch.io/jam/game-off-2018/rate/335819',
    description: '',
    rank: '#242/327'
  },
  {
    name: 'Climate Fixathon',
    thumbnail: 'climate_fixathon.jpg',
    year: '2019'
  },
  {
    name: 'GitHub Education #PinsToWin',
    thumbnail: 'github_education_pins.png',
    year: '2019',
    link: 'https://twitter.com/GitHubEducation/status/1151220367966556161',
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
  
  return (
    <div className="container medium achievements">
      <h3>Achievements</h3>

      <div className="block achievements-list">
        {
          achievementsList.map((achievement, index) => (
            <Achievement
              key={index}
              name={achievement.name}
              thumbnail={achievement.thumbnail}
              year={achievement.year}
              link={achievement.link}
              rank={achievement.rank}
              won={achievement.won}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Achievements