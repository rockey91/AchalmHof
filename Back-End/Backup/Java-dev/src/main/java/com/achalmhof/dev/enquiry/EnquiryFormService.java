package com.achalmhof.dev.enquiry;

import java.util.List;

import com.achalmhof.dev.model.EnquiryRequest;
import com.achalmhof.dev.model.EnquiryResponse;



public interface EnquiryFormService {

	public List<EnquiryResponse> getListofUsers();
	
	public EnquiryResponse getRegisteredUserByName(String name);
	
	public EnquiryResponse saveUserDetails(EnquiryRequest enquiryRequest);
}
