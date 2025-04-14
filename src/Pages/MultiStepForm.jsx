import React, { useState } from "react";
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

const steps = ["Loan Details", "Loan Purpose", "Financial Info"];

const validationSchemas = [
  Yup.object({
    name: Yup.string().required("Full name is required"),
    amount: Yup.number()
      .typeError("Must be a number")
      .required("Amount is required"),
  }),
  Yup.object({
    duration: Yup.number()
      .typeError("Must be a number")
      .required("Duration is required"),
    purpose: Yup.string().required("Purpose is required"),
  }),
  Yup.object({
    income: Yup.number()
      .typeError("Must be a number")
      .required("Income is required"),
  }),
];

const initialValues = {
  name: "",
  amount: "",
  duration: "",
  purpose: "",
  income: "",
};

const MultiStepLoanForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const isLastStep = activeStep === steps.length - 1;

  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      console.log("Submitted Data:", values);
      actions.setSubmitting(false);
      // TODO: Send to Supabase or backend
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
          <Field
            as={TextField}
            fullWidth
            name="income"
            label="Monthly Income"
            margin="normal"
            helperText={<ErrorMessage name="income" />}
            error={<ErrorMessage name="income" /> ? true : false}
          />
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
