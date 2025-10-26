package com.kdw.yosegaki.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.kdw.yosegaki.domain.Group;
import com.kdw.yosegaki.domain.Member;
import com.kdw.yosegaki.domain.Yosegaki;
import com.kdw.yosegaki.repository.GroupRepository;
import com.kdw.yosegaki.repository.MemberRepository;
import com.kdw.yosegaki.repository.YosegakiRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class YosegakiService {
	private final YosegakiRepository yosegakiRepository;
	private final MemberRepository memberRepository;
	private final GroupRepository groupRepository;
	
	public void postYosegaki(Integer memberId, String content, String password) {
		Member member = memberRepository.findById(memberId).orElseThrow();
		Yosegaki yosegaki = Yosegaki.builder().member(member).content(content).build();
		yosegakiRepository.save(yosegaki);
	}
	
	public List<Yosegaki> getYosegakiList(Integer memberId, String password){
		Member member = memberRepository.findById(memberId).orElseThrow();
		Group group = groupRepository.findById(member.getGroup().getId()).orElseThrow();
		if(!group.getPassword().equals(password)) {
			throw new RuntimeException();
		}
		List<Yosegaki> list = yosegakiRepository.findByMember(member);
		return list;
	}
}
