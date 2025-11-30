import React from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { useUserStore } from "../store/userStore";

function AppShell({ children }) {
  const user = useUserStore((state) => state.user);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* TOP NAVBAR */}
      <Navbar />

      {/* MAIN BODY (SIDEBAR + CONTENT) */}
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        {/* SIDEBAR */}
        <Sidebar role={user?.role} />

        {/* PAGE CONTENT */}
        <Box sx={{ flexGrow: 1, ml: "240px", p: 3 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default AppShell;

