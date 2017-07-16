// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dbSetup.sqlite3'
    }
  },
  production: {
    client: 'postgresql',
<<<<<<< HEAD
    connection: process.env.HEROKU_POSTGRESQL_CHARCOAL_URL,
=======
    connection: process.env.DATABASE_URL,
>>>>>>> e1534478a2f7b381d289a3614df62bb90c55dc71

        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },
 // the directory your migration files are located in
  directory: __dirname + '/migrations',

  // this table will be populated with some information about your
  // migration files.  it will be automatically created, if it
  // doesn't already exist.
  tableName: 'migrations'
};

