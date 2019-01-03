const MongoClient = require('mongodb').MongoClient
const url = "mongodb-tutorial://localhost:27017/"

/**
 * { name: 1 } => ASCENDING
 * { name: -1 } => DESCENDING
 */
MongoClient.connect(url, { useNewUrlParser: true}, (err, db) => {
  if(err) throw err

  const dbo = db.db("community-forum-db")
  const mysort = { name: 1 }
  dbo.collection("customers").find().sort(mysort).toArray((err, result) => {
    if(err) throw err
    // console.log(result)
    db.close()
  })

})

MongoClient.connect(url, { useNewUrlParser: true}, (err, db) => {
  if(err) throw err

  const dbo = db.db("community-forum-db")
  const mysort = { name: -1 }
  dbo.collection("customers").find().sort(mysort).toArray((err, result) => {
    if(err) throw err
    // console.log(result)
    db.close()
  })

})