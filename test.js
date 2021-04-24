let express = require("express");
let app = express();

let http = require('http').createServer(app);

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

http.listen(port,()=>{
    console.log("listening on port ",port);
});