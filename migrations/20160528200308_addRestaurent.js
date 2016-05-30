exports.up = function(knex, Promise) {

  console.log('create table')

  return knex.schema.createTableIfNotExists('Restaurents', function(table) {
      table.increments('id')
      table.string('name')
      table.string('address')
         table.string('description')
            table.string('Reviews')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Restaurents').then(function () {
    console.log('Restaurents table were dropped')
  })
};
