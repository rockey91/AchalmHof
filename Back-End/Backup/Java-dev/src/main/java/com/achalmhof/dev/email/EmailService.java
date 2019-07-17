package com.achalmhof.dev.email;

import java.io.IOException;

import com.achalmhof.dev.model.EmailRequest;
import com.achalmhof.dev.model.EmailResponse;

public interface EmailService {

	public EmailResponse sendEmail(EmailRequest emailRequest) throws IOException;
}
