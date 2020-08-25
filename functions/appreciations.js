process.env.AWS_ACCESS_KEY_ID = process.env.DYNAMO_ACCESS_KEY_ID
process.env.AWS_SECRET_ACCESS_KEY = process.env.DYNAMO_SECRET_ACCESS_KEY
const AWS = require('aws-sdk')

AWS.config.update({
  region: 'eu-west-3',
  endpoint: 'dynamodb.eu-west-3.amazonaws.com'
})

const client = new AWS.DynamoDB.DocumentClient()
const TableName = 'appreciations'
const id = 0

const PARAMS = {
  get: {
    TableName,
    Key: {
      id
    }
  },
  update: {
    TableName,
    Key: {
      id
    },
    UpdateExpression: 'set #total = #total + :val',
    ExpressionAttributeValues: {
      ':val': 1
    },
    ExpressionAttributeNames: {
      '#total': 'total'
    },
    ReturnValues: 'UPDATED_NEW'
  }
}

exports.handler = (event, context, callback) => {
  switch (event.httpMethod) {
    case 'GET':
      client.get(PARAMS.get, (error, data) => {
        if (error) {
          console.error(error)
          callback(null, {
            statusCode: 500,
            body: JSON.stringify(error)
          })
        }

        callback(null, {
          statusCode: 200,
          body: JSON.stringify(data)
        })
      })
      break

    case 'POST':
      client.update(PARAMS.update, (error, data) => {
        if (error) {
          console.error(error)
          callback(null, {
            statusCode: 500,
            body: JSON.stringify(error)
          })
        }

        callback(null, {
          statusCode: 200,
          body: JSON.stringify(data)
        })
      })
      break

    default:
      callback(null, {
        statusCode: 405,
        body: 'Method Not Allowed'
      })
      break
  }
}
