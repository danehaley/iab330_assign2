const Router = require("express-promise-router");
const router = new Router();

const client = require("../data/client");

router.get("/rooms", async (req, res) => {
  const query = `
    SELECT roomoccupancy2.roomid, roomoccupancy2.status, roomoccupancy2.patient, roomoccupancy2.nurse, roomoccupancy2.doctor, roomoccupancy2.traffic, roomoccupancy2.totalOccupants, rooms.roomType
    FROM roomoccupancy2
    INNER JOIN rooms ON roomoccupancy2.roomid = rooms.roomid;
    `;
  client.query(query).then((results) => {
    res.status(200).json(results.rows);
  });
});

router.patch("/room/:id/:update", async (req, res) => {
  const query = `
    UPDATE roomoccupancy2
    SET status = '${decodeURI(req.params.update)}'
    WHERE roomid = ${req.params.id}
    `;
  client.query(query);
});

router.get("/room/:id", async (req, res) => {
  const query = `
    SELECT *
    FROM rooms
    WHERE roomID = ${req.params.id};
    `;
  client.query(query).then((results) => {
    res.status(200).json(results.rows);
  });
});

module.exports = router;
