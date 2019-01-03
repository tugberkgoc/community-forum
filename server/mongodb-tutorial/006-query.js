const MongoClient = require('mongodb').MongoClient;
const url = "mongodb-tutorial://localhost:27017/";

/**
 * Filter the result
 */

MongoClient.connect(url, { useNewUrlParser: true}, async (err, db) => {
  if (err) throw err
  const dbo = db.db("community-forum-db")
  const query = { address: "Park Lane 38" }
  await dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err
    // console.log(result)
    db.close()
  })
})

/**
 * Filter With Regular Expressions
 *
 * To find only the documents where the "address" field starts with the letter "S", use the regular expression /^S/
 */
MongoClient.connect(url, { useNewUrlParser: true}, (err, db) => {
  if (err) throw err
  const dbo = db.db("community-forum-db")
  const query = { address: /^S/ }
  dbo.collection("customers").find(query).toArray((err, result) => {
    if (err) throw err
    console.log(result)
    db.close()
  })
})