package com.health.healer.project.exception;

public class UserAlreadyExistsException extends RuntimeException {

	String expection;

	public UserAlreadyExistsException(String expection) {
		super(expection);
		this.expection = expection;
	}
}
