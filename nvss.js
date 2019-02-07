// import .env
require('dotenv').config()
var port = 80
if (process.env.PORT != undefined) {
    port = process.env.PORT
}

// require nhentai library
var nhentai = require('nhentai-js')

// require express
var express = require('express')
var app = express()

// set the view engine to ejs
app.set('view engine', 'ejs');

// respond bad request if nothing is specified
app.get('/', function (req, res) {
    res.status(400)
        .send("400 bad request")
})

// main handler
app.get('/:bookId', function (req, res) {
    var bookId = req.params.bookId
    if (!isNaN(bookId)) {
        nhentai.getDoujin(bookId)
            .then((nhObj) => {
                res.render('pages/viewer', nhObj);
            })
            .catch(() => {
                res.status(404)
                    .send("404 not found")
            })
    } else {
        res.status(400)
            .send("400 bad request")
    }
})

// start listening
app.listen(port, () => console.log(`nvss.js listening on port ${port}!`))