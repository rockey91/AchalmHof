package com.achalmhof.dev.meeting;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import com.achalmhof.dev.model.EventRequest;
import com.achalmhof.dev.model.EventResponse;
import com.achalmhof.dev.model.MeetingRequest;
import com.achalmhof.dev.model.MeetingResponse;
import com.achalmhof.dev.repository.MeetingRepository;
import com.achalmhof.dev.repository.entity.EventDetails;
import com.achalmhof.dev.repository.entity.MeetingDetails;

@Service
public class MeetingServiceImpl implements MeetingService{

	 private static final Logger LOGGER = LoggerFactory.getLogger(MeetingServiceImpl.class);

     private MeetingRepository meetingRepository;


	/**
	 * @param meetingRepository the meetingRepository to set
	 */
     @Autowired
	public void setMeetingRepository(MeetingRepository meetingRepository) {
		this.meetingRepository = meetingRepository;
	}

	@Override
	public List<MeetingResponse> getListofMeetings() {
		LOGGER.info("Service : get List of meetings started");
		List<MeetingDetails> meetingDetails = meetingRepository.findAll();
		List<MeetingResponse> registeredMeetingDetails = new ArrayList<>();
		if(!CollectionUtils.isEmpty(meetingDetails)){
			meetingDetails.forEach(meeting -> {
				MeetingResponse registeredMeeting = new MeetingResponse();
				registeredMeeting.setName(meeting.getMeetingName());
				registeredMeeting.setLocation(meeting.getLocation());
				registeredMeeting.setDate(meeting.getMeetingDate());
				registeredMeeting.setTime(meeting.getMeetingTime());
				registeredMeeting.setMessage(meeting.getMessage());
				registeredMeetingDetails.add(registeredMeeting);
			});
		}
		LOGGER.info("Service : get List of meetings ended");
		return registeredMeetingDetails;
	}

	@Override
	public MeetingResponse getMeetingByName(String name) {
		LOGGER.info("Service : get registered meeting by name started");
		MeetingDetails meetingDetails = meetingRepository.findByMeetingName(name);
		MeetingResponse registeredMeeting = new MeetingResponse();
		if(null != meetingDetails){
			registeredMeeting.setName(meetingDetails.getMeetingName());
			registeredMeeting.setLocation(meetingDetails.getLocation());
			registeredMeeting.setDate(meetingDetails.getMeetingDate());
			registeredMeeting.setTime(meetingDetails.getMeetingTime());
			registeredMeeting.setMessage(meetingDetails.getMessage());
		}
		LOGGER.info("Service : get registered meeting by name ended");
		return registeredMeeting;
	}

	@Override
	public MeetingResponse saveMeetingDetails(MeetingRequest meetingRequest) {
		LOGGER.info("Service : save meeting details started");
		MeetingDetails meeting =  new MeetingDetails();
		BeanUtils.copyProperties(meetingRequest, meeting);
		meeting.setMeetingName(meetingRequest.getName());
		meeting.setMeetingDate(meetingRequest.getDate());
		meeting.setMeetingTime(meetingRequest.getTime());
		MeetingDetails savedDetails = meetingRepository.save(meeting);
		MeetingResponse savedMeeting = new MeetingResponse();
		if(null != savedMeeting){
			savedMeeting.setName(savedDetails.getMeetingName());
			savedMeeting.setLocation(savedDetails.getLocation());
			savedMeeting.setDate(savedDetails.getMeetingDate());
			savedMeeting.setTime(savedDetails.getMeetingTime());
			savedMeeting.setMessage(savedDetails.getMessage());
		}
		LOGGER.info("Service : save meeting details ended");
		return savedMeeting;
	}
	
	@Override
	public MeetingResponse deleteMeeting(long eventId) {
		LOGGER.info("Service : delete meeting details started");
		MeetingResponse deletedMeeting = new MeetingResponse();
		MeetingDetails meetingDetails = meetingRepository.getOne(eventId);
		if(null != meetingDetails){
			deletedMeeting.setName(meetingDetails.getMeetingName());
			deletedMeeting.setLocation(meetingDetails.getLocation());
			deletedMeeting.setDate(meetingDetails.getMeetingDate());
			deletedMeeting.setTime(meetingDetails.getMeetingTime());
			deletedMeeting.setMessage(meetingDetails.getMessage());
			meetingRepository.delete(meetingDetails);
		}
		LOGGER.info("Service : delete meeting details ended");
		return deletedMeeting;
	}
	
	@Override
	public MeetingResponse updateMeeting(MeetingRequest meetingRequest, long meetingId) {
		LOGGER.info("Service : update meeting details started");
		MeetingResponse updatedMeeting = new MeetingResponse();
		MeetingDetails meetingDetails = meetingRepository.getOne(meetingId);
		if(null != meetingDetails){
			MeetingDetails updatedDetails =  meetingRepository.save(meetingDetails);
			updatedMeeting.setName(updatedDetails.getMeetingName());
			updatedMeeting.setLocation(updatedDetails.getLocation());
			updatedMeeting.setDate(updatedDetails.getMeetingDate());
			updatedMeeting.setTime(updatedDetails.getMeetingTime());
			updatedMeeting.setMessage(updatedDetails.getMessage());
		}
		LOGGER.info("Service : update meeting details ended");
		return updatedMeeting;
	}

}
