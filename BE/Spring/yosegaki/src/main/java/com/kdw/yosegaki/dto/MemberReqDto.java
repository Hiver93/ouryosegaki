package com.kdw.yosegaki.dto;

import java.util.List;

import org.springframework.validation.annotation.Validated;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class MemberReqDto {
	@NoArgsConstructor
	@Setter
	@Getter
	@Validated
	public static class Post{
		
		@NotBlank(message = "password is required")
		private String password;
		@NotEmpty(message = "meberList is required")
		private List<String> memberList;
		
	}
}
