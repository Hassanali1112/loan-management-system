import React, { useState, useEffect } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { supabase } from "../../Utils/config";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSession();
  });

  const fields = [
    {
      type: "email",
      value: email,
      update: setEmail,
      label: "Email",
      id: "emailInput",
    },
    {
      type: "password",
      value: password,
      update: setPassword,
      label: "Password",
      id: "passwordInput",
    },
  ];

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const { data, error } = await supabase.auth.getSession();

      if (data) {
        const { data: userData, error: userDataError } = await supabase
          .from("users")
          .select()
          .eq("email", email);
        if (userData) {
          const activeUser = {
            name: userData[0].name,
            email: userData[0].email,
            number: userData[0].number,
          };
          localStorage.setItem("activeUser", JSON.stringify(activeUser));
        } else {
          console.log(userDataError);
        }
        window.location.assign("/dashboard");
      } else {
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 5 }}>
      <Paper elevation={3} sx={{ padding: 3, border: "1px solid gray" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={submitHandler}>
          {fields.map((field, index) => (
            <TextField
              key={index}
              label={field.label}
              type={field.type}
              value={field.value}
              onChange={(e) => field.update(e.target.value)}
              fullWidth
              margin="normal"
              required
            />
          ))}
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              size="large"
              fullWidth
            >
              Login
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
