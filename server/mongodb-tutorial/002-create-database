const MongoClient = require('mongodb').MongoClient
const url = "mongodb-tutorial://localhost:27017/community-forum-db"

MongoClient.connect(url, { useNewUrlParser: true}, (err, db) => {
  if(err) throw err;
  console.log("Database created!")
  db.close()
})