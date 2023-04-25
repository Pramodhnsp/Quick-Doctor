 package com.health.healer.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.health.healer.project.entity.Doctor;
import com.health.healer.project.service.DoctorService;

@RestController
@CrossOrigin
public class DoctorController {

	@Autowired(required = true)
	DoctorService service;

	@PostMapping("/DoctorSignUp")
	public ResponseEntity<Object> SignUp(@RequestBody Doctor d) {
		Object o = service.SignUp(d);
		if (o instanceof Doctor) {
			return ResponseEntity.status(200).body("Doctor SignUp Sucessfull");
		}
		return ResponseEntity.status(400).body(service.SignUp(d));

	}

	@GetMapping("/DoctorLogin")
	public ResponseEntity<Object> login(@RequestHeader String email_id, @RequestHeader String password) {
		Object o1 = service.login(email_id, password);
		if (o1 instanceof Doctor) {
			return ResponseEntity.status(200).body(service.login(email_id, password));
		}
		return ResponseEntity.status(400).body(service.login(email_id, password));
	}

	@SuppressWarnings("rawtypes")
	@GetMapping("getAllDoctors")
	public ResponseEntity<List> Findall() {
		Object o2 = service.Findall();
		if (o2 instanceof Doctor) {
			return ResponseEntity.status(200).body(service.Findall());
		}
		return ResponseEntity.status(400).body(service.Findall());

	}

	@PutMapping("/ForgotPasswordDoctor")
	public ResponseEntity<Object> ForgotPassword(@RequestHeader String email, @RequestHeader String password) {
		Object o2 = service.ForgotPassword(email, password);
		if (o2 instanceof Doctor) {
			return ResponseEntity.status(200).body("Password Sucessfully Changed");
		}
		return ResponseEntity.status(400).body(service.ForgotPassword(email, password));
	}

	@GetMapping("/FindByDoctorname")
	public ResponseEntity<Object> FindByDoctorname(@RequestHeader String doctorName) {
		Object o3 = service.FindByDoctorname(doctorName);
		if (o3 instanceof Doctor) {
			return ResponseEntity.status(200).body(service.FindByDoctorname(doctorName));
		}
		return ResponseEntity.status(400).body(service.FindByDoctorname(doctorName));
	}

	@GetMapping("/FindByDoctorEmailId")
	public Object FindByEmail(@RequestHeader String emailId) {
		Object o4 = service.FindByEmail(emailId);
		if (o4 instanceof Doctor) {
			return ResponseEntity.status(200).body(service.FindByEmail(emailId));
		}
		return ResponseEntity.status(400).body(service.FindByEmail(emailId));
	}
}
