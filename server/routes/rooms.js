const Router = require("express-promise-router");
const router = new Router();

const client = require("../data/client");

// Get all rooms
router.get("/rooms", async (req, res) => {
  const queryCheck = `
  UPDATE roomoccupancy2
  SET status = 'dirty'
  WHERE traffic >= 25
  `;

  const query = `
  SELECT roomoccupancy2.roomid, roomoccupancy2.status, roomoccupancy2.patient, roomoccupancy2.nurse, roomoccupancy2.doctor, roomoccupancy2.traffic, roomoccupancy2.totalOccupants, rooms.roomType
  FROM roomoccupancy2
  INNER JOIN rooms ON roomoccupancy2.roomid = rooms.roomid;
  `;

  client.query(queryCheck);

  client.query(query).then((results) => {
    res.status(200).json(results.rows);
  });
});

module.exports = router;
