package com.health.healer.project.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.health.healer.project.entity.Doctor;
import com.health.healer.project.entity.Marchant;
import com.health.healer.project.service.MarchantService;

@RestController
@CrossOrigin
public class MarchantController {

	@Autowired
	private MarchantService service;

	@PostMapping("/MarchantSignUp")
	public ResponseEntity<Object> SignUp(@RequestBody Marchant m) {
		Object o = service.SignUp(m);
		if (o instanceof Marchant) {
			return ResponseEntity.status(201).body("Marchant SignUp Sucessfull");
		}
		return ResponseEntity.status(400).body(service.SignUp(m));
	}
	
	@GetMapping("/marchantLogin")
	public ResponseEntity<Object> login(@RequestHeader String email_id, @RequestHeader String password) {
		Object o1 = service.login(email_id, password);
		if (o1 instanceof Marchant) {
			return ResponseEntity.status(200).body(service.login(email_id, password));
		}
		return ResponseEntity.status(400).body(service.login(email_id, password));
	}
	

	@GetMapping("getAllmarchants")
	public ResponseEntity<List<Marchant>> Findall() {
		Object o2 = service.Findall();
		if (o2 != null) {
			return ResponseEntity.status(200).body(service.Findall());
		}
		return ResponseEntity.status(400).body(null);
	}
	
	@PutMapping("/ForgotPasswordMarchant")
	public ResponseEntity<Object> ForgotPassword(@RequestHeader String email, @RequestHeader String password) {
		Object o3 = service.ForgotPassword(email, password);
		if (o3 instanceof Marchant) {
			return ResponseEntity.status(200).body("Password Sucessfully Changed");
		}
		return ResponseEntity.status(400).body(service.ForgotPassword(email, password));
	}
	
	@GetMapping("/FindByMarchantName")
	public ResponseEntity<Object> FindByMarchantname(@RequestHeader String marchantName) {
		Object o3 = service.FindByMarchantname(marchantName);
		if (o3 instanceof Marchant) {
			return ResponseEntity.status(200).body(service.FindByMarchantname(marchantName));
		}
		return ResponseEntity.status(400).body(service.FindByMarchantname(marchantName));
	}
	
	@GetMapping("/FindByMarchantEmailId")
	public Object FindByEmail(@RequestHeader String emailId) {
		Object o4 = service.FindByEmail(emailId);
		if (o4 instanceof Marchant) {
			return ResponseEntity.status(200).body(service.FindByEmail(emailId));
		}
		return ResponseEntity.status(400).body(service.FindByEmail(emailId));
	}
}
