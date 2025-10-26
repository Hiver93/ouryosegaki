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
import com.kdw.yosegaki.service.GroupService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/groups")
@RequiredArgsConstructor
public class GroupController {
	
	private final GroupService groupService;
	
	@GetMapping
	public ResponseEntity<BaseResBody<GroupResDto.GroupList>> getGroupList(
			@RequestParam(value = "keyword") String keyword
			){
		
		return new BaseResBody<>(GroupResDto.GroupList.from(this.groupService.getGroupList(keyword)), "success")
				.toResponse(HttpStatus.OK);
	}
	
	@PostMapping("/{groupId}")
	public ResponseEntity<BaseResBody<GroupResDto.GroupDetail>> getGroupDetail(
			@PathVariable(name = "groupId") Integer groupId,
			@RequestBody @Valid GroupReqDto.Detail dto
			){
		
		List<Member> list = this.groupService.getGroupMembers(groupId, dto.getPassword());
		return new BaseResBody<>(GroupResDto.GroupDetail.from(list), "success").toResponse(HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<BaseResBody<GroupResDto.Create>> postGroup(
			@RequestBody @Valid GroupReqDto.Post dto
			){
		
		return new BaseResBody<>(GroupResDto.Create.from(this.groupService.createGroup(dto.getName(), dto.getPassword())),"success").toResponse(HttpStatus.CREATED);
	}
	
	@PostMapping("/{groupId}/members")
	public ResponseEntity<BaseResBody<Void>> postGroup(
			@PathVariable(name = "groupId") Integer groupId,
			@RequestBody @Valid MemberReqDto.Post dto
			){
		this.groupService.addMembers(groupId, dto.getPassword(), dto.getMemberList());
		return new BaseResBody<Void>(null,"s").toResponse(HttpStatus.CREATED);
	}
}
