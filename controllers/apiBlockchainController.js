const stellar = require('stellar-sdk');
const bodyParser = require('body-parser');

var bcServer = new stellar.Server('https://horizon-testnet.stellar.org');

//  953459
module.exports = (app) => {

    // List of transaction in ledger
    app.get('/api/bc/transactions/:byLedger', (req, res) => {

        // get a list of transactions that occurred in ledger 1400
        bcServer.transactions()
            .forLedger(req.params.byLedger)
            .call().then((r) => { 
                res.send(r); 
            });

    });

}
