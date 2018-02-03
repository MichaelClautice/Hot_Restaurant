const express = require('express');
const bodyParser = require('body-parser');
var path = require("path");
 
let port = process.env.PORT || 3000;
let app = express();

app.use(bodyParser.json());

app.post('/api/reservation', function (req, res) {
    console.log(req.body);
    res.end();
});

app.listen(port, () => {
    console.log('App is listening port ' + port);
});

// Routes to pages

app.get("/", (req, res)=> {
    console.log("hello");
    res.sendFile(path.join(__dirname, "../HTML/home.html"))
});

app.get("/reserve", (req, res) => {
    res.sendFile(path.join(__dirname, "../HTML/reserve.html"))
});

app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname, "../HTML/tables.html"))
});
