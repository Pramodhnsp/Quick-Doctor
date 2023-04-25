package com.health.healer.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.health.healer.project.entity.Marchant;

@Repository
public interface MarchantDao extends JpaRepository<Marchant, Integer> {

	@Query(value = "select * from Marchant where m_email_id=?1", nativeQuery = true)
	Marchant fimdByMail(String emailid);

	@Query(value = "select * from Marchant where m_ph_no=?1", nativeQuery = true)
	Marchant fimdByPhno(long phNo);

	@Query(value = "select * from Marchant where m_name=?1", nativeQuery = true)
	Marchant fimdByName(String m_name);
}
