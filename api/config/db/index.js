// configuracion de la DB
require("dotenv").config();
const Sequelize = require("sequelize");
const db = new Sequelize(
  process.env.DB_NAME,
  "ecommerce_lhbt_user",
  "XBOOJlebMFz3RZljhDYQmqvwfTY9PmeA",
  {
    host: "dpg-cl0iav237rbc73bfhmmg-a",
    dialect: "postgres",
    logging: false,
  }
);

module.exports = db;
