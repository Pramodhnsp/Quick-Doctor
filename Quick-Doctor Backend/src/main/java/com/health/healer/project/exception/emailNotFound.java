package com.health.healer.project.exception;

public class emailNotFound extends RuntimeException {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public emailNotFound() {
		super("Email Not Found");
	}
}
