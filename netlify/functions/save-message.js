const faunadb = require('faunadb')

const q = faunadb.query

const client = new faunadb.Client({
    secret: process.env.FAUNA_SECRET_KEY,
})

exports.handler = async (event) => {

    const data = JSON.parse(event.body);
    data.date = (new Date()).toString();

    var createMessage = client.query(
        q.Create(
          q.Collection('messages'),
          { data: data }
        )
      )

      await createMessage
        .then(function (res) { 
            console.log('Result:', res) 
        })
        .catch(function (err) { 
            // console.log('Error:', err) 
        })

    return {
        statusCode: 200,
        body: JSON.stringify({}),
    }
}
