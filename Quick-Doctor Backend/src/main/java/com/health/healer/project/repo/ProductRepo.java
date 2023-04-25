package com.health.healer.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.health.healer.project.entity.Product;

public interface ProductRepo extends JpaRepository<Product, Integer> {
	
	
	@Query(value="select * from Product where  product_name=?1",nativeQuery = true)
	Product finByName(String product_name);
	
	

}
