// configuracion de la DB
const Sequelize = require("sequelize");
const db = new Sequelize("ecommerce", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;