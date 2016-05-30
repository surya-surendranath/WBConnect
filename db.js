'use strict'

module.exports = function (knex) {
   return{
   ssn:ssn,
   saveNewUser:saveNewUser
  }

    function saveNewUser(user){
      return knex('users')

      .insert(user)
    }

ssn ={ name:"kk" }
}