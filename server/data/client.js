const { Client } = require("pg");
const metadata = require("node-ec2-metadata");

let host = "3.227.215.23";

// Detect if running on EC2
metadata.isEC2().then(function (onEC2) {
  if (onEC2) {
    host = "localhost";
  }
});

client = new Client({
  user: "dbuser",
  host: host,
  database: "iab330nodered",
  password: "iab3302022",
  port: 5432,
});

module.exports = client;
