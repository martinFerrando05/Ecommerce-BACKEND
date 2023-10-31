// configuracion de la DB
require("dotenv").config();
const Sequelize = require("sequelize");
const db = new Sequelize(
  process.env.DB_NAME,
  "ecommerce_mlf2",
  "4AG9jj84HuYoQcePBAYdDJIdVHCpTIvh",
  {
    host: "dpg-cl0hgrqs1bgc73b7eq1g-a",
    dialect: "postgres",
    logging: false,
  }
);

module.exports = db;
