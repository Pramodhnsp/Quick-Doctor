package com.health.healer.project.service;

import java.util.List;

import com.health.healer.project.entity.Schedule;

public interface ScheduleService {
	
	Object addSchedule (Schedule sch);
	
	List<Schedule> FindAll();


}
