package com.health.healer.project.exception;

public class PhoneNumberAlreadyExists extends RuntimeException {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public PhoneNumberAlreadyExists()
	{
		super("Phone number Has Already registered");
	}

}
