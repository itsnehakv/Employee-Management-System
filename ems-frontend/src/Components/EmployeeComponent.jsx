import React, { useEffect, useState } from "react";
import {
  createEmployee,
  getEmployeeById,
  updateEmployeeById,
} from "../Services/EmployeeService";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

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
        //if id is present in URL, then only call updateEmployeeById
        updateEmployeeById(id, employee)
          .then((response) => {
            console.log("Employee data updated successfully", response.data);
            navigate("/employees"); //After updating employee, navigate to employee list page
          })
          .catch((error) => {
            console.error("Error updating employee data:", error);
          });
      } else {
        createEmployee(employee)
          .then((response) => {
            console.log("Employee data saved successfully", response.data);
            navigate("/employees"); //After adding employee, navigate to employee list page
          })
          .catch((error) => {
            console.error("Error saving employee data:", error);
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
      return <h2 className="text-center">Update Employee</h2>;
    } else {
      return <h2 className="text-center">Add Employee</h2>;
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
    <div className="container">
      <br></br>
      <br></br>
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          {pageTitle()}
          <div className="card-body">
            <form>
              {/* First Name */}
              <div className="form-group mb-2">
                <label className="form-label">First Name :</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  name="firstName"
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : ""
                  }`} //is-invalid is from bootstrap; this statement is like if-else
                  value={firstName}
                  onChange={handlefirstName}
                />
                {errors.firstName && (
                  <div className="invalid-feedback">{errors.firstName} </div>
                )}
              </div>

              {/* Last Name */}
              <div className="form-group mb-2">
                <label className="form-label">Last Name :</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  name="lastName"
                  className={`form-control ${
                    errors.lastName ? "is-invalid" : ""
                  }`}
                  value={lastName}
                  onChange={handlelastName}
                />
                {errors.lastName && (
                  <div className="invalid-feedback">{errors.lastName} </div>
                )}
              </div>

              {/* Email ID */}
              <div className="form-group mb-2">
                <label className="form-label">Email :</label>
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
                <label className="form-label">Phone No. :</label>
                <input
                  type="text"
                  placeholder="Enter Phone No."
                  name="phoneno"
                  className={`form-control ${
                    errors.phoneno ? "is-invalid" : ""
                  }`}
                  value={phoneno}
                  onChange={handlephoneNo}
                />
                {errors.phoneno && (
                  <div className="invalid-feedback">{errors.phoneno} </div>
                )}
              </div>

              {/* DOB */}
              <div className="form-group mb-2">
                <label className="form-label">Date Of Birth :</label>
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
                <label className="form-label">Department :</label>
                <br></br>
                <select
                  value={dept}
                  onChange={handledept}
                  style={{ width: "100%" }}
                  className={`form-control ${errors.dept ? "is-invalid" : ""}`}
                >
                  <option value="">Select Department</option>
                  <option value="HR">HR</option>
                  <option value="IT">IT</option>
                  <option value="Sales">Sales</option>
                  <option value="Product Management">Product Management</option>
                  <option value="Finance">Finance</option>
                </select>
                {errors.dept && (
                  <div className="invalid-feedback">{errors.dept} </div>
                )}
              </div>
              <button
                className="btn btn-success"
                type="submit"
                onClick={SaveOrUpdateEmployee}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export { EmployeeComponent };
