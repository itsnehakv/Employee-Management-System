import React, { useEffect, useState } from "react";
import { listEmployees } from "../Services/EmployeeService";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { deleteEmployeeById } from "../Services/EmployeeService";
import Swal from "sweetalert2";
function ListEmployeesComponent() {
  const [employees, setEmployee] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.id.toString().includes(searchTerm)
  );

  function getAllEmployees() {
    setLoading(true);

    listEmployees()
      .then((response) => {
        setEmployee(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }
  function addNewEmployee() {
    navigate("/add-employee");
  }

  function updateEmployee(id) {
    navigate(`/edit-employee/${id}`);
  }

  function removeEmployee(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "This employee will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#505081",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteEmployeeById(id)
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Deleted!",
              text: "Employee has been deleted.",
              confirmButtonColor: "#505081",
            });

            getAllEmployees(); // refresh list
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "Failed to delete employee",
            });
          });
      }
    });
  }

  return (
    <div className="max-w-13xl mx-auto px-6 py-6">
      {loading ? (
        // Spinner
        <div className="flex justify-center items-center py-10">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : employees.length === 0 ? (
        // Empty state
        <p className="text-gray-500 text-center py-10 josefin-sans-link">
          No employees yet.
        </p>
      ) : (
        <>
          <br />
          <h2 className="text-center playwrite-us-modern">Staff Roster</h2>
          <hr></hr>
          <div className="flex items-center justify-between mb-4">
            <button
              className="bg-[#505081] text-white px-4 py-2 mb-2 rounded josefin-sans-link hover:bg-blue-500/30 transition"
              onClick={addNewEmployee}
            >
              Add Employee
            </button>
            <div style={{ marginBottom: "15px" }}>
              <input
                type="text"
                placeholder="Search employee..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control"
              />
            </div>
            <p className="text-md text-[#272757] mb-2 dark:text-gray-300 josefin-sans-link">
              Total Employees:
              <span className="font-semibold">{employees.length}</span>
            </p>
          </div>

          <table className="min-w-full border border-gray-200 bg-[#272757] text-white rounded-lg overflow-hidden">
            <thead className="sticky top-0 bg-[#272757] text-white">
              <tr className="hover:bg-[#3f3f8d] transition">
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
              {filteredEmployees.map((employee) => {
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
        </>
      )}
    </div>
  );
}

export default ListEmployeesComponent;
