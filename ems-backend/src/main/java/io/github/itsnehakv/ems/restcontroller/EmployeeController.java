package io.github.itsnehakv.ems.restcontroller;

import io.github.itsnehakv.ems.dto.EmployeeDTO;
import io.github.itsnehakv.ems.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController    //makes class capable of handling HTTP requests
@RequestMapping("/api/employees")  //defines all base urls of all APIs in this class
public class EmployeeController {
    private EmployeeService employeeService;

    //Build Add Employee REST API
    @PostMapping
    public ResponseEntity<EmployeeDTO> createEmployee(@RequestBody EmployeeDTO employeeDTO){
       EmployeeDTO savedEmployee= employeeService.createEmployee(employeeDTO);
       return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }


    //Build Get Employee REST API
    @GetMapping("{id}")
    public ResponseEntity<EmployeeDTO> getEmployeeByID(@PathVariable("id") Long employeeId){
        EmployeeDTO employeeDTO=employeeService.getEmployeeByID(employeeId);
        return ResponseEntity.ok(employeeDTO);
    }


    //Build Get All Employees REST API
    @GetMapping
    public ResponseEntity<List<EmployeeDTO>> getAllEmployees(){
        List<EmployeeDTO> employees=employeeService.getAllEmployees();
        return ResponseEntity.ok(employees);
    }


    //Build Update Employee REST API
    @PutMapping("{id}")
    public ResponseEntity<EmployeeDTO> updateEmployee(@PathVariable("id") Long employeeid,
                                                      @RequestBody EmployeeDTO updatedEmployee){
        EmployeeDTO employeeDTO=employeeService.updateEmployee(employeeid,updatedEmployee);
        return ResponseEntity.ok(employeeDTO);
    }


    //Build Delete Employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long employeeId){
        employeeService.deleteEmployee(employeeId);
        return ResponseEntity.ok("Employee deleted successfully!");

    }
}

/*
POST


**@PostMapping
 - maps/binds incoming HTTP POST requests to this method
Line 21
    public ResponseEntity<EmployeeDTO> createEmployee(@RequestBody EmployeeDTO employeeDTO)

- ResponseEntity<T> is a Spring Framework class that represents the entire HTTP response; Gives you full control over the HTTP response
- <EmployeeDTO> means the body of the response (backend -> client) will be an EmployeeDTO Object
- ResponseEntity<EmployeeDTO> Tells Spring:
  "Send this Java object (EmployeeDTO) as JSON in the HTTP response."

- createEmployee -> abstract method from EmployeeService interface
**(@RequestBody EmployeeDTO employeeDTO)
  - @RequestBody extracts JSON from HTTP request (client -> backend) & converts (deserializes) it to EmployeeDTO object
  - EmployeeDTO employeeDTO holds this converted Java object.


* JSON attributes when creating API in POSTMAN must be same as EmployeeDTO fields bcs we deserialize JSON to employeedto


-SUMMARY-
* @PostMapping maps HTTP POST requests (used for sending data to the server) to this method.
* ResponseEntity represents the full HTTP response, including the status code, headers, and the body.
* The return value of this method will be an EmployeeDTO object wrapped inside the ResponseEntity.
* createEmployee is a method declared in the EmployeeService interface (an abstract method) and implemented in the service implementation class.
* @RequestBody tells Spring to deserialize (convert) the incoming JSON payload from the HTTP request body into an EmployeeDTO Java object.

Line 22
       EmployeeDTO savedEmployee= employeeService.createEmployee(employeeDTO);

 -This deserialized JSON, which is now EmployeeDTO object is converted to Employee JPA entity using createEmployee method of EmployeeService implementation
  this Employee JPA entity is saved to Database (ref EmployeeServiceImpl) and the savedEmployee (of EmployeeServiceImpl)
  is converted back to EmloyeeDTO object and returned.
 -Therefore, savedEmployee *here* is an EmployeeDTO object
 -The reason we convert from EmployeeDTO → Employee (JPA entity) and then back to EmployeeDTO is mainly because:
  Only JPA entities can be saved to the database — not DTOs.

Line 23
       return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);

** new ResponseEntity<>(...)
    -You're creating a new response object. This is what will be returned to the client.
    -This sets the HTTP status code to 201 Created, which is standard code for when a new resource (e.g., an employee) has been successfully created via POST.

Q. Why do we do employeeService.createEmployee instead of employeeServiceImpl.createEmployee
   since we hae its implementation there anyways?
A. Spring automatically injects an object of EmployeeServiceImpl into this variable.
   You don’t need to manually refer to the implementation.
   You’re saying: “Give me something that behaves like EmployeeService”

Q. What if there is more than one implementation?
A. If you have more than one class implementing the same interface, and you just do:
** @Autowired
      private EmployeeService employeeService;

   Spring will throw an error like: NoUniqueBeanDefinitionException
   Use @Qualifier to pick a specific implementation.
** @Qualifier("mockEmployeeService")
      private EmployeeService employeeService;

 */


/*
GET

@PathVariable("id")
- Binds the "id" in the Path (@GetMapping){"id"})) to the employeeid parameter of getEmployeeByID

return ResponseEntity.ok(employeeDTO);
- ResponseEntity.ok() creates a response with HTTP status 200 OK (request succeeded)
- The body containing employeeDTO is returned (which Spring will automatically convert to JSON)

==> Use .ok() when you’re returning data from a successful *GET* or update.
==> Use .created() or new ResponseEntity<>(..., HttpStatus.CREATED) when you create a *new resource*, so the client knows something new was made.
 */
