package com.achalmhof.dev.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.achalmhof.dev.repository.entity.UserLogin;

public interface LoginRepository extends JpaRepository<UserLogin, Long>{

	public UserLogin findByUserName(String userName);

}

