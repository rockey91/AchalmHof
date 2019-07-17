package com.achalmhof.dev.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.achalmhof.dev.repository.entity.EnquiryDetails;

public interface EnquiryRepository extends JpaRepository<EnquiryDetails, Long>{

	public EnquiryDetails findByName(String name);

}
