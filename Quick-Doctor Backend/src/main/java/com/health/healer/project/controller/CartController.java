package com.health.healer.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.health.healer.project.entity.Cart;
import com.health.healer.project.service.CartService;

@RestController
@CrossOrigin
public class CartController 
{
	@Autowired (required =true)
	CartService cartservice;
	
	@PostMapping("/AddToCart")
	public ResponseEntity<Object> toCart(@RequestBody Cart c)
	{
		Object a = cartservice.addToCart(c);
		System.out.println(a);
		if(a instanceof Cart)
		{
			return ResponseEntity.status(200).body(a);
		}
		
		else
			
		{
			return ResponseEntity.status(400).body(a);
		}
	}
	
	@SuppressWarnings("rawtypes")
	@GetMapping("/GetItems")
	public ResponseEntity<List> allItems()
	{
		Object all = cartservice.getItems();
		if(all != null)
		{
			return ResponseEntity.status(200).body(cartservice.getItems());
		}
		else
		{
			return ResponseEntity.status(400).body(null);
		}
		
	}

}
