package com.kdw.yosegaki.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kdw.yosegaki.domain.Member;
import com.kdw.yosegaki.domain.Yosegaki;

@Repository
public interface YosegakiRepository extends JpaRepository<Yosegaki, Integer>{
	List<Yosegaki> findByMember(Member memeber);
}
