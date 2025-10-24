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
    navigate(`/edit-employee/${id}`); //note the backticks `` , because of variable id
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
    <div className="container">
      <h2 className="text-center table-heading-style">Staff Roster</h2>
      <button className="btn btn-info mb-2" onClick={addNewEmployee}>
        Add Employee
      </button>
      <table className="table table-striped table-info">
        <thead>
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
            console.log(employee.dob, employee.dept); // <-- here

            return (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.phoneno}</td>
                <td>{employee.dob}</td>
                <td>{employee.dept}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => updateEmployee(employee.id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger"
                    style={{ marginLeft: "10px" }}
                    onClick={() => removeEmployee(employee.id)}
                  >
                    Delete
                  </button>
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
