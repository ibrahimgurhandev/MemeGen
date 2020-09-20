const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db, collection;
// const url = "mongodb+srv://demo:demo@cluster0-q2ojb.mongodb.net/test?retryWrites=true";
const url = "mongodb+srv://demo:demo@cluster0.84ovu.mongodb.net/jokedb?retryWrites=true&w=majority"
const dbName = "jokedb";

app.listen(3000, () => {
  MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (error, client) => {
    if (error) {
      throw error;
    }
    db = client.db(dbName);
    console.log("Connected to `" + dbName + "`!");
  });
});

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(bodyParser.json())
app.use(express.static('public'))

// app.get('/', (req, res) => {
//   db.collection('jokes').find().toArray((err, result) => {
//     if (err) return console.log(err)
//     res.render('index.ejs', {
//       jokes: result
//     })
//   })
// })

app.get('/', (req, res) => {
  res.render('index.ejs', {
  })
})

app.get('/searchBooks', function (req, res) {
  db.collection('jokes').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.end(JSON.stringify(result));
  })
});

