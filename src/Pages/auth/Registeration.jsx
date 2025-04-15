import React, { useState, useEffect } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { supabase } from "../../Utils/config";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// import "./auth.css";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [number, setNumber] = useState("");

  const fields = [
    {
      type: "text",
      value: name,
      update: setName,
      label: "Full Name",
      id: "nameInput",
    },
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
    {
      type: "password",
      value: confPassword,
      update: setConfPassword,
      label: "Confirm Password",
      id: "confPasswordInput",
    },
    {
      type: "number",
      value: number,
      update: setNumber,
      label: "Phone Number",
      id: "numberInput",
    },
  ];
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

  const submitHandler = async (event) => {
    event.preventDefault();

    let nameRegex = /^[A-Za-z]+ [A-Za-z]+$/;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let numberRegex = /^(?:\+92|0092|92|0)?3[0-9]{9}$/;

    if (
      nameRegex.test(name) &&
      emailRegex.test(email) &&
      passwordRegex.test(password) &&
      password === confPassword &&
      numberRegex.test(number)
    ) {
      try {
        const { data, error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;

        if (data) {
          await supabase
            .from("users")
            .insert({ name, email, password, number })
            .select();

          Swal.fire("Kindly confirm your email!");
          navigate("/login");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <Container variant={"paper"} maxWidth="sm" sx={{ marginTop: 5 }}>
      <Paper elevation={3} sx={{ padding: 3, border: "1px solid gray" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Sign Up
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
              color="success"
              type="submit"
              size="large"
              fullWidth
            >
              Sign Up
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default Registration;
