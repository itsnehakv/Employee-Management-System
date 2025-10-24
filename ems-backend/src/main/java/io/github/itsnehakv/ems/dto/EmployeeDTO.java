package io.github.itsnehakv.ems.dto;

/*
Repository - access layer ; Interacts w/ database; does CRUD ops.
DTO - Data Transfer Object; Data carrier — used to transfer data; Just data fields like name, email, etc.
Only the fields you put in the DTO will be visible to the client when they make an API call.
**See Mapper class for more**
 */

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeDTO {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String dob;
    private String dept;
    private String phoneno;

}

