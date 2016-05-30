
exports.up = function(knex, Promise) {
console.log('create table')

  return knex.schema.createTableIfNotExists('userInfo', function(table) {
      table.increments('id')
      table.string('first_name')
      table.string('last_name')
      table.string('email')
      table.string('password')
      table.string('current_location')
      table.string('birth_place')
      table.string('designation')
      table.string('gender')
      table.string('Marriagestatus')
      table.string('date_of_birth')
      table.string('image')
      table.string('feeds')
      
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('userInfo').then(function () {
    console.log('userInfo table were dropped')
  })
};