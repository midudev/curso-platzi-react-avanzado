const db = require('../adapter');
const uuidv1 = require('uuid/v1');
const bcrypt = require('bcrypt');


function addFav ({ id, photoId }) {
  return db.get('users').find({ id, photoId })
}

function register () {
  // create a token on register
}

function login () {
  // create a token when login
}

async function create ({ email, password }) {
  // Create a user
  const user = {
    // with a unique user id
    id: uuidv1(),
    email,
    // with the encrypted password
    password: await bcrypt.hash(password, 10)
  }

  // Write in db.json
  db.get('users')
  .push(user)
  .write()

  return user;
}

function find ({ email }) {
  return db.get('users')
  .find({ email })
  .value()
}

module.exports = { create, addFav, find, register, login }