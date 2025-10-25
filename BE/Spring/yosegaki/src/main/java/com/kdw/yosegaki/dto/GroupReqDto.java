package com.kdw.yosegaki.dto;

import org.springframework.validation.annotation.Validated;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class GroupReqDto {
	
	@NoArgsConstructor
	@Setter
	@Getter
	@Validated
	public static class Detail{
		@NotBlank(message = "password is required")
		private String password;
	}
	
	@NoArgsConstructor
	@Setter
	@Getter
	@Validated
	public static class Post{
		
		@NotBlank(message = "name is required")
		private String name;
		
		@NotBlank(message = "password is required")
		private String password;
	}
}
