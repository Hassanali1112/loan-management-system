import React, { useState, useEffect } from "react";
import { Box, Button, Typography, Container, Paper, Grid } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { supabase } from "./Utils/config";

const App = () => {
  const [isSignInActive, setIsSignInActive] = useState(true);
  const navigate = useNavigate();

  const getSession = async () => {
    try {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        throw error;
      } else {
        console.log(data);
        if (data.session) {
          console.log("session");
          navigate("/dashboard");
        } else {
          navigate("/")
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSession();
  });

  const handleTabChange = (tab) => {
    if (tab === "/login") {
      setIsSignInActive(true);
      navigate("/login");
    } else {
      setIsSignInActive(false);
      navigate("/signup");
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ mt: 10 }}>
      <Paper
        sx={{ padding: 4, borderRadius: 3, boxShadow: 3, textAlign: "center" }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
          Loan Management
        </Typography>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Simple. Fast. Secure.
        </Typography>

        <Typography variant="body2" sx={{ mb: 4, color: "text.secondary" }}>
          Manage your loans with ease. Get started today.
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
          <Button
            variant="contained"
            color={isSignInActive ? "success" : "info"}
            sx={{ width: "180px", marginRight: 2, fontSize: "16px" }}
            onClick={() => handleTabChange("/login")}
          >
            Sign In
          </Button>
          <Button
            variant="contained"
            color={isSignInActive ? "info" : "success"}
            sx={{ width: "180px", fontSize: "16px" }}
            onClick={() => handleTabChange("/signup")}
          >
            Sign Up
          </Button>
        </Box>

        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} display={isSignInActive ? "block" : "none"}>
            <Typography variant="body2">
              New to Loan Management?{" "}
              <RouterLink
                to="/signup"
                style={{ color: "#1976d2", textDecoration: "none" }}
              >
                Sign up here
              </RouterLink>
            </Typography>
          </Grid>

          <Grid item xs={12} display={!isSignInActive ? "block" : "none"}>
            <Typography variant="body2">
              Already have an account?{" "}
              <RouterLink
                to="/signin"
                style={{ color: "#1976d2", textDecoration: "none" }}
              >
                Sign in here
              </RouterLink>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default App;
