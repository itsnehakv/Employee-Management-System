package io.github.itsnehakv.ems.service;

import io.github.itsnehakv.ems.dto.EmployeeDTO;

import java.util.List;

public interface EmployeeService {
    EmployeeDTO createEmployee(EmployeeDTO employeeDTO);
    //EmployeeDTO before the method name:
    //This is the return type. It means this method returns an EmployeeDTO object.

    EmployeeDTO getEmployeeByID(Long employeeId);

    List<EmployeeDTO> getAllEmployees();
    //return type will be List of EmployeeDTO objects (for client to view)

    EmployeeDTO updateEmployee(Long employeeId, EmployeeDTO updatedEmployee);
    //(ID of employee whose details need to be changed & the details that have to be changed.)

    void deleteEmployee(Long employeeId);
    }
