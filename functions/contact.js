exports.handler = async (event, context) => {
  const email = event.queryStringParameters.email
  const message = event.queryStringParameters.message

  return {
    statusCode: 200,
    body: `Received: ${email} and '${message}'`
  }
};