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
} from "@mui/material";
import api from "../../api/axios";
import { useUserStore } from "../../store/userStore";
import AppShell from "../../layout/AppShell";

function AttendanceHistory() {
  const token = useUserStore((state) => state.token);
  const [history, setHistory] = useState([]);

  const fetchHistory = async () => {
    try {
      const res = await api.get("/attendance/my-history", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setHistory(res.data);
    } catch (err) {
      console.log(err);
      alert("Failed to load attendance history");
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <AppShell>
      <Typography variant="h4" fontWeight={700} mb={3}>
        Attendance History
      </Typography>

      <Card sx={{ p: 3 }}>
        <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Date</strong></TableCell>
                <TableCell><strong>Check-In</strong></TableCell>
                <TableCell><strong>Check-Out</strong></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {history.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    No data found
                  </TableCell>
                </TableRow>
              ) : (
                history.map((item, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      {new Date(item.date).toLocaleDateString()}
                    </TableCell>

                    <TableCell>
                      {item.checkInTime
                        ? new Date(item.checkInTime).toLocaleTimeString()
                        : "--"}
                    </TableCell>

                    <TableCell>
                      {item.checkOutTime
                        ? new Date(item.checkOutTime).toLocaleTimeString()
                        : "--"}
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

export default AttendanceHistory;

