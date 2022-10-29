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
