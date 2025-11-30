import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from "@mui/material";
import api from "../../api/axios";
import { useUserStore } from "../../store/userStore";
import AppShell from "../../layout/AppShell";

function ManagerDashboard() {
  const token = useUserStore((state) => state.token);
  const user = useUserStore((state) => state.user);

  const [attendance, setAttendance] = useState([]);

  const fetchAllAttendance = async () => {
    try {
      const res = await api.get("/attendance/all", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAttendance(res.data);
    } catch (err) {
      console.log(err);
      alert("Failed to load team attendance");
    }
  };

  useEffect(() => {
    fetchAllAttendance();
  }, []);

  return (
    <AppShell>
      <Typography variant="h4" fontWeight={700} mb={3}>
        Manager Dashboard
      </Typography>

      <Typography variant="h6" fontWeight={500} mb={2}>
        Team Attendance Overview
      </Typography>

      <Card sx={{ p: 3 }}>
        <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Name</strong></TableCell>
                <TableCell><strong>Employee ID</strong></TableCell>
                <TableCell><strong>Date</strong></TableCell>
                <TableCell><strong>Check-In</strong></TableCell>
                <TableCell><strong>Check-Out</strong></TableCell>
                <TableCell><strong>Status</strong></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {attendance.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    No attendance records found
                  </TableCell>
                </TableRow>
              ) : (
                attendance.map((a, i) => (
                  <TableRow key={i}>
                    {/* FIXED: CAPITAL User */}
                    <TableCell>{a.User?.name || "Unknown"}</TableCell>
                    <TableCell>{a.User?.employeeId || "--"}</TableCell>

                    <TableCell>
                      {new Date(a.date).toLocaleDateString()}
                    </TableCell>

                    <TableCell>
                      {a.checkInTime
                        ? new Date(a.checkInTime).toLocaleTimeString()
                        : "--"}
                    </TableCell>

                    <TableCell>
                      {a.checkOutTime
                        ? new Date(a.checkOutTime).toLocaleTimeString()
                        : "--"}
                    </TableCell>

                    <TableCell>
                      <Chip
                        label={
                          a.checkInTime
                            ? a.checkOutTime
                              ? "Completed"
                              : "Active"
                            : "Not Started"
                        }
                        color={
                          a.checkInTime
                            ? a.checkOutTime
                              ? "success"
                              : "warning"
                            : "error"
                        }
                      />
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </AppShell>
  );
}

export default ManagerDashboard;

