const faunadb = require('faunadb')

const q = faunadb.query

const client = new faunadb.Client({
    secret: process.env.FAUNA_SECRET_KEY,
})

exports.handler = async () => {

    var listAll = client.query(
    q.Map(
        q.Paginate(q.Documents(q.Collection('letters'))),
        q.Lambda(x => q.Get(x))
        )
    )

    var results = {};
    results.letters = [];

    await listAll
        .then(function (res) {
            results.letters = res.data.map(item => item.data)
        })


    return {
        statusCode: 200,
        body: JSON.stringify(results, null, 2),
    }

}