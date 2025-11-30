import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useUserStore } from "../../store/userStore";

function Navbar() {
  const logout = useUserStore((state) => state.logout);

  return (
    <AppBar position="sticky" elevation={0} color="inherit" sx={{ borderBottom: 1, borderColor: "#eee" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 600 }}>
          Employee Attendance System
        </Typography>

        <Button 
          variant="contained" 
          color="primary"
          onClick={logout}
          sx={{ textTransform: "none", borderRadius: 2 }}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
