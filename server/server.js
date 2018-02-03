const express = require('express');
const bodyParser = require('body-parser');
 
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