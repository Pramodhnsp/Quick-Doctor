package com.health.healer.project.exception;



public class UserNotFoundException extends RuntimeException {

	String exception;

	public UserNotFoundException(String exception) {
		super(exception);
		this.exception = exception;
	}

}
