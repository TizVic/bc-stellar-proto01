//
// Main module
//
const express = require('express');
const app = express();

const startAppTime = Date.now();

const apiInfrastructureController = require('./controllers/apiInfrastructureController');

const webPort = process.env.PORT || 3000; 

app.use('/assets', express.static(__dirname + '/public'));

app.get('/', (req, res) => {

    res.send('GET \'/\' OK');
});

// Infrastructure APIs:
// api/info/version
apiInfrastructureController(app, startAppTime);


app.listen(webPort);
