const client = require("../data/client");

const express = require("express");
const router = express.Router();

router.get("/patients", (req, res) => {
  const query = `
    SELECT *
    FROM patientinfo;
    `;
  client.query(query, (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    for (let row of res.rows) {
      console.log(row);
    }
  });
});

router.get("/patient/:id", (req, res) => {
  const query = `
    SELECT *
    FROM patientinfo;
    `;
  client.query(query, (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    for (let row of res.rows) {
      console.log(row);
    }
  });
});

module.exports = router;
