
exports.up = function(knex, Promise) {

  console.log('create table')

  return knex.schema.createTableIfNotExists('events', function(table) {
      table.increments('id')
      table.string('name')
      table.string('Date')
      table.string('Starttime')
      table.string('Endtime')
      table.string('description')
      table.timestamps()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('events').then(function () {
    console.log('events table were dropped')
  })
};
