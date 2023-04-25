package com.health.healer.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.health.healer.project.entity.Doctor;

@Repository
public interface DoctorRepo extends JpaRepository<Doctor, Integer> {

	@Query(value = "select * from health_healer.doctor_sign_up where d_e_mail=?1", nativeQuery = true)
	Doctor findByEmail(String email_id);

	@Query(value = "select * from health_healer.doctor_sign_up where d_ph_no=?1", nativeQuery = true)
	Doctor findByphNo(long ph_no);
	
	@Query(value = "select * from health_healer.doctor_sign_up where d_name=?1", nativeQuery = true)
	Doctor FindByDoctorname(String doctorName);
}
