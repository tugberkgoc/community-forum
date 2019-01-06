const MongoClient = require('mongodb').MongoClient
const url = "mongodb://127.0.0.1:27017/"

/**
 * If the query finds more than one record, only the first occurrence is updated
 *
 * [$set] operator, only the specified fields are updated
 */
MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
  if(err) throw err

  const dbo = db.db('community-forum-db')
  const myQuery = { address: 'Valley 345' }
  const newValues = { $set: {name: 'Mickey', address: 'Canyon 123'}}

  dbo.collection('customers').updateOne(myQuery, newValues, (err, res) => {
    if(err) throw err
    console.log("1 document updated")
    db.close()
  })
})

MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
  if(err) throw err

  const dbo = db.db('community-forum-db')
  const myquery = { address: /^S/ }
  const newValues = { $set: { name: 'Minnie'}}

  dbo.collection('customers').updateMany(myquery, newValues, (err, res) => {
    if(err) throw err
    console.log(res.result.nModified + ' document(s) updated')
    db.close()
  })
})