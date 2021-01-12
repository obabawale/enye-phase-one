//importing modules
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const path = require("path");
const route = require('./routes/route');

// initialize app
const app = express();

const port = 5000;

//testing server
app.get('/', (req, res) => {
    res.send('foobar');
});

app.use(cors());

app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', route);

app.listen(port, () => {
    console.log("Server started at port " + port);
});