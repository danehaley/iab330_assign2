const client = require("./data/client");
const express = require("express");
const app = express();
const port = 3001;

// Route
const occupancy = require("./routes/occupancy");
const patients = require("./routes/patients");

// Connect to database
client.connect();

// Use routes from the following imports
app.use("/", patients, occupancy);

// Listen for requests from client
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
