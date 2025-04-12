// import { useState } from 'react'
import { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Login from "./Pages/auth/Login";
import Registeration from './Pages/auth/Registeration'
import { getUsers } from "./Utils/config";
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
      <div className="container">
        {/* <Login /> */}
        {/* <Registeration /> */}
        {/* <DashboardLayoutBasic /> */}
        hello
      </div>
    </>
  );
}

export default App
