package com.achalmhof.dev.events;

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

@RestController
@RequestMapping("/event")
public class EventController {

	 private static final Logger LOGGER = LoggerFactory.getLogger(EventController.class);

		@Autowired
		private EventService eventService;
		
		@RequestMapping("/getListOfRegisteredEvents")
		public List<EventResponse> geAllRegisteredUserDetails(){
			LOGGER.info("Controller: getting list of events started");
			List<EventResponse> listOfEvents = eventService.getListofEvents();
			LOGGER.info("Contoller: getting list of events ended");
			return listOfEvents;
		}
		
		@RequestMapping("/getRegisteredUserByEvent/{eventName}")
		public EventResponse getRegisteredUserByName(@PathVariable String eventName){
			LOGGER.info("Controller: getting registered Event by name started");
			EventResponse registeredEvent = eventService.getRegisteredEventByName(eventName);
			LOGGER.info("Contoller: getting registered Event by name ended");
			return registeredEvent;
		}
		
		@RequestMapping(value = "/saveEventDetails" , method = RequestMethod.POST)
		public EventResponse saveUserDetails(@Valid @RequestBody EventRequest request){
			LOGGER.info("Controller: saving event details started");
			EventResponse savedEvent = eventService.saveEventDetails(request);
			LOGGER.info("Controller: saving event details ended");
			return savedEvent;
		}
		
		@RequestMapping(value = "/deleteEventDetails", method = RequestMethod.DELETE)
		public EventResponse deleteEventDetails(@PathVariable long eventId){
			LOGGER.info("Controller: delete event details started");
			EventResponse deletedEvent = eventService.deleteEvent(eventId);
			LOGGER.info("Controller: delete event details ended");
			return deletedEvent;
		}
		
		
		@RequestMapping(value = "/updateEventDetails/{eventId}", method = RequestMethod.DELETE)
		public EventResponse updateEventDetails(@Valid @RequestBody EventRequest request,
				@PathVariable long eventId){
			LOGGER.info("Controller: update event details started");
			EventResponse updatedEvent = eventService.updateEvent(request, eventId);
			LOGGER.info("Controller: update event details ended");
			return updatedEvent;
		}
}
