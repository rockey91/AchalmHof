package com.achalmhof.dev.meeting;

import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.achalmhof.dev.model.EventRequest;
import com.achalmhof.dev.model.EventResponse;
import com.achalmhof.dev.model.MeetingRequest;
import com.achalmhof.dev.model.MeetingResponse;

@RestController
@RequestMapping("/meeting")
public class MeetingController {

	private static final Logger LOGGER = LoggerFactory.getLogger(MeetingController.class);

	@Autowired
	private MeetingService meetingService;
	
	@RequestMapping("/getListOfMeeting")
	public List<MeetingResponse> geAllRegisteredUserDetails(){
		LOGGER.info("Controller: getting list of meetings started");
		List<MeetingResponse> listOfMeetings = meetingService.getListofMeetings();
		LOGGER.info("Contoller: getting list of meetings ended");
		return listOfMeetings;
	}
	
	@RequestMapping("getMeetingByName/{name}")
	public MeetingResponse getMeetingByName(@PathVariable String meetingName){
		LOGGER.info("Controller: getting registered meeting by name started");
		MeetingResponse registeredMeeting = meetingService.getMeetingByName(meetingName);
		LOGGER.info("Contoller: getting registered meeting by name ended");
		return registeredMeeting;
	}
	
	@RequestMapping(value= "/saveMeetingDetails" , method = RequestMethod.POST)
	public MeetingResponse saveUserDetails(@Valid @RequestBody MeetingRequest request){
		LOGGER.info("Controller: saving meeting Details started");
		MeetingResponse savedMeeting = meetingService.saveMeetingDetails(request);
		LOGGER.info("Controller: saving meeting Details ended");
		return savedMeeting;
	}

	
	@RequestMapping(value = "/deleteMeetingDetails", method = RequestMethod.DELETE)
	public MeetingResponse deleteMeetingDetails(@PathVariable long meetingId){
		LOGGER.info("Controller: delete meeting details started");
		MeetingResponse deletedEvent = meetingService.deleteMeeting(meetingId);
		LOGGER.info("Controller: delete meeting details ended");
		return deletedEvent;
	}
	
	@RequestMapping(value = "/updateMeetingDetails/{meetingId}", method = RequestMethod.DELETE)
	public MeetingResponse updateMeetingDetails(@Valid @RequestBody MeetingRequest request,
			@PathVariable long meetingId){
		LOGGER.info("Controller: update meeting details started");
		MeetingResponse updateMeeting = meetingService.updateMeeting(request, meetingId);
		LOGGER.info("Controller: update meeting details ended");
		return updateMeeting;
	}
}
