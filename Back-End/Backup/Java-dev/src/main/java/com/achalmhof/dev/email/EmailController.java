package com.achalmhof.dev.email;

import java.io.IOException;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.achalmhof.dev.model.EmailRequest;
import com.achalmhof.dev.model.EmailResponse;


@RestController
@RequestMapping("/email")
public class EmailController {
	
	 private static final Logger LOGGER = LoggerFactory.getLogger(EmailController.class);
	
	@Autowired
	EmailService emailService;

	@PostMapping("/sendEmail")
	public EmailResponse sendEmail(@Valid @RequestBody EmailRequest emailRequest) throws IOException{
		LOGGER.info("Controller: sending email started");
		EmailResponse emailResponse = emailService.sendEmail(emailRequest);
		LOGGER.info("Controller: sending email ended");
		return emailResponse;
		
	}
}
