const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



app.get('/', (req, res) => {
  //res.send('Hello World!')
  res.send('Welcome to Data Representation & Querying')
})

app.get('/whatever',(req, res)=>{
    res.send('hi')
})

//route point that will take an argument form
//the url path and return hello “argument” for the url
app.get('/hello/:name', (req,res)=>{
    res.send('helloo'+req.params.name)
})


//Add a route point /api/movies that will return json data:

app.get('/api/movies', (req, res)=>{
    const movies =[
        {
        "Title": "Avengers: Infinity War",
        "Year": "2018",
        "imdbID": "tt4154756",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
        "Title": "Captain America: Civil War",
        "Year": "2016",
        "imdbID": "tt3498820",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
        ];
        res.status(200).json({ //return ok status message (200)
            mymovies:movies,
            'Message': 'Hello from the server'
        })
})


// route /test that returns a html page when Queried
app.get('/test', (req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

//get request for form
app.get('/name', (req,res)=>{
    res.send('Hello ' + req.query.firstname + ' ' + req.query.lastname);
})

//listen for post request
app.post('/name', (req,res)=>{
    res.send('goodbye ' +req.body.firstname + ' ' + req.body.lastname);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})