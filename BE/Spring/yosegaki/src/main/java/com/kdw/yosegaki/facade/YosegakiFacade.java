package com.kdw.yosegaki.facade;

import org.springframework.stereotype.Service;

import com.kdw.yosegaki.dto.YosegakiReqDto;
import com.kdw.yosegaki.dto.YosegakiResDto;
import com.kdw.yosegaki.service.BadwordService;
import com.kdw.yosegaki.service.YosegakiService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class YosegakiFacade {

	private final YosegakiService yosegakiService;
	private final BadwordService badwordService;
	
	public void createYosegaki(Integer memberId, YosegakiReqDto.Post dto) {
		this.badwordService.checkBadword(dto.getContent());
		this.yosegakiService.postYosegaki(memberId, dto.getContent(), dto.getPassword());
	}
	
	public YosegakiResDto.YosegakiList getYosegakiList(Integer memberId, YosegakiReqDto.Get dto) {
		return YosegakiResDto.YosegakiList.from(this.yosegakiService.getYosegakiList(memberId, dto.getPassword()));
	}
}
