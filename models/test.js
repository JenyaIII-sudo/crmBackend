const Sequelize = require("sequelize");
const database = require("../config/database");

const test = database.define("test", {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  skype: {
    type: Sequelize.STRING
  },
  telephone: {
    type: Sequelize.STRING
  },
  status: {
    type: Sequelize.STRING
  },
  createdAt: {
    type: Sequelize.DATE
  },
  updatedAt: {
    type: Sequelize.DATE
  }
});

module.exports = test;
