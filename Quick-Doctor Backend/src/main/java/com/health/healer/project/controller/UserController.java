package com.health.healer.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;

import org.springframework.web.bind.annotation.RestController;

import com.health.healer.project.entity.User;
import com.health.healer.project.service.UserService;
import com.health.healer.project.serviceImp.UserServiceImpl;

@RestController
@CrossOrigin
public class UserController {
	@Autowired
	UserService Service;

	@PostMapping("/SignUp")
	ResponseEntity<Object> SaveData(@RequestBody User u) {

		Object obj = Service.SaveData(u);
		if (obj instanceof User) {
			return ResponseEntity.status(200).body("SignUp Sucessfull");
		}
		return ResponseEntity.status(400).body(Service.SaveData(u));

	}

	@GetMapping("/login")
	ResponseEntity<Object> login(@RequestHeader String email_id, @RequestHeader String password) {
		Object o = Service.login(email_id, password);
		if (o instanceof User) {
			return ResponseEntity.status(200).body(Service.login(email_id, password));
		} else {

			return ResponseEntity.status(400).body(Service.login(email_id, password));
		}

	}

	@PutMapping("/forgotPassword")
	ResponseEntity<Object> forgotPassword(@RequestHeader String email_id, @RequestHeader String password) {

		Object o1 = Service.forgotPassword(email_id, password);
		if (o1 instanceof User) {
			return ResponseEntity.status(200).body("Password Reset was Sucessfully Done");
		}
		return ResponseEntity.status(400).body(Service.forgotPassword(email_id, password));

	}

	@GetMapping("/GetByUsername")
	ResponseEntity<Object> findByUserName(@RequestHeader String userName) {
		Object o2 = Service.findByUserName(userName);
		if (o2 instanceof User) {
			return ResponseEntity.status(200).body(Service.findByUserName(userName));
		}
		return ResponseEntity.status(400).body(Service.findByUserName(userName));
	}

	@GetMapping("/GetByUserEmail")
	ResponseEntity<Object> findByEmail(@RequestHeader String emailId) {
		Object o3 = Service.findByEmail(emailId);
		if (o3 instanceof User) {
			return ResponseEntity.status(200).body(Service.findByEmail(emailId));
		}
		return ResponseEntity.status(400).body(Service.findByEmail(emailId));
	}
}
