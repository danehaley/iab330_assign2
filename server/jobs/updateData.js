const cron = require("node-cron");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

let length;

const lengthFun = async () => {
  const result = await fetch("http://localhost:3001/rooms");
  const data = await result.json();
  length = await data.length;
};

lengthFun();

// Every 2nd minute
cron.schedule("*/2 * * * *", async function () {
  for (let i = 1; i <= length; i++) {
    console.log("your number " + i);
    await fetch(`http://localhost:3001/room/${i}`);
  }
});

// Every 6th hour (i.e. 6, 12, 18, 24hr)
cron.schedule("0 */6 * * *", async function () {
  lengthFun();
});

module.exports = cron;
