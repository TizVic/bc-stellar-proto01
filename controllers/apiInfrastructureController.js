const bodyParser = require('body-parser');
const fs = require('fs');

function millisecondsToDhms(milliseconds) {
    seconds = Math.floor(Number(milliseconds/1000));
    var d = Math.floor(seconds / (3600*24));
    var h = Math.floor(seconds % (3600*24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);
    
    var dDisplay = d > 0 ? d + "d " : "";
    var hDisplay = h > 0 ? h + "h " : "";
    var mDisplay = m > 0 ? m + "m " : "";
    var sDisplay = s > 0 ? s + "s"  : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
}

module.exports = function(app, start) {

    // Version info.
    //TODO: Parametrize! 
    app.get('/api/info/version', (req, res) => {
        res.send({ version: "1.0.1"});
    });

    // Uptime
    app.get('/api/info/uptime', (req, res) => {
        res.send({uptime: millisecondsToDhms(Date.now() - start)});
    });

}

