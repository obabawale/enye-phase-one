const express = require("express");
const cors = require("cors");
const route = require('./routes/route');

// initialize app
const app = express();

const port = 5000;

app.use(cors());

app.use('/api', route);

app.listen(port, () => {
    console.log("Server started at port " + port);
});