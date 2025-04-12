import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './Pages/auth/Login.jsx'
import Registeration from './Pages/auth/Registeration.jsx'
import UserDashboard from './Pages/userpages/UserDashboard.jsx'
import LoanRequest from './Pages/loan/LoanRequest.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter >
    <Routes >
      <Route path='/' element={<App />} />
      <Route path='/signup' element={<Registeration />} />
      <Route path='/login' element={<Login />} />
      <Route path='/userdashboard' element={<UserDashboard />} />
      <Route path='/loanrequest' element={<LoanRequest />} />

    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
