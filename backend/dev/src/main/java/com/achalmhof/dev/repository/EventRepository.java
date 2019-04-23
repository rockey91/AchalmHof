package com.achalmhof.dev.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.achalmhof.dev.repository.entity.EventDetails;

public interface EventRepository extends JpaRepository<EventDetails, Long>{

	public EventDetails findByName(String name);

}
