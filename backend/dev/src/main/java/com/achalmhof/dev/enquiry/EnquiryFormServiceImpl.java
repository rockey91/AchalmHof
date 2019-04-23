package com.achalmhof.dev.enquiry;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import com.achalmhof.dev.email.EmailService;
import com.achalmhof.dev.model.EmailRequest;
import com.achalmhof.dev.model.EmailResponse;
import com.achalmhof.dev.model.EnquireReplyRequest;
import com.achalmhof.dev.model.EnquiryRequest;
import com.achalmhof.dev.model.EnquiryResponse;
import com.achalmhof.dev.repository.EnquiryRepository;
import com.achalmhof.dev.repository.entity.EnquiryDetails;

@Service
public class EnquiryFormServiceImpl implements EnquiryFormService{

    private static final Logger LOGGER = LoggerFactory.getLogger(EnquiryFormServiceImpl.class);

    private EnquiryRepository enquiryRepository;

	@Autowired
	EmailService emailService;
	
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
				registeredDetail.setEnquireId(enquiry.getId());
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
			registeredUser.setEnquireId(enquiredDetails.getId());
		}
		LOGGER.info("Service : get registered user by name ended");
		return registeredUser;
	}
	@Override
	public EnquiryResponse saveUserDetails(EnquiryRequest enquiryRequest) {
		LOGGER.info("Service : saving user details started");
		EnquiryDetails enquiredUser =  new EnquiryDetails();
		BeanUtils.copyProperties(enquiryRequest, enquiredUser);
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
			registeredUser.setRequestStatus(enquiryRequest.getRequestStatus());
			registeredUser.setVenueId(enquiryRequest.getVenueId());
			registeredUser.setMessage("Your Enquiry request has saved succesfully");
		}
		LOGGER.info("Service : saving user details ended");
		return registeredUser;
	}
	@Override
	public EmailResponse sendEnquiryResponse(EnquireReplyRequest enquireReplyRequest) throws IOException {
		LOGGER.info("Controller: sending email started");
		EmailRequest emailRequest = new EmailRequest();
		emailRequest.setContent("Your request has been accepted");
		EnquiryDetails enquiredDetails = enquiryRepository.getOne(enquireReplyRequest.getId());
		emailRequest.setFrom("nikhilsuryam.g08@gmail.com");
		emailRequest.setSubject("Function Hall Enquiry");
		emailRequest.setToEmail("satish.g08@gmail.com");
		EmailResponse emailResponse = emailService.sendEmail(emailRequest);
		LOGGER.info("Controller: sending email ended");
		return emailResponse;
	}

}
