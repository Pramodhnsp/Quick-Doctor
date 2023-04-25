package com.health.healer.project.serviceImp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.health.healer.project.entity.Cart;
import com.health.healer.project.repo.CartRepo;
import com.health.healer.project.service.CartService;

@Service
public class CartServiceImplementation implements CartService
{
	@Autowired(required = true)
	CartRepo cartrepo;
	
	@Override
	public Object addToCart(Cart c)
	{
		return cartrepo.save(c);		
	}
	
	@Override
	public List<Cart> getItems()
	{
		return cartrepo.findAll();
	}

	

}
