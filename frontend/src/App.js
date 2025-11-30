// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// import Login from "./pages/Auth/Login";
// import Register from "./pages/Auth/Register";

// import EmployeeDashboard from "./pages/Employee/Dashboard";
// import AttendanceHistory from "./pages/Employee/AttendanceHistory";
// import ManagerDashboard from "./pages/Manager/Dashboard";

// import { useUserStore } from "./store/userStore";

// function App() {
//   const user = useUserStore((state) => state.user);

//   // Protect pages
//   const PrivateRoute = ({ children }) => {
//     return user ? children : <Navigate to="/" />;
//   };

//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         {/* Employee Routes */}
//         <Route
//           path="/employee"
//           element={
//             <PrivateRoute>
//               <EmployeeDashboard />
//             </PrivateRoute>
//           }
//         />

//         <Route
//           path="/attendance-history"
//           element={
//             <PrivateRoute>
//               <AttendanceHistory />
//             </PrivateRoute>
//           }
//         />

//         {/* Manager Routes */}
//         <Route
//           path="/manager"
//           element={
//             <PrivateRoute>
//               <ManagerDashboard />
//             </PrivateRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// import Login from "./pages/Auth/Login";
// import Register from "./pages/Auth/Register";

// import EmployeeDashboard from "./pages/Employee/Dashboard";
// import AttendanceHistory from "./pages/Employee/AttendanceHistory";

// // ❗ FIXED IMPORT BELOW
// import ManagerDashboard from "./pages/Manager/ManagerDashboard";

// import { useUserStore } from "./store/userStore";

// function App() {
//   const user = useUserStore((state) => state.user);

//   const PrivateRoute = ({ children }) => {
//     return user ? children : <Navigate to="/" />;
//   };

//   return (
//     <Router>
//       <Routes>

//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         <Route
//           path="/employee"
//           element={
//             <PrivateRoute>
//               <EmployeeDashboard />
//             </PrivateRoute>
//           }
//         />

//         <Route
//           path="/attendance-history"
//           element={
//             <PrivateRoute>
//               <AttendanceHistory />
//             </PrivateRoute>
//           }
//         />

//         {/* FIXED MANAGER ROUTE */}
//         <Route
//           path="/manager"
//           element={
//             <PrivateRoute>
//               <ManagerDashboard />
//             </PrivateRoute>
//           }
//         />

//       </Routes>
//     </Router>
//   );
// }

// export default App;



import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

import EmployeeDashboard from "./pages/Employee/Dashboard";
import AttendanceHistory from "./pages/Employee/AttendanceHistory";

// ✔ FIXED: Correct path
import ManagerDashboard from "./pages/Manager/Dashboard";

import { useUserStore } from "./store/userStore";

function App() {
  const user = useUserStore((state) => state.user);

  // Protect pages
  const PrivateRoute = ({ children }) => {
    return user ? children : <Navigate to="/" />;
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Employee Routes */}
        <Route
          path="/employee"
          element={
            <PrivateRoute>
              <EmployeeDashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/attendance-history"
          element={
            <PrivateRoute>
              <AttendanceHistory />
            </PrivateRoute>
          }
        />

        {/* Manager Routes */}
        <Route
          path="/manager"
          element={
            <PrivateRoute>
              <ManagerDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
