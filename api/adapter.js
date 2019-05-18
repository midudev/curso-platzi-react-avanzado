const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const Memory = require('lowdb/adapters/Memory')

const json = require('./db.json')
const isLocal = !process.env.NOW_REGION
const Type = isLocal ? FileSync : Memory

const db = low(new Type)
db.defaults(json).write()

module.exports = db
