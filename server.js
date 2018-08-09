const express = require("express");

// intialize express instance
const app = express();

// register routes
require("./app/routes/index")(app, {})

// define port (read it from environment variable)
const port = 3000;

app.listen(port, () => {
    console.log("Express server started")
})