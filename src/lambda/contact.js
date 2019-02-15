require('dotenv').config()
const axios = require('axios')
const { DISCORD_WEBHOOK_URL } = process.env

exports.handler = async (event, context, callback) => {
  /* Check method */
  
  if (event.httpMethod !== 'POST') {
    callback(null, {
      statusCode: 405,
      body: 'Method Not Allowed'
    })
  }


  /* Payload data */

  const { email, message } = JSON.parse(event.body)
  

  /* Fields missing */

  if (!email || !message) {
    callback(null, {
      statusCode: 206,
      body: ''
    })
  }


  /* Send */

  const embed = {
    "content": "keziahmoselle.fr",
    "embeds": [
      {
        "color": 6842567,
        "timestamp": new Date(),
        "footer": {
          "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
        },
        "author": {
          "name": email,
          "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
        },
        "fields": [
          {
            "name": "Received message:",
            "value": message
          }
        ]
      }
    ]
  }

  const response = await axios({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    url: DISCORD_WEBHOOK_URL,
    data: embed
  })

  callback(null, {
    statusCode: response.status,
    body: response.statusText
  })

}