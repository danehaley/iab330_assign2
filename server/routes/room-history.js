const Router = require("express-promise-router");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const roomData = new require("../util/roomData");
const router = new Router();

router.get("/room-history/:id", async (req, res) => {
  fetch(`http://localhost:3001/room/${req.params.id}`);
  const history = roomData.getRoomData(
    "./data/json/rooms_history.json",
    parseInt(req.params.id)
  );
  res.status(200).json(history);
});

module.exports = router;
