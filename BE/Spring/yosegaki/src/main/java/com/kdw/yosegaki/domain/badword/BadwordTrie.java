package com.kdw.yosegaki.domain.badword;

import java.util.Collection;
import java.util.Deque;
import java.util.LinkedList;
import java.util.Map.Entry;
import java.util.Set;

public class BadwordTrie {

	private Node root = new Node();
	
	public BadwordTrie(Collection<String> badwords) {
		for(String pattern : badwords) {
			this.addPattern(pattern);
		}
	}
	
	private void addPattern(String pattern) {
		Node cur = root;
		for(int i = 0; i < pattern.length(); ++i) {
			char ch = pattern.charAt(i);
			if(!cur.isExists(ch)) {
				cur.addChar(ch);
			}
			cur = cur.getNode(ch);
		}
		cur.setPattern(pattern);
	}
	
	public void computeFailure() {		
		root.setFail(root);
		Deque<Node> deque = new LinkedList<>();
		deque.addLast(root);
		while(!deque.isEmpty()) {
			Node cur = deque.removeFirst();
			Set<Entry<Character,Node>> set = cur.getNodesEntrySet();
			for(var en : set) {
				char c = en.getKey();
				Node node = en.getValue();
				Node fNode = cur.getFail();
				while(fNode != root) {
					fNode = fNode.getFail();
					if(fNode.isExists(c)) {
						node.setFail(fNode.getNode(c));
						break;
					}
				}
				if(node.getFail() == null) {
					node.setFail(root);
				}
				deque.addLast(node);
			}
		}
		
	}
	
	public String findBadword(String str) {
		char[] charArr = str.toCharArray();
		Node cur = root;
		for(int i = 0; i < charArr.length; ++i) {
			char c = charArr[i];
			if(cur.isExists(c)) {
				cur = cur.getNode(c);
			}
			else {
				while(cur != root) {
					if(cur.getFail().isExists(c)) {
						cur = cur.getFail().getNode(c);
						break;
					}
					cur = cur.getFail();
				}
			}
			
			Node tmp = cur;
			while(tmp != root) {
				if(tmp.hasPattern()) {
					return tmp.getPattern();
				}
				tmp = tmp.getFail();
			}
		}
		
		return null;
	}
}
