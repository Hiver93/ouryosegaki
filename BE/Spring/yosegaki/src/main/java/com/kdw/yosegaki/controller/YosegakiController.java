package com.kdw.yosegaki.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kdw.yosegaki.common.BaseResBody;
import com.kdw.yosegaki.domain.Yosegaki;
import com.kdw.yosegaki.dto.YosegakiReqDto;
import com.kdw.yosegaki.dto.YosegakiResDto;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/yosegaki")
@RequiredArgsConstructor
public class YosegakiController {
	
	@GetMapping
	public ResponseEntity<BaseResBody<List<YosegakiResDto.Content>>> getYosegakiList(){
		
		List<YosegakiResDto.Content> list = List.of(YosegakiResDto.Content.from(Yosegaki.builder().content("hello").build()),
				YosegakiResDto.Content.from(Yosegaki.builder().content("good").build())); 
		
		return new BaseResBody<>(
				list, "success"
				).toResponse(HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<BaseResBody<Void>> postYosegaki(
			@RequestBody @Valid YosegakiReqDto.Post dto
			){
		System.out.println(dto.getContent());
		System.out.println(dto.getPassword());
		return new BaseResBody<Void>(null,"s").toResponse(HttpStatus.CREATED);
	}
}
