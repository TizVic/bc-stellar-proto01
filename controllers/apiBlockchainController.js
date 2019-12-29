const stellar = require('stellar-sdk');
const bodyParser = require('body-parser');

var bcServer = new stellar.Server('https://horizon-testnet.stellar.org');

//  953459
module.exports = (app) => {

        // List of transaction in ledger (full version)
        app.get('/api/bc/transactions/long/:ledgerId', (req, res) => {

            // get a list of transactions that occurred in ledger 1400
            bcServer.transactions()
                .forLedger(req.params.ledgerId)
                .call().then((r) => { 
                    // Get all prperties                    
                    res.send(r); 
                });
    
        });

    // List of transaction in ledger (short version)
    app.get('/api/bc/transactions/short/:ledgerId', (req, res) => {

        // get a list of transactions that occurred in ledger 1400
        bcServer.transactions()
            .forLedger(req.params.ledgerId)
            .call().then((r) => { 

                // Get id and 
                var output = [];
                for (let index = 0; index < r.records.length; index++) {
                    const element = r.records[index];
                    output.push({
                        id: element.id, 
                        feeCharged: element.fee_charged, 
                        feePayed: element.fee_paid, 
                        memo: element.memo,
                        operationCount: element.operation_count
                    });
                }
                
                res.send(output); 
            });

    });

}
