'use strict'
const DB =require('./db')
module.exports = function (knex) {
const db = DB(knex) 
  return {
    login :login
  }

  function login(name, password) {
  return db.getUserByName(name) 
  .then(checkUser)
  .then(checkPassword)

  function checkUser (rows) {
      if (!rows || !rows.length || rows.length === 0) {
        throw new Error('No such user name.')
      }
      return rows[0]
    }

    function checkPassword (user) {
      if (!password || password !== user.password) {
        throw new Error('Incorrect password.')
      }
      return user
    }
  }
}