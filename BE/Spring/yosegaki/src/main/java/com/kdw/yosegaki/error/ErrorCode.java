package com.kdw.yosegaki.error;

import org.springframework.http.HttpStatus;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public enum ErrorCode {

	CONTENT_NOT_FOUND(HttpStatus.NOT_FOUND, "コンテンツを見つかりません",1),
	INCORRECT_PASSWORD(HttpStatus.FORBIDDEN, "パスワードが違います",2),
	UNSUPPORTED_WORD(HttpStatus.BAD_REQUEST, "使えない言葉があります：",3),
	PASSWORD_REQUIRED(HttpStatus.BAD_REQUEST, "パスワードが必要です",4)
	;
	private final HttpStatus status;
	private final String message;
	private final int errorCode;
}
