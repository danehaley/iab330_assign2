const Router = require("express-promise-router");
const router = new Router();

const client = require("../data/client");

router.get("/rooms", async (req, res) => {
  const query = `
    SELECT *
    FROM roomoccupancy;
    `;
  const data = await client.query(query);
  res.json(data.rows);
});

router.get("/room/:id", async (req, res) => {
  let data = [];
  const query = `
    SELECT *
    FROM patientinfo;
    `;
  client
    .query(query)
    .then((res) => {
      for (let row of res.rows) {
        console.log(row);
      }
    })
    .then(() => {
      client.end();
    });
});

module.exports = router;