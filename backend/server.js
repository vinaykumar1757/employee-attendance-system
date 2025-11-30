// require("dotenv").config();       // MUST BE FIRST

// const express = require("express");
// const cors = require("cors");
// const sequelize = require("./config/db");

// const app = express();
// app.use(express.json());
// app.use(cors());

// app.use("/api/auth", require("./routes/authRoutes"));
// app.use("/api/attendance", require("./routes/attendanceRoutes"));

// sequelize.sync().then(() => {
//   console.log("Database synced");
//   app.listen(5000, () => console.log("Server running on port 5000"));
// });

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const sequelize = require("./config/db");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// ⭐ Load models + associations
require("./models");

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/attendance", require("./routes/attendanceRoutes"));

sequelize.sync().then(() => {
  console.log("Database synced");
  app.listen(5000, () => console.log("Server running on port 5000"));
});

