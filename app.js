//
// Main module
//
const express = require('express');
const app = express();

const startAppTime = Date.now();

const apiInfrastructure = require('./controllers/apiInfrastructureController');
const apiBlockchain = require('./controllers/apiBlockchainController');

const webPort = process.env.PORT || 3000; 

app.use('/assets', express.static(__dirname + '/public'));

app.get('/', (req, res) => {

    res.send('GET \'/\' OK');
});

// Infrastructure APIs:
// api/info/version
apiInfrastructure(app, startAppTime);

// Blockchain APIs
// ...
apiBlockchain(app);

app.listen(webPort);
