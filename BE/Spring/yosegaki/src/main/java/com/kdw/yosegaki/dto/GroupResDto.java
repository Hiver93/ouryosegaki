package com.kdw.yosegaki.dto;

import java.util.ArrayList;
import java.util.List;

import com.kdw.yosegaki.domain.Group;
import com.kdw.yosegaki.domain.Member;

public class GroupResDto {
	
	static public record GroupList(
			List<GroupItem> groupList
			) {
		public static GroupList from(List<Group> list) {
			if(list == null) {
				throw new RuntimeException();
			}
			return new GroupList(list.stream().map(GroupItem::from).toList());
		}
		
		private static record GroupItem(
				Integer id,
				String name
				) {
			private static GroupItem from(Group group) {
				return new GroupItem(group.getId(), group.getName());
			}
		}
	}
	
	static public record GroupDetail(
			List<MemberItem> memberList
			){
		
		public static GroupDetail from(List<Member> list) {
			if(list == null) {
				throw new RuntimeException();
			}
			return new GroupDetail(list.stream().map(MemberItem::from).toList());
		}
		
		private static record MemberItem(
				Integer id,
				String name
				) {
			private static MemberItem from(Member member) {
				return new MemberItem(member.getId(), member.getName());
			}
		}
	}
	
	static public record Create(
			Integer groupId
			) {
		public static Create from(Group group) {
			return new Create(group.getId());
		}
	}
}
