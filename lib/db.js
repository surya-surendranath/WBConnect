module.exports = function(knex) {
  return {

    getAll: function(table, callback) {
      knex(table)
      .then(function (resp) {
        callback(null, resp)
      })
    },
    getAllSort: function(table, callback) {
      knex(table)
       .orderBy('id','desc')
       .then(function (resp) {
        callback(null, resp)
      })
    },

    addNew: function(table,params,callback) {
      knex(table)
       .insert(params)
         .then (function (resp){
          callback(null,resp)
         })

    },
    getUserByName2: function(name) {
       return knex('userInfo')
       .where('first_name', name)
    },
   getUserByNameNew: function(name) {
      return knex('userInfo')
       .where('first_name', name)
    },

    findOne: function(table,params,callback) {
      knex(table)
        .where(params)
          .then (function (resp) {
            callback (null,resp[0])
          })
    },
    getUserByName: function(name) {
      return knex('userInfo')
       .where('first_name', name)
    }

  }
}
