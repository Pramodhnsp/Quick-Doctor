package com.health.healer.project.serviceImp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.health.healer.project.entity.Schedule;
import com.health.healer.project.entity.User;
import com.health.healer.project.exception.DataNotFoundException;
import com.health.healer.project.repo.ScheduleRepo;
import com.health.healer.project.service.ScheduleService;

@Service
public class ScheduleServiceImpl implements ScheduleService {

	@Autowired(required = true)
	ScheduleRepo screpo;
	
	@Override
	public Object addSchedule(Schedule sch) {
		
		return screpo.save(sch);
	}
	
	
	@Override
	public List<Schedule> FindAll() {
		return screpo.findAll();
	}
	

}
