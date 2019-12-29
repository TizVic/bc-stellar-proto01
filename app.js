//
// Main module
//
const express = require('express');
const app = express();

const apiInfrastructureController = require('./controllers/apiInfrastructureController');

const webPort = process.env.PORT || 3000; 

app.use('/assets', express.static(__dirname + '/public'));

app.get('/', (req, res) => {

    res.send('GET \'/\' OK');
});

// Infrastructure APIs:
// api/info/version
apiInfrastructureController(app);


app.listen(webPort);
