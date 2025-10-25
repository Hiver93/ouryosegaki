package com.kdw.yosegaki.dto;

import org.springframework.validation.annotation.Validated;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class YosegakiReqDto {
	@NoArgsConstructor
	@Setter
	@Getter
	@Validated
	public static class Post{
		
		@NotBlank(message = "content is required")
		private String content;
		
		@NotBlank(message = "password is required")
		private String password;
	}
}
