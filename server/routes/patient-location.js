const Router = require("express-promise-router");
const router = new Router();

const client = require("../data/client");

// Get patient location by patient id
router.get("/patient-location/:patientid", (req, res) => {
  const query = `
      SELECT *
      FROM patientlocation2
      INNER JOIN rooms ON patientlocation2.roomid = rooms.roomid
      WHERE ${req.params.patientid} = patientlocation2.patientid;
      `;

  client.query(query).then((results) => {
    res.status(200).json(results.rows);
  });
});

// Get patient location by room id
router.get("/patient-location/room/:roomid", (req, res) => {
  const query = `
      SELECT *
      FROM patientlocation2
      WHERE roomID = ${req.params.roomid};
      `;
  client.query(query).then((results) => {
    res.status(200).json(results.rows);
  });
});

module.exports = router;
