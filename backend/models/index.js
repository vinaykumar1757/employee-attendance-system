const User = require("./User");
const Attendance = require("./Attendance");

// ⭐ DEFINE ASSOCIATIONS HERE (not inside models)
User.hasMany(Attendance, { foreignKey: "userId" });
Attendance.belongsTo(User, { foreignKey: "userId" });

module.exports = { User, Attendance };
