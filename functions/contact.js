const axios = require('axios')

exports.handler = async (event, context) => {
  /* Check method */

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    }
  }

  /* Payload data */

  const { email, message } = JSON.parse(event.body)

  /* Fields missing */

  if (!email || !message) {
    return {
      statusCode: 206,
      body: ''
    }
  }

  /* Send */

  const embed = {
    content: 'keziahmoselle.fr',
    embeds: [
      {
        color: 6842567,
        timestamp: new Date(),
        footer: {
          icon_url: 'https://cdn.discordapp.com/embed/avatars/0.png'
        },
        author: {
          name: email,
          icon_url: 'https://cdn.discordapp.com/embed/avatars/0.png'
        },
        fields: [
          {
            name: 'Received message:',
            value: message
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
    url: process.env.DISCORD_WEBHOOK_URL,
    data: embed
  })

  return {
    statusCode: response.status,
    body: response.statusText
  }
}
