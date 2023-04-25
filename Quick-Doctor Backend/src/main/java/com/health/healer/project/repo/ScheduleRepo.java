package com.health.healer.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.health.healer.project.entity.Schedule;

public interface ScheduleRepo extends JpaRepository<Schedule, Integer> 
{
	

}
