const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const Memory = require('lowdb/adapters/Memory')

const isLocal = !process.env.NOW_REGION
const dbJSON = isLocal ? "db.json" : "/tmp/db.json"
const Type = isLocal ? FileSync : Memory

const db = low(new Type)
db.defaults(require(dbJSON)).write()

module.exports = db
