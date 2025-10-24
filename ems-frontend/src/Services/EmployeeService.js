import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/employees";

export const listEmployees = () => axios.get(REST_API_BASE_URL);

export const createEmployee = (employee) =>
  axios.post(REST_API_BASE_URL, employee);
//employee object contains the data to be sent to the backend to create a new employee record

export const getEmployeeById = (id) => axios.get(`${REST_API_BASE_URL}/${id}`);

export const updateEmployeeById = (id, employee) =>
  axios.put(`${REST_API_BASE_URL}/${id}`, employee);
//employee object contains the updated data to be sent to the backend to update the employee record

export const deleteEmployeeById = (id) =>
  axios.delete(`${REST_API_BASE_URL}/${id}`);
