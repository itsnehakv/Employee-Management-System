import { useState, useEffect } from "react";
import "./App.css";
import ListEmployeesComponent from "./Components/ListEmployeesComponent";
import { HeaderComponent } from "./Components/HeaderComponent";
import { FooterComponent } from "./Components/FooterComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EmployeeComponent } from "./Components/EmployeeComponent";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Save mode from local storage on initial load
  useEffect(() => {
    const saved = localStorage.getItem("darkMode") === "true";
    setDarkMode(saved);
  }, []);

  // Save mode whenever it changes
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div
      className={`flex flex-col min-h-screen transition-colors duration-300
    ${darkMode ? "dark bg-gray-900 text-white" : "bg-[#8686AC] text-black"}`}
    >
      <BrowserRouter>
        <div
          className={`min-h-screen transition-colors duration-300
      ${darkMode ? "dark bg-gray-900 text-white" : "bg-[#8686AC] text-black"}`}
        >
          <HeaderComponent darkMode={darkMode} setDarkMode={setDarkMode} />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<ListEmployeesComponent />} />
              <Route path="/employees" element={<ListEmployeesComponent />} />
              <Route path="/add-employee" element={<EmployeeComponent />} />
              <Route
                path="/edit-employee/:id"
                element={<EmployeeComponent />}
              />
            </Routes>
          </div>

          <FooterComponent />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
