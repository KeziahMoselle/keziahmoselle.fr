const mailgun = require('./utils/mail')

exports.handler = async (event, context) => {
  /* Check method */

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    }
  }

  /* Payload data */

  const { name, email, message } = JSON.parse(event.body)

  /* Fields missing */

  if (!name || !email || !message) {
    return {
      statusCode: 206,
      body: 'Missing fields.'
    }
  }

  /* Send */

  try {
    const response = await mailgun.messages().send({
      from: email,
      to: 'naty.moselle@gmail.com',
      subject: `[valanka] ${name} vous a envoyé un message`,
      text: message,
      html: `<p>${message}</p>`
    })

    return {
      statusCode: 200,
      body: ''
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: ''
    }
  }
}
