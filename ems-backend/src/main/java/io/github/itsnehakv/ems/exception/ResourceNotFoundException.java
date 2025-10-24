package io.github.itsnehakv.ems.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException{
    public ResourceNotFoundException(String message){
        super(message);
    }
}
/*
-Creating custom exception by extending RuntimeException class of java

@ResponseStatus(value = HttpStatus.NOT_FOUND)
- This tells Spring: "When this exception is thrown, return HTTP 404 Not Found as the response status."

super(message)
- The custom message will be passed to the parent RuntimeException class and can be shown in the response or logs.
 */
