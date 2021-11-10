module.exports = {
    development: {
       dialect: 'postgres',
       host: 'localhost',
       port: 5432,
       username: 'joefroula',
       password: 'tortuga',
       database: 'users',
    },
    test: {
       dialect: 'postgres',
       host: 'localhost',
       port: 5432,
       username: 'roku',
       password: 'roku',
       database: 'test',
    },
    production: {
       dialect: 'postgres',
       host: 'localhost',
       port: 5432,
       username: 'roku',
       password: 'roku',
       database: 'prod',
    },
 }