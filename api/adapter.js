const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const db = low(new FileSync("db.json"));

module.exports = db
