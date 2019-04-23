package com.achalmhof.dev.events;

import java.util.List;

import com.achalmhof.dev.model.EventRequest;
import com.achalmhof.dev.model.EventResponse;

public interface EventService {

	public List<EventResponse> getListofEvents();
	
	public EventResponse getRegisteredEventByName(String name);
	
	public EventResponse saveEventDetails(EventRequest enquiryRequest);
	
	public EventResponse deleteEvent(long eventId);
	
	public EventResponse updateEvent(EventRequest enquiryRequest, long eventId);

}
