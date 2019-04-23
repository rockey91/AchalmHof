package com.achalmhof.dev.appointment;

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

import com.achalmhof.dev.model.AppointmentRequest;
import com.achalmhof.dev.model.AppointmentResponse;

@RestController
@RequestMapping("/appointment")
public class AppointmentController {

	 private static final Logger LOGGER = LoggerFactory.getLogger(AppointmentController.class);

		@Autowired
		private AppointmentService appointmentService;
		
	    @RequestMapping("/hello")
	    String hello() {
	        return "Hello World!";
	    }
	    
		@RequestMapping("/getListOfAppointments")
		public List<AppointmentResponse> geAllAppointmentDetails(){
			LOGGER.info("Controller: getting list of appointment started");
			List<AppointmentResponse> listOfAppointments = appointmentService.getListofAppointments();
			LOGGER.info("Controller: getting list of appointment ended");
			return listOfAppointments;
		}
		
		@RequestMapping("getAppointmentByName/{name}")
		public AppointmentResponse getAppointmentByName(@PathVariable String name){
			LOGGER.info("Controller: getting appointment by name started");
			AppointmentResponse registereduser = appointmentService.getAppointmentByName(name);
			LOGGER.info("Controller: getting appointment by name ended");
			return registereduser;
		}
		
		@RequestMapping(value= "/saveAppointmentDetails" , method = RequestMethod.POST)
		public AppointmentResponse saveUserDetails(@Valid @RequestBody AppointmentRequest request){
			LOGGER.info("Controller: saving Appointment Details started");
			AppointmentResponse registereduser = appointmentService.saveAppointmentDetails(request);
			LOGGER.info("Controller: saving Appointment Details ended");
			return registereduser;
		}
		
		@RequestMapping(value= "/saveAllAppointmentDetails" , method = RequestMethod.POST)
		public List<AppointmentResponse> saveAllUserDetails(@Valid @RequestBody List<AppointmentRequest> request){
			LOGGER.info("Controller: saving Appointment Details started");
			List<AppointmentResponse> registereduser = appointmentService.saveAllAppointmentDetails(request);
			LOGGER.info("Controller: saving Appointment Details ended");
			return registereduser;
		}
}
