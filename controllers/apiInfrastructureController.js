const bodyParser = require('body-parser');
const fs = require('fs');

module.exports = function(app) {

    // Version from file 
    app.get('/api/info/version', (req, res) => {
        res.send({ version: "1.0.1"});
    });

}

