import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  Typography,
  Grid,
  CircularProgress,
} from "@mui/material";
import api from "../../api/axios";
import { useUserStore } from "../../store/userStore";
import AppShell from "../../layout/AppShell";

function EmployeeDashboard() {
  const user = useUserStore((state) => state.user);
  const token = useUserStore((state) => state.token);

  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  // Fetch recent attendance
  const fetchAttendance = async () => {
    try {
      const res = await api.get("/attendance/my-history", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setHistory(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAttendance();
  }, []);

  // Handle Check-In
const handleCheckIn = async () => {
  try {
    setLoading(true);

    const res = await api.post(
      "/attendance/checkin",
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );

    alert("You checked in!"); // <-- Add this line

    fetchAttendance();
  } catch (err) {
    alert(err?.response?.data?.message || "Check-in failed");
  } finally {
    setLoading(false);
  }
};


  // Handle Check-Out
const handleCheckOut = async () => {
  try {
    setLoading(true);

    const res = await api.post(
      "/attendance/checkout",
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );

    alert("You checked out!"); // <-- Add this line

    fetchAttendance();
  } catch (err) {
    alert(err?.response?.data?.message || "Check-out failed");
  } finally {
    setLoading(false);
  }
};


  return (
    <AppShell>
      <Typography variant="h4" fontWeight={700} mb={3}>
        Welcome, {user?.name}
      </Typography>

      {/* --- Cards --- */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight={600}>
              Quick Actions
            </Typography>

            <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
              <Button
                variant="contained"
                color="primary"
                sx={{ flex: 1, py: 1.3 }}
                onClick={handleCheckIn}
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : "Check In"}
              </Button>

              <Button
                variant="outlined"
                color="primary"
                sx={{ flex: 1, py: 1.3 }}
                onClick={handleCheckOut}
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : "Check Out"}
              </Button>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={8}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight={600} mb={2}>
              Recent Attendance
            </Typography>

            <Box sx={{ maxHeight: 250, overflowY: "auto" }}>
              {history.length === 0 ? (
                <Typography>No attendance data found.</Typography>
              ) : (
                history.slice(0, 5).map((h, i) => (
                  <Box
                    key={i}
                    sx={{
                      borderBottom: "1px solid #eee",
                      py: 1.5,
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography>
                      {new Date(h.date).toLocaleDateString()}
                    </Typography>
                    <Typography>
                      {h.checkInTime ? new Date(h.checkInTime).toLocaleTimeString() : "--"}
                      {"  /  "}
                      {h.checkOutTime ? new Date(h.checkOutTime).toLocaleTimeString() : "--"}
                    </Typography>
                  </Box>
                ))
              )}
            </Box>
          </Card>
        </Grid>
      </Grid>
    </AppShell>
  );
}

export default EmployeeDashboard;

