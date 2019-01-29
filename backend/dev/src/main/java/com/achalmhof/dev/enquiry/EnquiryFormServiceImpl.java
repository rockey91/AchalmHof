package com.achalmhof.dev.enquiry;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import com.achalmhof.dev.model.EnquiryRequest;
import com.achalmhof.dev.model.EnquiryResponse;
import com.achalmhof.dev.repository.EnquiryRepository;
import com.achalmhof.dev.repository.entity.EnquiryDetails;

@Service
public class EnquiryFormServiceImpl implements EnquiryFormService{

    private static final Logger LOGGER = LoggerFactory.getLogger(EnquiryFormServiceImpl.class);

    private EnquiryRepository enquiryRepository;

    /**
     * @param projectDetailRepository
     *            the projectDetailRepository to set
     */
    @Autowired
    public void setEnquiryRepository(EnquiryRepository enquiryRepository) {
        this.enquiryRepository = enquiryRepository;
    }
	@Override
	public List<EnquiryResponse> getListofUsers() {
		LOGGER.info("Service : get List of users started");
		List<EnquiryDetails> enquiredDetails = enquiryRepository.findAll();
		List<EnquiryResponse> registeredUserDetails = new ArrayList<>();
		if(!CollectionUtils.isEmpty(enquiredDetails)){
			enquiredDetails.forEach(enquiry -> {
				EnquiryResponse registeredDetail = new EnquiryResponse();
				registeredDetail.setName(enquiry.getName());
				registeredDetail.setEmailId(enquiry.getEmailId());
				registeredDetail.setEventDate(enquiry.getEventDate());
				registeredDetail.setEventSubject(enquiry.getEventSubject());
				registeredDetail.setEventType(enquiry.getEventType());
				registeredDetail.setMobileNumber(enquiry.getMobileNumber());
				registeredDetail.setNoOfGuests(enquiry.getNoOfGuests());
				registeredUserDetails.add(registeredDetail);
			});
		}
		LOGGER.info("Service : get List of users ended");
		return registeredUserDetails;
	}
	@Override
	public EnquiryResponse getRegisteredUserByName(String name) {
		LOGGER.info("Service : get registered user by name started");
		EnquiryDetails enquiredDetails = enquiryRepository.findByName(name);
		EnquiryResponse registeredUser = new EnquiryResponse();
		if(null != enquiredDetails){
			registeredUser.setName(enquiredDetails.getName());
			registeredUser.setEmailId(enquiredDetails.getEmailId());
			registeredUser.setEventDate(enquiredDetails.getEventDate());
			registeredUser.setEventSubject(enquiredDetails.getEventSubject());
			registeredUser.setEventType(enquiredDetails.getEventType());
			registeredUser.setMobileNumber(enquiredDetails.getMobileNumber());
			registeredUser.setNoOfGuests(enquiredDetails.getNoOfGuests());
		}
		LOGGER.info("Service : get registered user by name ended");
		return registeredUser;
	}
	@Override
	public EnquiryResponse saveUserDetails(EnquiryRequest enquiryRequest) {
		LOGGER.info("Service : saving user details started");
		EnquiryDetails enquiredUser =  new EnquiryDetails();
		enquiredUser.setName(enquiryRequest.getName());
		enquiredUser.setEmailId(enquiryRequest.getEmailId());
		enquiredUser.setEventDate(enquiryRequest.getEventDate());
		enquiredUser.setEventSubject(enquiryRequest.getEventSubject());
		enquiredUser.setEventType(enquiryRequest.getEventType());
		enquiredUser.setMobileNumber(enquiryRequest.getMobileNumber());
		enquiredUser.setNoOfGuests(enquiryRequest.getNoOfGuests());
		EnquiryDetails savedDetails = enquiryRepository.save(enquiredUser);
		EnquiryResponse registeredUser = new EnquiryResponse();
		if(null != savedDetails){
			registeredUser.setName(savedDetails.getName());
			registeredUser.setEmailId(savedDetails.getEmailId());
			registeredUser.setEventDate(savedDetails.getEventDate());
			registeredUser.setEventSubject(savedDetails.getEventSubject());
			registeredUser.setEventType(savedDetails.getEventType());
			registeredUser.setMobileNumber(savedDetails.getMobileNumber());
			registeredUser.setNoOfGuests(savedDetails.getNoOfGuests());
		}
		LOGGER.info("Service : saving user details ended");
		return registeredUser;
	}

}
