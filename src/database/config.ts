require('dotenv').config()


module.exports = {
    development: {
       dialect: 'postgres',
       host: 'localhost',
       port: 5432,
       username: process.env.USERNAME,
       password: process.env.PASSWORD,
       database: process.env.DATABASE,
    },
    test: {
       dialect: 'postgres',
       host: 'localhost',
       port: 5432,
       username: 'usern',
       password: 'psswd',
       database: 'test',
    },
    production: {
       dialect: 'postgres',
       host: 'localhost',
       port: 5432,
       username: 'usern',
       password: 'psswd',
       database: 'prod',
    },
 }