const client = require("./data/client");
const cors = require("cors");
const express = require("express");
const app = express();

// Routes
const room = require("./routes/room");
const rooms = require("./routes/rooms");

const patients = require("./routes/patients");
const patient = require("./routes/patient");
const patientLocation = require("./routes/patient-location");

// Connect to database
client.connect();

app.use(
  cors({
    origin: "*",
  })
);

// Use routes from the following imports
app.use("/", patients, patient, patientLocation, rooms, room);

// Listen for requests from client
app.listen(port, () => {
  console.log("Server listening...");
});

module.exports = app;
