const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const Memory = require('lowdb/adapters/Memory')
const dbContent = require('./db.json')

let db

if (!process.env.NOW_REGION) {
  db = low(new FileSync('db.json'))
} else {
  db = low(new Memory())
  db.defaults(dbContent).write()
}

module.exports = db
