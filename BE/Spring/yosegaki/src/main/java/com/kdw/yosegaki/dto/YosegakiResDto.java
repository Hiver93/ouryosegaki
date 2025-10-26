package com.kdw.yosegaki.dto;

import java.util.List;

import com.kdw.yosegaki.domain.Yosegaki;

public class YosegakiResDto {

	public static record YosegakiList(List<ListItem> list) {
		
		
		public static YosegakiList from(List<Yosegaki> list) {
			return new YosegakiList(list.stream().map(ListItem::from).toList());
		}
		
		private static record ListItem(
				String content
				) {
			private static ListItem from(Yosegaki yosegaki) {
				return new ListItem(yosegaki.getContent());
			}
		}
	}
}
