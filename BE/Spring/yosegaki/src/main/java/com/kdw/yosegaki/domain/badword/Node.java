package com.kdw.yosegaki.domain.badword;

import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

public class Node {

	private Map<Character, Node> nodes = new HashMap<>();
	private String pattern;
	private Node fail;
	public char c;
	
	public void addChar(char ch) {
		if(!nodes.containsKey(ch)) {
			nodes.put(ch, new Node());
			nodes.get(ch).c = ch;
		}
	}
	
	public boolean isExists(char ch) {
		return nodes.containsKey(ch);
	}
		
	public Node getNode(char ch) {
		return this.nodes.get(ch);
	}
	
	public void setPattern(String pattern) {
		this.pattern = pattern;
	}
	
	public boolean hasPattern() {
		return this.pattern != null;
	}
	
	public String getPattern() {
		return this.pattern;
	}
	
	public void setFail(Node node) {
		this.fail = node;
	}
	
	public Node getFail() {
		return fail;
	}
	
	public Set<Entry<Character, Node>> getNodesEntrySet(){
		return this.nodes.entrySet();
	}
}
