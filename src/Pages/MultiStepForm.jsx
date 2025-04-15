import React, { useState } from "react";
import { supabase } from "../Utils/config";
import {
  Box,
  Button,
  TextField,
  Typography,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Sidebar from "../components/Sidebar";

import Swal from "sweetalert2";

const steps = ["Personal Details", "Loan Details", "Employment Details"];

const validationSchemas = [
  // Step 0 - Personal Details
  Yup.object({
    name: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    cnic: Yup.string()
      .matches(/^[0-9]{13}$/, "CNIC must be 13 digits")
      .required("CNIC is required"),
    amount: Yup.number()
      .typeError("Must be a number")
      .required("Amount is required"),
  }),

  // Step 1 - Loan Details
  Yup.object({
    duration: Yup.number()
      .typeError("Must be a number")
      .required("Duration is required"),
    purpose: Yup.string().required("Purpose is required"),
  }),

  // Step 2 - Employment Details
  Yup.object({
    income: Yup.number()
      .typeError("Must be a number")
      .required("Income is required"),
    company: Yup.string().required("Company name is required"),
  }),
];




const initialValues = {
  name: "",
  email : "",
  cnic : "",
  amount: "",
  duration: "",
  purpose: "",
  income: "",
  company :"",
  
};

const MultiStepLoanForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const isLastStep = activeStep === steps.length - 1;

  const handleSubmit = async (values, actions) => {
    if (isLastStep) {
      console.log("Submitted Data:", values);

      try {
        const { data, error } = await supabase
  .from('loans')
  .insert({ name : values.name , email : values.email, cnic : values.cnic, amount : values.amount,
     duration : values.duration, purpose : values.purpose, income : values.income, company : values.company})
  .select()
  if(error){
    throw error
  } else {
    console.log(data)
    Swal.fire("Your request has been submited")
    actions.resetForm();
  }
      } catch (error) {
        console.log(error)
      }

      actions.setSubmitting(false);
      
    } else {
      setActiveStep((prev) => prev + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <>
            <Sidebar />

            <Field
              as={TextField}
              fullWidth
              name="name"
              label="Full Name"
              margin="normal"
             
              helperText={<ErrorMessage name="name" />}
              error={<ErrorMessage name="name" /> ? true : false}
            />
            <Field
              as={TextField}
              fullWidth
              name="email"
              label="Your Email"
              margin="normal"
              
              helperText={<ErrorMessage name="email" />}
              error={<ErrorMessage name="email" /> ? true : false}
            />
            <Field
              as={TextField}
              fullWidth
              name="cnic"
              label="CNIC No"
              margin="normal"
             
              helperText={<ErrorMessage name="cnic" />}
              error={<ErrorMessage name="cnic" /> ? true : false}
            />
            <Field
              as={TextField}
              fullWidth
              name="amount"
              label="Loan Amount"
              margin="normal"
              
              helperText={<ErrorMessage name="amount" />}
              error={<ErrorMessage name="amount" /> ? true : false}
            />
          </>
        );
      case 1:
        return (
          <>
            <Sidebar />

            <Field
              as={TextField}
              fullWidth
              name="duration"
              label="Loan Duration (months)"
              margin="normal"
            
              helperText={<ErrorMessage name="duration" />}
              error={<ErrorMessage name="duration" /> ? true : false}
            />
            <Field
              as={TextField}
              fullWidth
              name="purpose"
              label="Purpose of Loan"
              margin="normal"
           
              helperText={<ErrorMessage name="purpose" />}
              error={<ErrorMessage name="purpose" /> ? true : false}
            />
          </>
        );
      case 2:
        return (
          <>
            <Sidebar />

            <Field
              as={TextField}
              fullWidth
              name="income"
              label="Monthly Income"
              margin="normal"
              
              helperText={<ErrorMessage name="income" />}
              error={<ErrorMessage name="income" /> ? true : false}
            />
            <Field
              as={TextField}
              fullWidth
              name="company"
              label="Company Name"
              margin="normal"
              
              helperText={<ErrorMessage name="company" />}
              error={<ErrorMessage name="company" /> ? true : false}
            />
          </>
        );

      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: "auto",
        mt: 5,
        p: 4,
        boxShadow: 4,
        borderRadius: 3,
      }}
    >
      <Typography variant="h5" mb={3} textAlign="center">
        New Loan Request
      </Typography>

      <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchemas[activeStep]}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {renderStepContent()}

            <Box mt={4} display="flex" justifyContent="space-between">
              {activeStep > 0 && (
                <Button variant="outlined" onClick={handleBack}>
                  Back
                </Button>
              )}
              <Button
                variant="contained"
                color={isLastStep ? "success" : "primary"}
                type="submit"
                disabled={isSubmitting}
              >
                {isLastStep ? "Submit" : "Next"}
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default MultiStepLoanForm;
