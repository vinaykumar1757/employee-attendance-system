// const { Sequelize } = require("sequelize");
// const pg = require("pg");

// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//   dialect: "postgres",
//   dialectModule: pg,
//   protocol: "postgres",
//   logging: false,
// });

// module.exports = sequelize;

require("dotenv").config();
const { Sequelize } = require("sequelize");
const pg = require("pg");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectModule: pg,
  logging: false,
});

module.exports = sequelize;






