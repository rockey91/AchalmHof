package com.achalmhof.dev.meeting;

import java.util.List;

import com.achalmhof.dev.model.MeetingRequest;
import com.achalmhof.dev.model.MeetingResponse;

public interface MeetingService {

	public List<MeetingResponse> getListofMeetings();
	
	public MeetingResponse getMeetingByName(String name);
	
	public MeetingResponse saveMeetingDetails(MeetingRequest meetingRequest);
	
	public MeetingResponse deleteMeeting(long meetingId);
	
	public MeetingResponse updateMeeting(MeetingRequest meetingRequest, long meetingId);


}
