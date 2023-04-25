package com.health.healer.project.exception;

public class UserNameAlreayExists extends RuntimeException{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	public UserNameAlreayExists()
	{
		super("User Name has already registerd ");
	}
}
