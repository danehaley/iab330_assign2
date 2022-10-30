const Router = require("express-promise-router");
const router = new Router();
const roomData = new require("../util/roomData");

const client = require("../data/client");

router.patch("/room/:id/:update", async (req, res) => {
  const query = `
      UPDATE roomoccupancy2
      SET status = '${decodeURI(req.params.update)}'
      WHERE roomid = ${req.params.id}
      `;
  client.query(query);
  res.end();
});

router.get("/room/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const query = `
      SELECT roomoccupancy2.roomid, roomoccupancy2.status, roomoccupancy2.patient, roomoccupancy2.nurse, roomoccupancy2.doctor, roomoccupancy2.traffic, roomoccupancy2.totalOccupants, rooms.roomType
      FROM roomoccupancy2
      INNER JOIN rooms ON roomoccupancy2.roomid = rooms.roomid
      WHERE ${req.params.id} = rooms.roomid;
      `;

  client.query(query).then((results) => {
    res.status(200).json(results.rows);

    // Process data into history object
    const room = results.rows[0];
    const processed = {
      time: new Date(),
      status: room.status,
      numberOfPeople: {
        current: room.traffic,
        sinceClean: room.totalOccupants,
        sinceCleanDemos: {
          patients: room.patient,
          nurses: room.nurse,
          doctors: room.doctor,
        },
      },
    };

    // send to JSON
    roomData.addRoomData("./data/json/rooms_history.json", id, processed);
  });
});

module.exports = router;