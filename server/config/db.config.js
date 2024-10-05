require('dotenv').config();

module.exports = {
    development: {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    dialect: "postgres",
    logging: true,
    pool: {
      max: 5,
      min: 0,
      acquire: 60000,
      idle: 10000
    }
  },
  production: {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    dialect: "postgres",
    logging: true,
    pool: {
      max: 5,
      min: 0,
      acquire: 60000,
      idle: 10000
    }
  }
}