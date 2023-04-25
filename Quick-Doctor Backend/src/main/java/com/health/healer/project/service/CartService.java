package com.health.healer.project.service;

import java.util.List;

import com.health.healer.project.entity.Cart;

public interface CartService 
{
	Object addToCart(Cart c);
	
	List<Cart> getItems();

}
