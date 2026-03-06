import React, { useEffect, useState } from "react";
import { listEmployees } from "../Services/EmployeeService";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { deleteEmployeeById } from "../Services/EmployeeService";

function ListEmployeesComponent() {
  const [employees, setEmployee] = useState([]);

  /* const [state, setState] = useState(initialValue);
state: The current value of the state variable.
setState: A function that allows you to update the value of the state.
initialValue: The initial value of the state when the component first renders.
*/

  useEffect(() => {
    getAllEmployees();
  }, []);
  /*
  - useEffect hook allows you to perform side effects in functional components. 
  - Side effects are operations that run after the component renders; They don’t directly affect the UI.
  - The useEffect hook takes two arguments: a function (the effect) and an optional dependency array.
  - empty array [] as the second argument tells React to run the effect only once — immediately after the component is first rendered.
  */

  const navigate = useNavigate();

  function getAllEmployees() {
    listEmployees()
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employee data:", error);
      });
  }
  function addNewEmployee() {
    navigate("/add-employee");
  }

  function updateEmployee(id) {
    navigate(`/edit-employee/${id}`);
  }

  function removeEmployee(id) {
    console.log("Delete employee with id:", id);

    deleteEmployeeById(id)
      .then((response) => {
        getAllEmployees();
      })
      .catch((error) => {
        console.error("Error deleting employee:", error);
      });
  }

  return (
    <div className="max-w-13xl mx-auto px-6 py-6">
      <br />
      <h2 className="text-center playwrite-us-modern">Staff Roster</h2>
      <hr></hr>
      <button
        className="bg-[#505081] text-white px-4 py-2 mb-2 rounded josefin-sans-link hover:bg-blue-600"
        onClick={addNewEmployee}
      >
        Add Employee
      </button>
      <table className="min-w-full border border-gray-200 bg-[#272757] text-white rounded-lg overflow-hidden">
        <thead className="bg-[#272757] text-white">
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone No</th>
            <th>Date of Birth</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            console.log(employee.dob, employee.dept);

            return (
              <tr
                key={employee.id}
                className="odd:bg-[#2f2f6b] even:bg-[#3a3a82] hover:bg-blue-500/30 transition"
              >
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.phoneno}</td>
                <td>{employee.dob}</td>
                <td>{employee.dept}</td>
                <td className="px-4 py-2">
                  <div className="flex gap-2">
                    <button
                      className="bg-[#5757db] text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600 transition shadow-sm"
                      onClick={() => updateEmployee(employee.id)}
                    >
                      Update
                    </button>

                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600 transition shadow-sm"
                      onClick={() => removeEmployee(employee.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
}

export default ListEmployeesComponent;
