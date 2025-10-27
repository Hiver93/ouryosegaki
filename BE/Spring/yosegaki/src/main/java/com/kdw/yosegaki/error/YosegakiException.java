package com.kdw.yosegaki.error;

import org.springframework.http.HttpStatus;

import lombok.Getter;

@Getter
public class YosegakiException extends RuntimeException {
	private final ErrorCode errorCode;
	private String extraMessage;

	public YosegakiException(ErrorCode errorCode, String message) {
		super(errorCode.getMessage());
		this.errorCode = errorCode;
		this.extraMessage = message;
	}
	
	public YosegakiException(ErrorCode errorCode) {
		super(errorCode.getMessage());
		this.errorCode = errorCode;
	}
	
	public HttpStatus getStatus() {
		return this.errorCode.getStatus();
	}
	
	public String getMessage() {
		return super.getMessage() + (this.extraMessage == null ? "" : extraMessage); 
	}
}
