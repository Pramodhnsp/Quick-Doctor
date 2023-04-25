package com.health.healer.project.exception;


public class PasswordInvalidException extends RuntimeException{
	
	String inavildPassword;

	public PasswordInvalidException(String inavildPassword) {
		super(inavildPassword);
		this.inavildPassword = inavildPassword;
	}
	

}
