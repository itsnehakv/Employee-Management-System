package io.github.itsnehakv.ems.mapper;

import io.github.itsnehakv.ems.dto.EmployeeDTO;
import io.github.itsnehakv.ems.entity.Employee;

public class EmployeeMapper {
    public static EmployeeDTO mapToEmployeeDTO(Employee employee){
        return new EmployeeDTO(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail(),
                employee.getDob(),
                employee.getDept(),
                employee.getPhoneno()


        );

    }

    public static Employee mapToEmployee(EmployeeDTO employeeDTO){
        return new Employee(
                employeeDTO.getId(),
                employeeDTO.getFirstName(),
                employeeDTO.getLastName(),
                employeeDTO.getEmail(),
                employeeDTO.getDob(),
                employeeDTO.getDept(),
                employeeDTO.getPhoneno()
        );
    }
}


/*

 -> Entity represents the database model.
 -> DTO represents data you expose to clients
 EmployeeMapper class is a utility to convert between your Entity & your Data Transfer Object (server and client)
 You take an Entity object (with database details) and create a corresponding DTO object to send outside your backend.

 public class User {
    private Long id;
    private String name;
    private String email;
    private String password;
}
You don’t want to send password in an API response.

So you create a DTO:
public class UserDTO {
    private String name;
    private String email;
}
Only the fields you put in the DTO will be visible to the client when they make an API call.
 */
