package com.health.healer.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.health.healer.project.entity.Product;
import com.health.healer.project.service.ProductService;


@CrossOrigin
@RestController
public class ProductController {

	@Autowired
	ProductService service;

	@PostMapping("/addProduct")
	ResponseEntity<Product> addProduct(@RequestParam("file") MultipartFile product_pic,
			@RequestParam String product_name, @RequestParam String product_lic, @RequestParam int product_price,
			@RequestParam String product_Desc, @RequestParam int product_qty, @RequestParam int product_rating, @RequestParam int mid) {

		return new ResponseEntity<Product>(service.addProduct(product_pic, product_name, product_lic, product_price,
				product_Desc, product_qty, product_rating, mid), HttpStatus.ACCEPTED);
	}

	@PutMapping
	ResponseEntity<Product> updateProduct(Product p) {
		return new ResponseEntity<Product>(service.updateProduct(p), HttpStatus.ACCEPTED);
	}

	@DeleteMapping("/DeleteProduct")
	ResponseEntity<Product> deleteProduct(@RequestHeader int pid) {
		return new ResponseEntity<Product>(service.deleteProduct(pid), HttpStatus.ACCEPTED);
	}

	@GetMapping("/productId")
	ResponseEntity<Product> productById(@RequestHeader int pid) {
		return new ResponseEntity<Product>(service.productById(pid), HttpStatus.ACCEPTED);
	}

	@GetMapping("/productByName/{product_name}")
	ResponseEntity<Object> finByName(@PathVariable String product_name)
	{
		return  new ResponseEntity<Object>(service.finByName(product_name),HttpStatus.ACCEPTED);
	}
	
	@SuppressWarnings("rawtypes")
	@GetMapping("getallProducts")
	public ResponseEntity<List>  Findall()
	{
		Object p=service.getall();
		if(p !=null)
		{
			return ResponseEntity.status(200).body(service.getall());
		}
		else
		{
			return ResponseEntity.status(400).body(null);
		}
	}
}