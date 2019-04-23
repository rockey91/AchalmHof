package com.achalmhof.dev.events;

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
import com.achalmhof.dev.repository.EventRepository;
import com.achalmhof.dev.repository.entity.EventDetails;

@Service
public class EventServiceImpl implements EventService{
	
	 private static final Logger LOGGER = LoggerFactory.getLogger(EventServiceImpl.class);

     private EventRepository eventRepository;

	/**
	 * @param enquiryRepository the enquiryRepository to set
	 */
	@Autowired
	public void setEventRepository(EventRepository eventRepository) {
		this.eventRepository = eventRepository;
	}

	@Override
	public List<EventResponse> getListofEvents() {
		LOGGER.info("Service : get List of Events started");
		List<EventDetails> eventDetails = eventRepository.findAll();
		List<EventResponse> registeredEventDetails = new ArrayList<>();
		if(!CollectionUtils.isEmpty(eventDetails)){
			eventDetails.forEach(event -> {
				EventResponse registeredDetail = new EventResponse();
				registeredDetail.setName(event.getName());
				registeredDetail.setEventDate(event.getEventDate());
				registeredDetail.setEventType(event.getEventType());
				registeredDetail.setMessage(event.getEventName());
				registeredEventDetails.add(registeredDetail);
			});
		}
		LOGGER.info("Service : get List of Events ended");
		return registeredEventDetails;
	}

	@Override
	public EventResponse getRegisteredEventByName(String name) {
		LOGGER.info("Service : get registered event by name started");
		EventDetails eventDetails = eventRepository.findByName(name);
		EventResponse registeredEvent = new EventResponse();
		if(null != eventDetails){
			registeredEvent.setName(eventDetails.getName());
			registeredEvent.setEventDate(eventDetails.getEventDate());
			registeredEvent.setEventType(eventDetails.getEventType());
			registeredEvent.setMessage(eventDetails.getEventName());
		}
		LOGGER.info("Service : get registered event by name ended");
		return registeredEvent;
	}

	@Override
	public EventResponse saveEventDetails(EventRequest eventRequest) {
		LOGGER.info("Service : save event details started");
		EventDetails appointment =  new EventDetails();
		BeanUtils.copyProperties(eventRequest, appointment);
		appointment.setEventName(eventRequest.getMessage());
		EventDetails savedDetails = eventRepository.save(appointment);
		EventResponse savedEvent = new EventResponse();
		if(null != savedDetails){
			savedEvent.setName(savedDetails.getName());
			savedEvent.setEventDate(savedDetails.getEventDate());
			savedEvent.setEventType(savedDetails.getEventType());
			savedEvent.setMessage(savedDetails.getEventName());
		}
		LOGGER.info("Service : save event details ended");
		return savedEvent;
	}

	@Override
	public EventResponse deleteEvent(long eventId) {
		LOGGER.info("Service : delete event details started");
		EventResponse deleteEvent = new EventResponse();
		EventDetails eventDetails = eventRepository.getOne(eventId);
		if(null != eventDetails){
			deleteEvent.setName(eventDetails.getName());
			deleteEvent.setEventDate(eventDetails.getEventDate());
			deleteEvent.setEventType(eventDetails.getEventType());
			deleteEvent.setMessage(eventDetails.getEventName());
		   eventRepository.delete(eventDetails);
		}
		LOGGER.info("Service : delete event details ended");
		return deleteEvent;
	}

	@Override
	public EventResponse updateEvent(EventRequest eventRequest, long eventId) {
		LOGGER.info("Service : update event details started");
		EventResponse updatedEvent = new EventResponse();
		EventDetails eventDetails = eventRepository.getOne(eventId);
		if(null != eventDetails){
			EventDetails updatedDetails =  eventRepository.save(eventDetails);
			updatedEvent.setName(updatedDetails.getName());
			updatedEvent.setEventDate(updatedDetails.getEventDate());
			updatedEvent.setEventType(updatedDetails.getEventType());
			updatedEvent.setMessage(updatedDetails.getEventName());
		}
		LOGGER.info("Service : update event details ended");
		return updatedEvent;
	}
}
