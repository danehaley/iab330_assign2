const Router = require("express-promise-router");
const fs = require("fs");
const roomData = new require("../util/roomData");
const router = new Router();

router.get("/room-history/:id", async (req, res) => {
  const history = roomData.getRoomData(
    "./data/json/rooms_history.json",
    parseInt(req.params.id)
  );
  res.status(200).json(history);
});

module.exports = router;
