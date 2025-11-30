// const Attendance = require("../models/Attendance");

// exports.checkIn = async (req, res) => {
//   const today = new Date().toISOString().split("T")[0];

//   const already = await Attendance.findOne({
//     where: { userId: req.user.id, date: today }
//   });

//   if (already) return res.json({ message: "Already checked in today" });

//   const record = await Attendance.create({
//     userId: req.user.id,
//     date: today,
//     checkInTime: new Date().toLocaleTimeString(),
//     status: "present"
//   });

//   res.json(record);
// };

// exports.checkOut = async (req, res) => {
//   const today = new Date().toISOString().split("T")[0];

//   const record = await Attendance.findOne({
//     where: { userId: req.user.id, date: today }
//   });

//   if (!record) return res.json({ message: "Not checked in" });

//   record.checkOutTime = new Date().toLocaleTimeString();
//   record.totalHours = 8; // simple
//   await record.save();

//   res.json(record);
// };

// const Attendance = require("../models/Attendance");

// exports.checkIn = async (req, res) => {
//   const today = new Date().toISOString().split("T")[0];

//   const already = await Attendance.findOne({
//     where: { userId: req.user.id, date: today }
//   });

//   if (already) return res.json({ message: "Already checked in today" });

//   const record = await Attendance.create({
//     userId: req.user.id,
//     date: today,
//     checkInTime: new Date(),
//     status: "present"
//   });

//   res.json(record);
// };

// exports.checkOut = async (req, res) => {
//   const today = new Date().toISOString().split("T")[0];

//   const record = await Attendance.findOne({
//     where: { userId: req.user.id, date: today }
//   });

//   if (!record) return res.json({ message: "Not checked in" });

//   record.checkOutTime = new Date();
//   await record.save();

//   res.json(record);
// };

// // ⭐ NEW FUNCTION
// exports.getMyHistory = async (req, res) => {
//   try {
//     const history = await Attendance.findAll({
//       where: { userId: req.user.id },
//       order: [["date", "DESC"]],
//     });

//     res.json(history);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// exports.getAllAttendance = async (req, res) => {
//   try {
//     const records = await Attendance.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ["name", "employeeId", "department"],
//         }
//       ],
//       order: [["date", "DESC"]],
//     });

//     res.json(records);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Server error" });
//   }
// };

const Attendance = require("../models/Attendance");
const User = require("../models/User");

exports.checkIn = async (req, res) => {
  const today = new Date().toISOString().split("T")[0];

  const already = await Attendance.findOne({
    where: { userId: req.user.id, date: today }
  });

  if (already) return res.json({ message: "Already checked in today" });

  const record = await Attendance.create({
    userId: req.user.id,
    date: today,
    checkInTime: new Date(),
    status: "present"
  });

  res.json(record);
};

exports.checkOut = async (req, res) => {
  const today = new Date().toISOString().split("T")[0];

  const record = await Attendance.findOne({
    where: { userId: req.user.id, date: today }
  });

  if (!record) return res.json({ message: "Not checked in" });

  record.checkOutTime = new Date();
  await record.save();

  res.json(record);
};

exports.getMyHistory = async (req, res) => {
  try {
    const history = await Attendance.findAll({
      where: { userId: req.user.id },
      order: [["date", "DESC"]],
    });

    res.json(history);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

// ⭐ THIS WAS MISSING — Manager route function
exports.getAllAttendance = async (req, res) => {
  try {
    const records = await Attendance.findAll({
      include: [
        {
          model: User,
          attributes: ["name", "employeeId", "department"],
        }
      ],
      order: [["date", "DESC"]],
    });

    res.json(records);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};


