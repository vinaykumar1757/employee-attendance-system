// const { DataTypes } = require("sequelize");
// const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING, // employee / manager
    allowNull: false,
  },
  employeeId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  department: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

// ⭐ Association (User → Attendances)
// const Attendance = require("./Attendance");
// User.hasMany(Attendance, { foreignKey: "userId" });
// Attendance.belongsTo(User, { foreignKey: "userId" });

module.exports = User;


