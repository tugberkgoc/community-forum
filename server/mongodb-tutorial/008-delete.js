const MongoClient = require('mongodb').MongoClient
const url = "mongodb-tutorial://localhost:27017/"

/**
 * If the query finds more that one document, only the first occurrence is deleted.
 *
 */
MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
  if (err) throw err

  var dbo = db.db('community-forum-db')
  var myquery = { address: 'Mountain 21' }

  // dbo.collection("customers").deleteOne(myquery, (err, obj) => {
  //   if(err) throw err
  //   console.log("1 document deleted")
  //   console.log("How many documents were affected, OK: " + obj)
  //   db.close()
  // })
})

/**
 * You can delete all objects that started from O with using deleteMany.
 *
 */
MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
  if (err) throw err

  var dbo = db.db('community-forum-db')
  var myquery = { address: /^O/ }

  // dbo.collection("customers").deleteMany(myquery, (err, obj) => {
  //   if(err) throw err
  //   console.log(obj.result.n + " document(s) deleted")
  //   db.close()
  // })
})