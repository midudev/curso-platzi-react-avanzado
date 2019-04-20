const db = require('../adapter')

function list () {
  return db.get('categories').value()
}

module.exports = { list }