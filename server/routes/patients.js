const client = require("../data/client");

const express = require("express");
const router = express.Router();

router.get("/patients", (req, res) => {
  const query = `
    SELECT *
    FROM patientinfo2;
    `;
  client.query(query).then((results) => {
    res.status(200).json(results.rows);
  });
});

router.get("/patient/:id", (req, res) => {
  const query = `
    SELECT *
    FROM patientinfo2
    WHERE patientID = ${req.params.id};
    `;
  client.query(query).then((results) => {
    res.status(200).json(results.rows);
  });
});

module.exports = router;
