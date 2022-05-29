const faunadb = require('faunadb')

const q = faunadb.query

const client = new faunadb.Client({
    secret: process.env.FAUNA_SECRET_KEY,
})

exports.handler = async () => {

    var listAll = client.query(
    q.Map(
        q.Paginate(q.Documents(q.Collection('messages'))),
        q.Lambda(x => q.Get(x))
        )
    )

    var results = {};

    await listAll
        .then(function (res) {
            results.messages = res.data.map(item => item.data)
        })

    return {
        statusCode: 200,
        body: JSON.stringify(results, null, 2),
    }

}