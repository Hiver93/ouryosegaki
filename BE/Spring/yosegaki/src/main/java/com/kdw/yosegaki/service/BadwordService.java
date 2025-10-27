package com.kdw.yosegaki.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.kdw.yosegaki.domain.badword.BadwordTrie;
import com.kdw.yosegaki.error.ErrorCode;
import com.kdw.yosegaki.error.YosegakiException;

@Service
public class BadwordService {

	private BadwordTrie trie = new BadwordTrie(List.of("悪い言葉","わるい言葉","わるいことば","わるい言葉"));
	
	public BadwordService(){
		trie.computeFailure();
	}
	
	public void checkBadword(String str) {
		String badword = trie.findBadword(str);
		if(badword != null) {
			throw new YosegakiException(ErrorCode.UNSUPPORTED_WORD, badword);
		}
	}
	
}
