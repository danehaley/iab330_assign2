const Router = require("express-promise-router");
const router = new Router();

const client = require("../data/client");

// Get specific patient
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
