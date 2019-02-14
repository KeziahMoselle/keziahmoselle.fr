import querystring from 'querystring'

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" }
  }

  const { email, message } = querystring.parse(event.body)

  return {
    statusCode: 200,
    body: `Received message from '${email}': ${message}`
  }
}