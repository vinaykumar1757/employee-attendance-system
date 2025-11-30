// const { DataTypes } = require("sequelize");
// const sequelize = require("../config/db");
// const User = require("./User");

// const Attendance = sequelize.define("Attendance", {
//   date: DataTypes.STRING,
//   checkInTime: DataTypes.STRING,
//   checkOutTime: DataTypes.STRING,
//   status: DataTypes.STRING,
//   totalHours: DataTypes.FLOAT,
// });

// Attendance.belongsTo(User, { foreignKey: "userId" });

// module.exports = Attendance;

// const { DataTypes } = require("sequelize");
// const sequelize = require("../config/db");

// const Attendance = sequelize.define("Attendance", {
//   userId: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   date: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   checkInTime: {
//     type: DataTypes.DATE,   // <-- FIXED
//     allowNull: true,
//   },
//   checkOutTime: {
//     type: DataTypes.DATE,   // <-- FIXED
//     allowNull: true,
//   },
//   status: {
//     type: DataTypes.STRING,
//     defaultValue: "present",
//   },
//   totalHours: {
//     type: DataTypes.FLOAT,
//     allowNull: true,
//   }
// });

// module.exports = Attendance;

const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Attendance = sequelize.define("Attendance", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  checkInTime: {
    type: DataTypes.DATE,   // Correct type
    allowNull: true,
  },
  checkOutTime: {
    type: DataTypes.DATE,   // Correct type
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "present",
  },
  totalHours: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
});

// ⭐ Association (Attendance → User)
// const User = require("./User");
// Attendance.belongsTo(User, { foreignKey: "userId" });
// User.hasMany(Attendance, { foreignKey: "userId" });

module.exports = Attendance;


