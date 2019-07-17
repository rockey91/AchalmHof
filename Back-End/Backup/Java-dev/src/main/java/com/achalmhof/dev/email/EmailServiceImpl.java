package com.achalmhof.dev.email;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.achalmhof.dev.model.EmailRequest;
import com.achalmhof.dev.model.EmailResponse;
import com.sendgrid.Content;
import com.sendgrid.Email;
import com.sendgrid.Mail;
import com.sendgrid.Method;
import com.sendgrid.Request;
import com.sendgrid.Response;
import com.sendgrid.SendGrid;

@Service
public class EmailServiceImpl implements EmailService{

	 private static final Logger LOGGER = LoggerFactory.getLogger(EmailServiceImpl.class);

	@Override
	public EmailResponse sendEmail(EmailRequest emailRequest) throws IOException {
		LOGGER.info("Service: sending email started");
		EmailResponse emailResponse = new EmailResponse();
		Email from = new Email(emailRequest.getFrom());
	    String subject = emailRequest.getSubject();
	    Email to = new Email(emailRequest.getToEmail());
	    Content content = new Content("text/plain", emailRequest.getContent());
	    Mail mail = new Mail(from, subject, to, content);
	    SendGrid sg = new SendGrid(System.getenv("SENDGRID_API_KEY"));
	    Request request = new Request();
	    try {
	      request.setMethod(Method.POST);
	      request.setEndpoint("mail/send");
	      request.setBody(mail.build());
	      Response response = sg.api(request);
	      emailResponse.setResponseBody(response.getBody());
	      emailResponse.setResponseCode(response.getStatusCode());
	      emailResponse.setHeaders(response.getHeaders());
	      System.out.println(response.getStatusCode());
	      System.out.println(response.getBody());
	      System.out.println(response.getHeaders());
		  LOGGER.info("Service: sending email ended");
	      return emailResponse;
	    } catch (IOException ex) {
	      throw ex;
	    }
	}

}
