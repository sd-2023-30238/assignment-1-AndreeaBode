package com.example.demo;

import jakarta.servlet.http.HttpServletRequest;
import org.apache.catalina.connector.Request;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
	@RequestMapping(value = "/testing", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	private void testing(@RequestBody Request body, @RequestHeader HttpHeaders headers, HttpServletRequest httpRequest) {
		System.out.println("succes");
	}

}
