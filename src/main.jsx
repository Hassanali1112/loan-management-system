import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./Pages/auth/Login.jsx";
import Registeration from "./Pages/auth/Registeration.jsx";

import LoanRequest from "./Pages/loan/LoanRequest.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./Pages/Profile.jsx";
import MultiStepLoanForm from "./Pages/MultiStepForm.jsx";
import LoanHistory from "./Pages/LoanHistory.jsx";
import AdminPanel from "./Pages/AdminPanel.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<Registeration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/loanrequest" element={<MultiStepLoanForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/loanhistory" element={<LoanHistory />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
