package com.kdw.yosegaki.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kdw.yosegaki.domain.Group;

@Repository
public interface GroupRepository extends JpaRepository<Group, Integer>{
	List<Group> findByNameContaining(String keyword);
}
