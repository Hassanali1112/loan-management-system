// import { useState } from 'react'
import { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Login from "./Pages/auth/Login";
import Registeration from './Pages/auth/Registeration'
import { getUsers } from "./Utils/config";
import { Link } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";

// import DashboardLayoutBasic from "./Components/Dashboard/Dashboard";

function App() {
  // const [count, setCount] = useState(0)


  useEffect(()=>{
    async function getData() {
      const response = await getUsers();
      console.log(response);
    }
    getData()
  },[]) 

  return (
    <>
     <Dashboard />
    </>
  );
}

export default App
