const MongoClient = require('mongodb').MongoClient
const url = "mongodb://localhost:27017/"

MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
  if(err) throw err

  const dbo = db.db('community-forum-db')

  dbo.collection('customers').find().limit(5).toArray((err, result) => {
    if(err) throw err
    console.log(result)
    db.close()
  })
})