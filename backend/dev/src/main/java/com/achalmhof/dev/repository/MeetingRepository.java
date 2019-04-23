package com.achalmhof.dev.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.achalmhof.dev.repository.entity.MeetingDetails;

public interface MeetingRepository extends JpaRepository<MeetingDetails, Long>{
	
	public MeetingDetails findByMeetingName(String meetingName);

}
