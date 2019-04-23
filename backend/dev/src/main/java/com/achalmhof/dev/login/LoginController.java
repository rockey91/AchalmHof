package com.achalmhof.dev.login;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.achalmhof.dev.model.LoginRequest;
import com.achalmhof.dev.model.LoginResponse;
import com.achalmhof.dev.model.LoginUserResponse;


@RestController
@RequestMapping("/login")
public class LoginController {

	 	private static final Logger LOGGER = LoggerFactory.getLogger(LoginController.class);

		@Autowired
		private LoginService loginService;
		
		@RequestMapping("/getLoggedUserByName/{name}")
		public LoginUserResponse getRegisteredUserByName(@PathVariable String name){
			LOGGER.info("Controller: getting registered user by name started");
			LoginUserResponse registeredUser = loginService.getRegisteredUserByName(name);
			LOGGER.info("Contoller: getting registered user by name ended");
			return registeredUser;
		}
		
		@RequestMapping(value= "/saveUserLoginDetails" , method = RequestMethod.POST)
		public LoginResponse saveUserLoginDetails(@Valid @RequestBody LoginRequest request){
			LOGGER.info("Controller: saving user Details started");
			LoginResponse savedEvent = loginService.saveLoginDetails(request);
			LOGGER.info("Controller: saving user Details ended");
			return savedEvent;
		}
		
		@RequestMapping(value= "/checkUserLogin" , method = RequestMethod.POST)
		public LoginResponse checkUserLoginDetails(@Valid @RequestBody LoginRequest request){
			LOGGER.info("Controller: saving user Details started");
			LoginResponse savedEvent = loginService.saveLoginDetails(request);
			LOGGER.info("Controller: saving user Details ended");
			return savedEvent;
		}
}
