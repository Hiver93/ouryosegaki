package com.kdw.yosegaki.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kdw.yosegaki.domain.Group;
import com.kdw.yosegaki.domain.Member;

@Repository
public interface MemberRepository extends JpaRepository<Member, Integer> {

	List<Member> findAllByGroup(Group group);

}
