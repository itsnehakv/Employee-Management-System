package io.github.itsnehakv.ems.repository;

import io.github.itsnehakv.ems.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

//JpaRepository is a Spring Data interface that provides CRUD
// and many other handy operations for your entity classes without you having to write the implementation yourself.

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
