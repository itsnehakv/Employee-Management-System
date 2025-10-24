import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ListEmployeesComponent from "./Components/ListEmployeesComponent";
import { HeaderComponent } from "./Components/HeaderComponent";
import { FooterComponent } from "./Components/FooterComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EmployeeComponent } from "./Components/EmployeeComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* // http://localhost:3000/ or http://localhost:3000/employees */}
          <Route path="/" element={<ListEmployeesComponent />}></Route>
          <Route path="/employees" element={<ListEmployeesComponent />}></Route>

          {/* //button to add employee */}
          <Route path="/add-employee" element={<EmployeeComponent />}></Route>
          <Route
            path="/edit-employee/:id"
            element={<EmployeeComponent />}
          ></Route>
        </Routes>
        <br></br>
        <br></br>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
