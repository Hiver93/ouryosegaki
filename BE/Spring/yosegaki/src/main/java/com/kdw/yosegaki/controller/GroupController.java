package com.kdw.yosegaki.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kdw.yosegaki.common.BaseResBody;
import com.kdw.yosegaki.domain.Group;
import com.kdw.yosegaki.domain.Member;
import com.kdw.yosegaki.dto.GroupReqDto;
import com.kdw.yosegaki.dto.GroupResDto;
import com.kdw.yosegaki.dto.MemberReqDto;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/groups")
@RequiredArgsConstructor
public class GroupController {
	
	@GetMapping
	public ResponseEntity<BaseResBody<GroupResDto.GroupList>> getGroupList(
			@RequestParam(name = "keyword") String keyword
			){
		List<Group> list = List.of(Group.builder().name(keyword).build(), Group.builder().name(keyword).build());
		return new BaseResBody<>(GroupResDto.GroupList.from(list), "success")
				.toResponse(HttpStatus.OK);
	}
	
	@PostMapping("/{groupId}")
	public ResponseEntity<BaseResBody<GroupResDto.GroupDetail>> getGroupDetail(
			@PathVariable(name = "groupId") Integer groupId,
			@RequestBody @Valid GroupReqDto.Detail dto
			){
		System.out.println(groupId);
		System.out.println(dto.getPassword());
		List<Member> list = List.of(Member.builder().name("kim").build(),Member.builder().name("park").build());
		return new BaseResBody<>(GroupResDto.GroupDetail.from(list), "success").toResponse(HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<BaseResBody<GroupResDto.Create>> postGroup(
			@RequestBody @Valid GroupReqDto.Post dto
			){
		System.out.println(dto.getName());
		System.out.println(dto.getPassword());
		return new BaseResBody<>(GroupResDto.Create.from(Group.builder().build()),"s").toResponse(HttpStatus.CREATED);
	}
	
	@PostMapping("/{groupId}/members")
	public ResponseEntity<BaseResBody<Void>> postGroup(
			@PathVariable(name = "groupId") Integer groupId,
			@RequestBody @Valid MemberReqDto.Post dto
			){
		System.out.println(dto.getPassword());
		dto.getMemberList().stream().forEach(System.out::println);
		return new BaseResBody<Void>(null,"s").toResponse(HttpStatus.CREATED);
	}
}
