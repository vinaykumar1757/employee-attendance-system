import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import api from "../../api/axios";
import { useUserStore } from "../../store/userStore";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);
  const setToken = useUserStore((state) => state.setToken);

  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async () => {
    try {
      setLoading(true);
      const res = await api.post("/auth/login", form);

      setUser(res.data.user);
      setToken(res.data.token);

      if (res.data.user.role === "manager") {
        navigate("/manager");
      } else {
        navigate("/employee");
      }
    } catch (err) {
      alert(err?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: "#f3f4f6",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          width: 380,
          p: 4,
          borderRadius: 4,
          boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
        }}
      >
        <Typography variant="h5" fontWeight={700} textAlign="center" mb={3}>
          Login
        </Typography>

        <TextField
          fullWidth
          label="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          sx={{ mb: 3 }}
        />

        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ py: 1.4, borderRadius: 2 }}
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? <CircularProgress size={26} color="inherit" /> : "Login"}
        </Button>

        <Typography
          textAlign="center"
          mt={2}
          sx={{ cursor: "pointer" }}
          onClick={() => navigate("/register")}
        >
          Don’t have an account? Register
        </Typography>
      </Card>
    </Box>
  );
}

export default Login;
