package com.kdw.yosegaki.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kdw.yosegaki.common.BaseResBody;
import com.kdw.yosegaki.domain.Yosegaki;
import com.kdw.yosegaki.dto.YosegakiReqDto;
import com.kdw.yosegaki.dto.YosegakiResDto;
import com.kdw.yosegaki.service.YosegakiService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/yosegaki")
@RequiredArgsConstructor
public class YosegakiController {
	
	private final YosegakiService yosegakiService;
	
	@PostMapping("/get/{memberId}")
	public ResponseEntity<BaseResBody<YosegakiResDto.YosegakiList>> getYosegakiList(
			@PathVariable(name = "memberId") Integer memberId,
			@RequestBody @Valid YosegakiReqDto.Get dto
			){
		
		YosegakiResDto.YosegakiList list = YosegakiResDto.YosegakiList.from(
					this.yosegakiService.getYosegakiList(memberId, dto.getPassword())
				);
				
		
		return new BaseResBody<>(
				list, "success"
				).toResponse(HttpStatus.OK);
	}
	
	@PostMapping("/{memberId}")
	public ResponseEntity<BaseResBody<Void>> postYosegaki(
			@PathVariable(name = "memberId") Integer memberId,
			@RequestBody @Valid YosegakiReqDto.Post dto
			){
		this.yosegakiService.postYosegaki(memberId, dto.getContent(), dto.getPassword());
		return new BaseResBody<Void>(null,"success").toResponse(HttpStatus.CREATED);
	}
}
