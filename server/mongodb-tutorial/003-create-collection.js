const mongo = require('mongodb')
const MongoClient = mongo.MongoClient
const url = "mongodb-tutorial://localhost:27017/"

MongoClient.connect(url, { useNewUrlParser: true } ,async (err, db) => {
  if (err) throw err

  const forumDB = db.db("community-forum-db")

  await forumDB.createCollection("customers", function(err, res) {
    if (err) throw err
    console.log("Collection created!")
    db.close()
  })

})
