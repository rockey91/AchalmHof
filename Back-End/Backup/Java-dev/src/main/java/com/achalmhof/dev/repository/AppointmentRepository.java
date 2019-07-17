package com.achalmhof.dev.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.achalmhof.dev.repository.entity.AppointmentDetails;


public interface AppointmentRepository extends JpaRepository<AppointmentDetails, Long>{

	public AppointmentDetails findByName(String name);

}
