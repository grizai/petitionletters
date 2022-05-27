const faunadb = require('faunadb')
const q = faunadb.query

const client = new faunadb.Client({
    secret: process.env.FAUNA_SECRET_KEY,
    domain: 'db.fauna.com', // Adjust if you are using Region Groups
})

exports.handler = async (event) => {

    const fields = JSON.parse(event.body);

    fields.date = (new Date()).toString();

    var updateOrCreate = client.query(
        q.Let({
            match: q.Match(q.Index('letter_search_by_uuid'), fields.uuid),
            data: { data: fields }
          },
          q.If(
            q.Exists(q.Var('match')),
            q.Update(q.Select('ref', q.Get(q.Var('match'))), q.Var('data')),
            q.Create(q.Collection('letters'), q.Var('data'))
          )
        )
    )

    updateOrCreate
        .then(function (res) { console.log('Result:', res) })
        .catch(function (err) { console.log('Error:', err) })

    return {
        statusCode: 200,
        body: JSON.stringify({}),
    }
}

    // var listUUID = client.query(
    //     q.Map(
    //         q.Paginate(q.Match(q.Index('letter_search_by_uuid'), fields.uuid)),
    //         q.Lambda(x => q.Get(x))
    //     )
    // )

    // listUUID
    //     .then(function (res) { console.log('Result:', res) })
    //     .catch(function (err) { console.log('Error:', err) })


    // var createP = client.query(
    //     q.Create(
    //       q.Collection('letters'),
    //       { data: fields }
    //     )
    //   )

    // createP
    //     .then(function (res) { console.log('Result:', res) })
    //     .catch(function (err) { console.log('Error:', err) })


    // var listAll = client.query(
    // q.Map(
    //     q.Paginate(q.Documents(q.Collection('letters'))),
    //     q.Lambda(x => q.Get(x))
    //     )
    // )

    // listAll
    //     .then(function (res) { console.log('Result:', res) })
    //     .catch(function (err) { console.log('Error:', err) })