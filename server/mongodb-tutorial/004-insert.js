const mongo = require('mongodb')
const MongoClient = mongo.MongoClient
const url = "mongodb-tutorial://localhost:27017/"

/**
 * You can insert same item with different _ids
 *
 */
MongoClient.connect(url, { useNewUrlParser: true}, (err, db) => {
  if (err) throw console.log(err.toString())

  const forumDB = db.db("community-forum-db")

  const object = { name: "Company Inc", address: "Highway 37" }

  forumDB.collection("customers").insertOne(object, function(err, res) {
    if (err) throw err
    console.log("1 document inserted")
    db.close()
  })

})

MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {

  if (err) throw err

  const forumDB = db.db("community-forum-db")

  const objects = [
    { name: 'John', address: 'Highway 71', type:'single'},
    { name: 'Peter', address: 'Lowstreet 4', hasChild:true},
    { name: 'Amy', address: 'Apple st 652'},
    { name: 'Hannah', address: 'Mountain 21'},
    { name: 'Michael', address: 'Valley 345'},
    { name: 'Sandy', address: 'Ocean blvd 2'},
    { name: 'Betty', address: 'Green Grass 1'},
    { name: 'Richard', address: 'Sky st 331'},
    { name: 'Susan', address: 'One way 98'},
    { name: 'Vicky', address: 'Yellow Garden 2'},
    { name: 'Ben', address: 'Park Lane 38'},
    { name: 'William', address: 'Central st 954'},
    { name: 'Chuck', address: 'Main Road 989'},
    { name: 'Viola', address: 'Sideway 1633'}
  ]

  forumDB.collection("customers").insertMany(objects, (err, res) => {
    if (err) throw err
    console.log("Number of documents inserted: " + res.insertedCount)
    console.log(res) // console.log(res.insertedCount)
    db.close()
  })

})

/**
 * You can not insert again with these specific ids.
 *
 */
MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
  if (err) throw err
  const dbo = db.db("community-forum-db")

  const myobj = [
    { _id: 154, name: 'Chocolate Heaven'},
    { _id: 155, name: 'Tasty Lemon'},
    { _id: 156, name: 'Vanilla Dream'}
  ]

  dbo.collection("products").insertMany(myobj, (err, res) => {
    if (err) throw err
    console.log(res)
    db.close()
  })

})