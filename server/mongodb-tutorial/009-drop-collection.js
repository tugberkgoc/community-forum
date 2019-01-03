const MongoClient = require('mongodb').MongoClient
const url = "mongodb-tutorial://localhost:27017/"

MongoClient.connect(url, { useNewUrlParser: true}, (err, db) => {
  if(err) throw err

  const dbo = db.db('community-forum-db')

  dbo.collection('customers').drop((err, delOK) => {
    if(err) throw err
    if(delOK) console.log("Collection deleted")
    db.close()
  })
})

MongoClient.connect(url, { useNewUrlParser: true}, (err, db) => {
  if(err) throw err

  const dbo = db.db('community-forum-db')

  dbo.dropCollection('products', (err, delOK) => {
    if(err) throw err
    if(delOK) console.log("Collection deleted")
    db.close()
  })
})