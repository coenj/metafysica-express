var express = require('express');
var cors=require('cors');
var app = express();
app.use(cors())
var port = 3000;
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('Metafysica.db');
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.listen(port, function () {
    console.log("Server is listening on port 3000");
});


app.get(`/postings`, function (request, response) {
    db.all("SELECT * FROM Postings", 
        function (err, rows) {
            console.log("db contains" + [request.param.title]);
            response.send(rows);
        })
        ;
    console.log("This function will return all posts");
});

app.get(`/postings/:title`, function (request, response) {
    db.all("SELECT * FROM Postings WHERE Title=?", [request.param.title],
        function (err, rows) {
            console.log("db contains" + [request.param.title]);
            response.send(rows);
        })
        ;
    console.log("This function will return Russel");
});


app.get('/bergson', function (request, response) {
    db.all("SELECT * FROM Postings WHERE Title='Bergson'",
        function (err, rows) {
            console.log("db contains" + rows);
            response.send(rows);
        })
        ;
});

app.get('/harman', function (request, response) {
    db.all("SELECT * FROM Postings WHERE Title='Harman'",
        function (err, rows) {
            console.log("db contains" + rows);
            response.send(rows);
        })
        ;
    
});


app.get('/russel', function (request, response) {
    db.all("SELECT * FROM Postings WHERE Title='Russel'",
        function (err, rows) {
            console.log("db contains" + rows);
            response.send(rows);
        })
        ;
    console.log("This function will return Russel");
});

app.get('/about', function (request, response) {
    response.send("This function will return about me");
});


