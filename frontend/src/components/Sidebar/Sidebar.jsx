import React from "react";
import { Box, List, ListItemButton, ListItemText, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Sidebar({ role }) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: 240,
        height: "100vh",
        borderRight: "1px solid #eee",
        bgcolor: "#fff",
        p: 2,
        position: "fixed",
      }}
    >
      <List>
        <ListItemButton onClick={() => navigate("/employee")}>
          <ListItemText primary="Employee Dashboard" />
        </ListItemButton>

        <ListItemButton onClick={() => navigate("/attendance-history")}>
          <ListItemText primary="Attendance History" />
        </ListItemButton>

        {role === "manager" && (
          <>
            <Divider sx={{ my: 2 }} />
            <ListItemButton onClick={() => navigate("/manager")}>
              <ListItemText primary="Manager Dashboard" />
            </ListItemButton>
          </>
        )}
      </List>
    </Box>
  );
}

export default Sidebar;
