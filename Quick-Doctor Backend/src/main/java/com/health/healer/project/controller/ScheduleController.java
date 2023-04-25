package com.health.healer.project.controller;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.health.healer.project.entity.Schedule;
import com.health.healer.project.service.ScheduleService;




@RestController
@CrossOrigin
public class ScheduleController {
	
	@Autowired(required = true)
	ScheduleService Scser;
	
	@PostMapping("/AddSchedule")
	public ResponseEntity<Object> addSchedule(@RequestBody Schedule sch)
	{
		System.out.println(sch.getU_email_id());
		
		Object s = Scser.addSchedule(sch);
		if(s instanceof Schedule)
		{
			return ResponseEntity.status(200).body("Schedule has been done");
		}
		return ResponseEntity.status(400).body(Scser.addSchedule(sch));
	}
	
	@GetMapping("/GetAllAppointments")
	public ResponseEntity<Object> getAll()
	{
		Object o=Scser.FindAll();
		if(o != null)
		{
			return ResponseEntity.status(200).body(o);
		}
		return ResponseEntity.status(400).body("No data available");
	}

}
