const Sequelize = require("sequelize");

const sequelize = new Sequelize("moviefy", "postgres", "lalalala.", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize;