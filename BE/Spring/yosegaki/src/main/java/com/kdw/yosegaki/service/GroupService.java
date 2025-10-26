package com.kdw.yosegaki.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.kdw.yosegaki.domain.Group;
import com.kdw.yosegaki.domain.Member;
import com.kdw.yosegaki.repository.GroupRepository;
import com.kdw.yosegaki.repository.MemberRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GroupService {

	private final GroupRepository groupRepository;
	private final MemberRepository memberRepository;

	public List<Group> getGroupList(String keyword){
		System.out.println(keyword);
		List<Group> list = new ArrayList<>();
		if(isNumeric(keyword)) {
			Group group = groupRepository.findById(Integer.parseInt(keyword)).orElse(Group.builder().name("no content").build());
			list.add(group);
		}
		else {
			list.add(Group.builder().name("no content").build());
		}
		
		List<Group> nameGroupList = groupRepository.findByNameContaining(keyword);
		if(nameGroupList.size() == 0) {
			list.add(Group.builder().name("no content").build());
		}
		else {
			nameGroupList.stream().forEach((g)->{
				list.add(g);
			});					
		}
		return list;
	}
	
	public Group createGroup(String name, String password) {
		Group group = Group.builder().name(name).password(password).build();
		Group saved = groupRepository.save(group);
		return saved;
	}
	
	public List<Member> getGroupMembers(Integer id, String password) {
		Group saved = this.groupRepository.findById(id).orElseThrow();
		if(!saved.getPassword().equals(password)) {
			throw new RuntimeException();
		}
		return this.memberRepository.findAllByGroup(saved);
	}

	public void addMembers(Integer id, String password, List<String> members) {
		Group saved = this.groupRepository.findById(id).orElseThrow();
		if(!saved.getPassword().equals(password)) {
			throw new RuntimeException();
		}
		List<Member> list = members.stream().map((str)->{
			return Member.builder().name(str).group(saved).build();
		}).toList();
		memberRepository.saveAll(list);
	}
	
	private boolean isNumeric(String str) {
		if(10 < str.length()) {
			return false;
		}
	    if (str == null || str.isEmpty()) return false;
	    for (char c : str.toCharArray()) {
	        if (!Character.isDigit(c)) return false;
	    }
	    return true;
	}
}
