import React, { useState } from "react";
import { Box, Button, TextField, Typography, Grid } from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Sidebar from "../components/Sidebar";

const ProfilePage = () => {
  const [userData, setUserData] = useState({
    fullName: "John Doe",
    email: "john.doe@example.com",
    phoneNumber: "+923001234567",
  });

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .matches(
        /^\+92[0-9]{9}$/,
        "Phone number must be in the format +92XXXXXXXXX"
      )
      .required("Phone number is required"),
  });

  const handleSubmit = (values) => {
    // In a real app, this would be an API call to save the data to the server
    console.log("Updated Profile Data:", values);
    setUserData(values); // Update state with the new values
  };

  return (
    <>
    <Sidebar />
      <Box
        sx={{
          border: "1px solid orange",
          maxWidth: 600,
          mx: "auto",
          mt: 5,
          p: 4,
          boxShadow: 3,
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" mb={3} textAlign="center">
          Update Profile
        </Typography>

        <Formik
          initialValues={userData}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    fullWidth
                    name="fullName"
                    label="Full Name"
                    margin="normal"
                    helperText={<ErrorMessage name="fullName" />}
                    error={<ErrorMessage name="fullName" /> ? true : false}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    fullWidth
                    name="email"
                    label="Email"
                    type="email"
                    margin="normal"
                    helperText={<ErrorMessage name="email" />}
                    error={<ErrorMessage name="email" /> ? true : false}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    fullWidth
                    name="phoneNumber"
                    label="Phone Number"
                    margin="normal"
                    helperText={<ErrorMessage name="phoneNumber" />}
                    error={<ErrorMessage name="phoneNumber" /> ? true : false}
                  />
                </Grid>
              </Grid>

              <Box mt={3} display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Update Profile
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default ProfilePage;
