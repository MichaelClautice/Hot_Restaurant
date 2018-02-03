const express = require('express');
const bodyParser = require('body-parser');
 
let port = process.env.PORT || 3000;
let app = express();

let reservations = [];
let waitList = [];

app.use(bodyParser.json());

app.post('/api/reservation', function (req, res) {
    if (reservations.length <= 5) {
        reservations.push(req.body);
    } else {
        waitList.push(req.body);
    }
    res.end();
});

app.get('/api/reservation', function(req, res) {
    res.json(reservations);
});

app.get('/api/waitList', function(req, res) {
    res.json(waitList);
})

app.get('/api/reservation/clear', function (req, res) {
    reservations = [];
    waitList = [];
    res.end();
});

app.listen(port, () => {
    console.log('App is listening port ' + port);
});