require('dotenv').config()
const axios = require('axios')

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

  const embed = JSON.stringify({
    content: '',
    embeds: [{
      type: 'rich',
      timestamp: new Date().toDateString(),
      footer: { text: 'Received' },
      fields: [
        {
          name: 'From',
          value: email,
          inline: true
        },
        {
          name: 'To',
          value: 'Keziah MOSELLE',
          inline: true
        },
        {
          name: 'Subject',
          value: 'Portfolio message',
          inline: true
        },
        {
          name: 'Content',
          value: message,
          inline: true
        },
      ]
    }]
  })

  const response = await axios({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    url: process.env.DISCORD_WEBHOOK_URL,
    data: embed
  })

  console.log(response)

}