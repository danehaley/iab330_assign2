const cron = require("node-cron");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

exports.script = () => {
  let length;

  const lengthFun = async () => {
    console.log("Script Running");
    const result = await fetch(`http://localhost:3000/rooms`);
    const data = await result.json();
    length = await data.length;
  };

  lengthFun();

  // Every minute
  cron.schedule("* * * * *", async function () {
    for (let i = 1; i <= length; i++) {
      console.log("UPDATED HISTORY OF ROOM ID: " + i);
      await fetch(`http://localhost:3000/room/${i}/script`);
    }
  });

  // Every hour reset length
  cron.schedule("0 */1 * * *", async function () {
    lengthFun();
  });
};
