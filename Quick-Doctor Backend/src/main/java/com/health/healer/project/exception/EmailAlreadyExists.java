package com.health.healer.project.exception;

public class EmailAlreadyExists extends RuntimeException{

	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public EmailAlreadyExists()
	{
		super("Email Has Already exist");
	}
}
