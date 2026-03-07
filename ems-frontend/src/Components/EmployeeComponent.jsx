import React, { useEffect, useState } from "react";
import {
  createEmployee,
  getEmployeeById,
  updateEmployeeById,
} from "../Services/EmployeeService";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EmployeeComponent = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [phoneno, setphoneno] = useState("");
  const [dob, setdob] = useState("");
  const [dept, setdept] = useState("");

  //state hook to initialize variables that will hold validate errors
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneno: "",
    dob: "",
    dept: "",
  });

  const navigate = useNavigate();

  //   function handlefirstName(e) {
  //     setfirstName(e.target.value);
  //   }
  // Since fuction has only one statement, we can use arrow function without parentheses and return keyword
  const handlefirstName = (e) => setfirstName(e.target.value); //e-->event

  const handlelastName = (e) => setlastName(e.target.value);

  const handleemail = (e) => setemail(e.target.value);

  const handlephoneNo = (e) => setphoneno(e.target.value);

  const handleDOB = (e) => setdob(e.target.value);

  const handledept = (e) => setdept(e.target.value);

  //-----------------Function To Save or Update Employee Information--------------------------------------

  function SaveOrUpdateEmployee(e) {
    e.preventDefault(); //to prevent the default behavior of the form submission, which is to reload the page.
    if (validateForm()) {
      const employee = {
        firstName,
        lastName,
        email,
        phoneno,
        dob,
        dept,
      }; //This is shorthand. JavaScript allows this when the key name and the variable name are the same.
      console.log(employee);

      if (id) {
        updateEmployeeById(id, employee).then((response) => {
          Swal.fire({
            icon: "success",
            title: "Employee Updated",
            text: "Employee details updated successfully!",
            confirmButtonColor: "#505081",
          }).then(() => {
            navigate("/employees");
          });
        });
      } else {
        createEmployee(employee).then((response) => {
          Swal.fire({
            icon: "success",
            title: "Employee Added",
            text: "Employee added successfully!",
            confirmButtonColor: "#505081",
          }).then(() => {
            navigate("/employees");
          });
        });
      }
    }
  }

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors }; //{...} is spread operator to copy one object to another; errors is state variable
    if (firstName.trim()) {
      errorsCopy.firstName = "";
    } else {
      errorsCopy.firstName = "First Name is required";
      valid = false;
    }
    if (lastName.trim()) {
      errorsCopy.lastName = "";
    } else {
      errorsCopy.lastName = "Last Name is required";
      valid = false;
    }
    if (email.trim()) {
      errorsCopy.email = "";
    } else {
      errorsCopy.email = "Email is required";
      valid = false;
    }
    if (phoneno.trim()) {
      errorsCopy.phoneno = "";
    } else {
      errorsCopy.phoneno = "Phone number is required";
      valid = false;
    }
    if (dob.trim()) {
      errorsCopy.dob = "";
    } else {
      errorsCopy.dob = "Date Of Birth is required";
      valid = false;
    }
    if (dept.trim()) {
      errorsCopy.dept = "";
    } else {
      errorsCopy.dept = "Department is required";
      valid = false;
    }
    setErrors(errorsCopy);

    return valid;
  }

  const { id } = useParams(); //useParams gets id from URL; useParams returns an object with key as parameter name and value as parameter value

  function pageTitle() {
    if (id) {
      return (
        <h2 className="text-2xl font-semibold text-center josefin-sans-link text-gray-800">
          <br />
          Update Employee
        </h2>
      );
    } else {
      return (
        <h2 className="text-2xl font-semibold text-center josefin-sans-link text-gray-800 ">
          <br />
          Add Employee
        </h2>
      );
    }
  }

  useEffect(() => {
    if (id) {
      //if id is present in URL, then only call getEmployeeById
      getEmployeeById(id)
        .then((response) => {
          let employee = response.data;
          setfirstName(employee.firstName);
          setlastName(employee.lastName);
          setemail(employee.email);
          setphoneno(employee.phoneno);
          setdob(employee.dob);
          setdept(employee.dept);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);
  return (
    <div className="flex items-center justify-center py-16">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-6">
        <button
          onClick={() => navigate("/employees")}
          className="text-sm text-[#505081] hover:underline mb-2"
        >
          ← Back to Staff Roster
        </button>
        {pageTitle()}
        <form>
          {/* First Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700  josefin-sans-link">
              First Name :
            </label>
            <input
              type="text"
              placeholder="Enter First Name"
              name="firstName"
              className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
              //is-invalid is from bootstrap; this statement is like if-else
              value={firstName}
              onChange={handlefirstName}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName} </p>
            )}
          </div>

          {/* Last Name */}
          <div className="form-group mb-2">
            <label className="form-label josefin-sans-link text-gray-700">
              Last Name :
            </label>
            <input
              type="text"
              placeholder="Enter Last Name"
              name="lastName"
              className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
              value={lastName}
              onChange={handlelastName}
            />
            {errors.lastName && (
              <div className="invalid-feedback">{errors.lastName} </div>
            )}
          </div>

          {/* Email ID */}
          <div className="form-group mb-2">
            <label className="form-label josefin-sans-link text-gray-700">
              Email :
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              value={email}
              onChange={handleemail}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email} </div>
            )}
          </div>

          {/* Phone No */}
          <div className="form-group mb-2">
            <label className="form-label josefin-sans-link text-gray-700">
              Phone No. :
            </label>
            <input
              type="text"
              placeholder="Enter Phone No."
              name="phoneno"
              className={`form-control ${errors.phoneno ? "is-invalid" : ""}`}
              value={phoneno}
              onChange={handlephoneNo}
            />
            {errors.phoneno && (
              <div className="invalid-feedback">{errors.phoneno} </div>
            )}
          </div>

          {/* DOB */}
          <div className="form-group mb-2">
            <label className="form-label josefin-sans-link text-gray-700">
              Date Of Birth :
            </label>
            <input
              type="date"
              placeholder="Enter Date Of Birth"
              name="dob"
              className={`form-control ${errors.dob ? "is-invalid" : ""}`}
              value={dob}
              onChange={handleDOB}
            />
            {errors.dob && (
              <div className="invalid-feedback">{errors.dob} </div>
            )}
          </div>

          {/* Department */}
          <div className="form-group mb-2">
            <label className="form-label josefin-sans-link text-gray-700">
              Department :
            </label>
            <br></br>
            <select
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
         bg-white text-gray-700 cursor-pointer"
            >
              <option value="" disabled selected class="text-gray-400">
                Select Department
              </option>
              <option value="HR" className="bg-indigo-200">
                HR
              </option>
              <option value="IT" className="bg-indigo-200">
                IT
              </option>
              <option value="Sales" className="bg-indigo-200">
                Sales
              </option>
              <option value="Product Management" className="bg-indigo-200">
                Product Management
              </option>
              <option value="Finance" className="bg-indigo-200">
                Finance
              </option>
            </select>
            {errors.dept && (
              <div className="invalid-feedback">{errors.dept} </div>
            )}
          </div>
          <br />
          <button
            type="submit"
            onClick={SaveOrUpdateEmployee}
            className="w-full bg-[#505081] text-white py-2 rounded-md josefin-sans-link hover:bg-[#3f3f6a] transition"
          >
            Submit
          </button>
          <br />
        </form>
      </div>
    </div>
  );
};

export { EmployeeComponent };
