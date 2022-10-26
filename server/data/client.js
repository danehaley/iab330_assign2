const { Client } = require("pg");

client = new Client({
  user: "dbuser",
  host: "3.227.215.23",
  database: "iab330nodered",
  password: "iab3302022",
  port: 5432,
});

module.exports = client;
