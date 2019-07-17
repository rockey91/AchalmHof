package com.achalmhof.dev.enquiry;

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

import com.achalmhof.dev.model.EnquiryRequest;
import com.achalmhof.dev.model.EnquiryResponse;


@RestController
@RequestMapping("/enquiry")
public class EnquiryFormController{
	
    private static final Logger LOGGER = LoggerFactory.getLogger(EnquiryFormController.class);

	@Autowired
	private EnquiryFormService enquiryFormService;
	
	@RequestMapping("/getListOfRegisteredUsers")
	public List<EnquiryResponse> geAllRegisteredUserDetails(){
		LOGGER.info("Controller: getting list of users started");
		List<EnquiryResponse> listOfusers = enquiryFormService.getListofUsers();
		LOGGER.info("Contoller: getting list of users ended");
		return listOfusers;
	}
	
	@RequestMapping("getRegisteredUserByName/{name}")
	public EnquiryResponse getRegisteredUserByName(@PathVariable String name){
		LOGGER.info("Controller: getting registered User by name started");
		EnquiryResponse registereduser = enquiryFormService.getRegisteredUserByName(name);
		LOGGER.info("Contoller: getting registered User by name ended");
		return registereduser;
	}
	
	@RequestMapping(value= "/saveUserDetails" , method = RequestMethod.POST)
	public EnquiryResponse saveUserDetails(@Valid @RequestBody EnquiryRequest request){
		LOGGER.info("Controller: saving User Details started");
		EnquiryResponse registereduser = enquiryFormService.saveUserDetails(request);
		LOGGER.info("Controller: saving User Details ended");
		return registereduser;
	}
}
