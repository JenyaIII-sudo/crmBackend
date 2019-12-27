const Sequelize = require("sequelize");
require("dotenv").config();
const dataBase = process.env.DB_DATABASE;
const dbUser = process.env.DB_USER;
const dbUserPass = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;

module.exports = new Sequelize(dataBase, dbUser, dbUserPass, {
  host: dbHost,
  dialect: "postgres",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
