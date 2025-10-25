package com.kdw.yosegaki.dto;

import com.kdw.yosegaki.domain.Yosegaki;

public class YosegakiResDto {

	public static record Content(String content) {
		public static Content from(Yosegaki yosegaki) {
			return new Content(yosegaki.getContent());
		}
	}
}
