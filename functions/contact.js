const axios = require('axios')
const mailgun = require('./utils/mail')

const EMAIL_REGEX = /\S+@\S+\.\S+/

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
      body: 'either "email" or "message" is empty.'
    }
  }

  if (!EMAIL_REGEX.test(email)) {
    return {
      statusCode: 206,
      body: 'Email is invalid.'
    }
  }

  /* Send */

  const sendEmail = mailgun.messages().send({
    from: email,
    to: process.env.MY_EMAIL_ADDRESS,
    subject: `[keziahmoselle.fr] ${email} vous a envoyé un message`,
    text: message,
    html: `<p>${message}</p>`
  })

  const sendEmbed = axios({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    url: process.env.DISCORD_WEBHOOK_URL,
    data: generateEmbed(email, message)
  })

  const results = await Promise.allSettled([sendEmail, sendEmbed])

  const response = {
    statusCode: 200,
    body: 'Success'
  }

  for (const result of results) {
    if (result.status === 'rejected') {
      response.statusCode = 500
      response.body = 'Error'
    }
  }

  return response
}

function generateEmbed (email, message) {
  return {
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
}
