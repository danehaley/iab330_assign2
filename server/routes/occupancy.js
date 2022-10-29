const Router = require("express-promise-router");
const router = new Router();

const client = require("../data/client");

router.get("/rooms", async (req, res) => {
  const query = `
    SELECT *
    FROM roomoccupancy2;
    `;
  client.query(query).then((results) => {
    res.status(200).json(results.rows);
  });
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
