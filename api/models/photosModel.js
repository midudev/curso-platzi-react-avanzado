const db = require('../adapter')

function find ({id}) {
  return db.get('photos').find({id}).value()
}

function like ({ id }) {
  return db.get('photos').find({id}).update('likes', likes => likes + 1).write()
}

function list () {
  return db.get('photos').value()
}

module.exports = { find, like, list }