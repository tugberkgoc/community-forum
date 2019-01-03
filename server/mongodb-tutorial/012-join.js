const MongoClient = require('mongodb').MongoClient
const url = "mongodb://127.0.0.1:27017/"

/**
 * MongoDB is not a relational database, but you can perform a left outer join by using the [$lookup] stage.
 * The $lookup stage lets you specify which collection you want to join with the current collection, and which fields that should match.
 * NOT FINISHED !!!
 */
MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
  if(err) throw err

  const dbo = db.db('community-forum-db')

  dbo.collection('customers').aggregate([
    {
      $lookup:
        {
          from: 'products',
          localField: 'product_id',
          foreignField: '_id',
          as: 'orderdetails'
        }
    }
  ]).toArray((err, res) => {
    if(err) throw err
    console.log(JSON.stringify(res))
    db.close()
  })
})