// configuracion de la DB
require("dotenv").config();
const Sequelize = require("sequelize");
const db = new Sequelize(
  process.env.DB_NAME,
  "ecommerce_mlf2",
  "4AG9jj84HuYoQcePBAYdDJIdVHCpTIvh",
  {
    host: "localhost",
    dialect: "postgres",
    logging: false,
  }
);

module.exports = db;
