package com.health.healer.project.service;

import java.util.List;


import org.springframework.web.multipart.MultipartFile;

import com.health.healer.project.entity.Product;

public interface ProductService {

	Product addProduct(MultipartFile file,String product_name,String product_lic,int product_price,String product_Desc,int product_qty ,int product_rating, int mid);

	Product updateProduct(Product p);

	Product deleteProduct(int pid);
	
	Product productById(int pid);
	
	Object finByName(String product_name);
	
	List<Product> getall();

}
