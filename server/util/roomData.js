function addRoomData(file, value, data) {
  const fs = require("fs");

  rooms = JSON.parse(fs.readFileSync(file));

  // Could be optimized in practice, but for MVP
  rooms.every((room) => {
    if (room["id"] === value) {
      room["history"].push(data);

      // Break loop
      return false;
    }
    return true;
  });

  fs.writeFileSync(file, JSON.stringify(rooms));
}

function getRoomData(file, value) {
  const fs = require("fs");

  rooms = JSON.parse(fs.readFileSync(file));
  data = null;

  // Could be optimized in practice, but for MVP
  rooms.every((room) => {
    if (room["id"] === value) {
      data = room;

      // Break loop
      return false;
    }
    return true;
  });

  return data;
}

module.exports = { addRoomData: addRoomData, getRoomData: getRoomData };