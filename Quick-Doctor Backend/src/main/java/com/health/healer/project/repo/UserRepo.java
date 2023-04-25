package com.health.healer.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.health.healer.project.entity.User;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {

	@Query(value = "select * from user_signup where u_email_id=?1", nativeQuery = true)
	User findByEmail(String email_id);

	@Query(value = "select * from user_signup where u_ph_no=?1", nativeQuery = true)
	User findByphNo(long ph_no);

	@Query(value = "select * from user_signup where u_user_name=?1", nativeQuery = true)
	User findByUserName(String userName);

}
