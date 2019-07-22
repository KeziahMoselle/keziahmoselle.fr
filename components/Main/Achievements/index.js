import React from 'react'
import Achievement from './Achievement'

const achievementsList = [
  {
    name: 'Hacktoberfest',
    thumbnail: 'hacktoberfest.png',
    year: '2018',
    link: 'https://twitter.com/KeziahMoselle/status/1055202328389865473',
    description: `Hacktoberfest is a month-long celebration of open source software run by DigitalOcean in partnership with GitHub and Twilio.`,
    rank: '10 PR merged'
  },
  {
    name: 'GitHub Game Off',
    thumbnail: 'github_game_off.png',
    year: '2018',
    link: 'https://itch.io/jam/game-off-2018/rate/335819',
    description: `Game Off is our annual game jam, where participants spend the month of November creating games based on a theme that we provide. The theme for this year's Game Off was HYBRID!`,
    rank: '#242/327'
  },
  {
    name: 'Climate Fixathon',
    thumbnail: 'climate_fixathon.jpg',
    description: `The world's first online hackathon to help fix the climate`,
    year: '2019'
  },
  {
    name: 'GitHub Education #PinsToWin',
    thumbnail: 'github_education_pins.png',
    description: `Your GitHub profile is a great place to show off your work and projects to the world. It displays your contributions, and you can highlight specific projects by pinning them. Now, you can even pin gists. GitHub gists are a fast and easy way of sharing code snippets and single files. When you pin a gist, a preview of the contents will appear on your profile.`,
    year: '2019',
    link: 'https://twitter.com/GitHubEducation/status/1151220367966556161',
    won: true
  },
  {
    name: '#100DaysOfCode',
    thumbnail: '100daysofcode.png',
    description: `Code minimum an hour every day for the next 100 days. Tweet your progress every day with the #100DaysOfCode hashtag.`,
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
              description={achievement.description}
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