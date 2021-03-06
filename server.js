const express = require("express");
const path = require("path");
const http = require("http");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'dist/tm')));

// app.use('/api',api);

app.get('*',(req, res) => {
    res.sendFile(path.join(__dirname,'dist/tm/index.html'));
})

const port = process.env.PORT || '3000';
app.set('port',port);

const server = http.createServer(app);
server.listen(port, () => console.log("Running on localhost:${port}"));

//  mongodb+srv://admin:admin@c0-txnvy.mongodb.net/test?retryWrites=true&w=majority

