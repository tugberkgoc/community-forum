const mongo = require('mongodb')
const MongoClient = mongo.MongoClient
const url = "mongodb-tutorial://localhost:27017/"

/**
 * Find One
 *
 */
MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
  if (err) throw err
  const dbo = db.db("community-forum-db")

  dbo.collection("customers").findOne({}, (err, result) => {
    if (err) throw err
    // console.log(result)
    // console.log(result.name)
    db.close()
  })

})

/**
 * Find All
 *
 */
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err
  const dbo = db.db("community-forum-db")
  dbo.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err
    // console.log(result)
    db.close()
  })
})

/**
 * Find Some
 *
 */
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err
  const dbo = db.db("community-forum-db")
  dbo.collection("customers").find({}, { projection: { _id: 0, name: 1, address: 1 } }).toArray(function(err, result) {
    if (err) throw err
    // console.log(result)
    db.close()
  })
})

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err
  const dbo = db.db("community-forum-db")
  dbo.collection("customers").find({}, { projection: { address: 0 } }).toArray(function(err, result) {
    if (err) throw err
    // console.log(result)
    db.close()
  })
})

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err
  const dbo = db.db("community-forum-db")
  dbo.collection("customers").find({}, { projection: { _id: 0, name: 1 } }).toArray(function(err, result) {
    if (err) throw err
    // console.log(result)
    db.close()
  })
})

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err
  const dbo = db.db("community-forum-db")
  dbo.collection("customers").find({}, { projection: { _id: 0 } }).toArray(function(err, result) {
    if (err) throw err
    // console.log(result)
    db.close()
  })
})

/**
 * You get an error if you specify both 0 and 1 values in the same object (except if one of the fields is the _id field):
 *
 */
/*
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err
  const dbo = db.db("community-forum-db")
  dbo.collection("customers").find({}, { projection: { name: 1, address: 0 } }).toArray(function(err, result) {
    if (err) throw err
    console.log(result)
    db.close()
  })
})
*/
