const cron = require("node-cron");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

let length;

const lengthFun = async () => {
  const result = await fetch("http://localhost:3001/rooms");
  const data = await result.json();
  length = await data.length;
  console.log("UPDATED LENGTH: " + (await length));
};

lengthFun();

// Every minute
cron.schedule("* * * * *", async function () {
  for (let i = 1; i <= length; i++) {
    console.log("UPDATED HISTORY OF ROOM ID: " + i);
    await fetch(`http://localhost:3001/room/${i}`);
  }
});

// Every hour reset length
cron.schedule("0 */1 * * *", async function () {
  lengthFun();
});

module.exports = cron;
