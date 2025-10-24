package io.github.itsnehakv.ems.service.impl;

import io.github.itsnehakv.ems.dto.EmployeeDTO;
import io.github.itsnehakv.ems.entity.Employee;
import io.github.itsnehakv.ems.exception.ResourceNotFoundException;
import io.github.itsnehakv.ems.mapper.EmployeeMapper;
import io.github.itsnehakv.ems.repository.EmployeeRepository;
import io.github.itsnehakv.ems.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.stream.Collectors;


import java.util.List;

/*
Q. Why is EmployeeService an interface?
  You can switch the implementation without changing the rest of your code.
  For example, you might have:
* EmployeeServiceImpl for normal database operations
* EmployeeServiceMock for testing (mocking data)
* EmployeeServiceCached for caching logic
 */
@Service
@AllArgsConstructor
    public class EmployeeServiceImpl implements EmployeeService {
        private EmployeeRepository employeeRepository;
        public EmployeeDTO createEmployee(EmployeeDTO employeeDTO) {
            System.out.println("Received DTO: dob=" + employeeDTO.getDob() + ", dept=" + employeeDTO.getDept());


            Employee employee = EmployeeMapper.mapToEmployee(employeeDTO);
            Employee savedEmployee= employeeRepository.save(employee);

            return EmployeeMapper.mapToEmployeeDTO(savedEmployee);

        }

    public EmployeeDTO getEmployeeByID(Long employeeId) {
            Employee employee=employeeRepository.findById(employeeId)    //notice no ;
           .orElseThrow(()->                    //()-> is a lambda expression in Java.
                   new ResourceNotFoundException("Employee with the specified ID "+employeeId+" doesn't exist"));
        return EmployeeMapper.mapToEmployeeDTO(employee);
    }

    public List<EmployeeDTO> getAllEmployees() {
            List<Employee>employees=employeeRepository.findAll();  //select findAll() w/no args and return type List
        return employees.stream().map((employee)->EmployeeMapper.mapToEmployeeDTO(employee))
                .collect(Collectors.toList());
    }

    public EmployeeDTO updateEmployee(Long employeeId, EmployeeDTO updatedEmployee) {
            Employee employee=employeeRepository.findById(employeeId).
                    orElseThrow(()->new ResourceNotFoundException("Employee with the specified ID "+employeeId+" doesn't exist"));

            employee.setFirstName(updatedEmployee.getFirstName());
            employee.setLastName(updatedEmployee.getLastName());
            employee.setEmail(updatedEmployee.getEmail());
            employee.setPhoneno(updatedEmployee.getPhoneno());
            employee.setDob(updatedEmployee.getDob());
            employee.setDept(updatedEmployee.getDept());

            Employee updatedEmployeeObj=employeeRepository.save(employee);
            //if the employee id doesn't exist, it will just create new employee
            //if employee id exists, employee details are updated.

        return EmployeeMapper.mapToEmployeeDTO(updatedEmployeeObj);
    }

    public void deleteEmployee(Long employeeId) {
        Employee employee=employeeRepository.findById(employeeId)
                .orElseThrow(()->new ResourceNotFoundException("Employee with the specified ID "+employeeId+" doesn't exist"));
        employeeRepository.deleteById(employeeId);

    }


}

/*
**public EmployeeDTO createEmployee(EmployeeDTO employeeDTO) {

            Employee employee = EmployeeMapper.mapToEmployee(employeeDTO);
            Employee savedEmployee= employeeRepository.save(employee);
             return EmployeeMapper.mapToEmployeeDTO(savedEmployee);

-Client gives details->it is in DTO form (frontend);
-it is then converted to database model/JPA entity using mapToEmployee or Mapper class
-Then this converted entity is saved to DB
-savedEmployee (JPA entity) is converted to DTO and returned



**return employees.stream().map((employee) -> EmployeeMapper.mapToEmployeeDTO(employee))
                .collect(Collectors.toList());
1. employees.stream()
   - This converts the employees collection (List<Employee>) into a Stream.
   - In Java, a stream represents a sequence of elements that can be processed in parallel or sequentially.
2. map((employee) -> EmployeeMapper.mapToEmployeeDTO(employee))
   - map function is a transformation operation.
   - It takes each element of the stream (each Employee object) and transforms it into another type (EmployeeDTO).
3. .collect(Collectors.toList())
   - The collect operation is used to aggregate the results of the stream back into a collection, in this case, a List.

The mapping method EmployeeMapper.mapToEmployeeDTO() defines how to convert an Employee object to an EmployeeDTO.
The map() method in the stream is used to apply that mapping to every element in the stream.



===========================
SPRING CORE CONCEPTS
===========================
DEPENDENCY
A dependency is an object that your class needs in order to do its job.

Q. Why does EmployeeServiceImpl depend on EmployeeRepository?
A. Because EmployeeRepository contains the code that actually interacts with the database.
For example: When you want to save an employee → you call employeeRepository.save(...)
The dependent bean gets access to the dependency bean so it can use the attributes and methods of that dependency
— without having to create or manage it itself

INJECTION
An  Injection means Spring gives your class the objects (dependencies) it needs — automatically.
manual: EmployeeRepository employeeRepository = new EmployeeRepository();

BEAN
Bean is a Java object created and managed by Spring.
It means Spring is responsible for creating, storing, configuring,
and giving you access to the object (bean) — not you.
Normally, you’d write:
** GreetingService service = new GreetingService(); // You control it/manage it
This is called manual instantiation.

But when Spring controls it:
** @Component
   public class GreetingService {
       // Spring manages this automatically
   }

You don't have to write new class_name() to create objects.
Spring handles object creation. Code size/dev time reduces
 */
