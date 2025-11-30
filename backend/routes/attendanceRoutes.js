// const express = require("express");
// const router = express.Router();
// const auth = require("../middleware/auth");
// const { checkIn, checkOut } = require("../controllers/attendanceController");

// router.post("/checkin", auth, checkIn);
// router.post("/checkout", auth, checkOut);

// module.exports = router;

// const express = require("express");
// const router = express.Router();
// const auth = require("../middleware/auth");
// const { checkIn, checkOut, getMyHistory } = require("../controllers/attendanceController");

// router.post("/checkin", auth, checkIn);
// router.post("/checkout", auth, checkOut);
// router.get("/my-history", auth, getMyHistory); // <-- ADD THIS

// module.exports = router;

// const express = require("express");
// const router = express.Router();
// const auth = require("../middleware/auth");

// const {
//   checkIn,
//   checkOut,
//   getMyHistory,
//   getAllAttendance,
// } = require("../controllers/attendanceController");

// router.post("/checkin", auth, checkIn);
// router.post("/checkout", auth, checkOut);
// router.get("/my-history", auth, getMyHistory);

// // ⭐ Manager route
// router.get("/all", auth, getAllAttendance);

// module.exports = router;

const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const {
  checkIn,
  checkOut,
  getMyHistory,
  getAllAttendance
} = require("../controllers/attendanceController");

router.post("/checkin", auth, checkIn);
router.post("/checkout", auth, checkOut);
router.get("/my-history", auth, getMyHistory);

// ⭐ Manager route (must exist)
router.get("/all", auth, getAllAttendance);

module.exports = router;




