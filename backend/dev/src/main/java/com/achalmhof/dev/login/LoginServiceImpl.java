package com.achalmhof.dev.login;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.achalmhof.dev.model.EventResponse;
import com.achalmhof.dev.model.LoginRequest;
import com.achalmhof.dev.model.LoginResponse;
import com.achalmhof.dev.model.LoginUserResponse;
import com.achalmhof.dev.repository.LoginRepository;
import com.achalmhof.dev.repository.entity.EventDetails;
import com.achalmhof.dev.repository.entity.UserLogin;

@Service
public class LoginServiceImpl implements LoginService{

    private static final Logger LOGGER = LoggerFactory.getLogger(LoginServiceImpl.class);

    private LoginRepository loginRepository;
	
    /**
     * @param loginRepository
     *            the loginRepository to set
     */
    @Autowired
    public void setLoginRepository(LoginRepository loginRepository) {
        this.loginRepository = loginRepository;
    }
    
	@Override
	public LoginUserResponse getRegisteredUserByName(String name) {
		LOGGER.info("Service : get registered user by name started");
		UserLogin loginDetails = loginRepository.findByUserName(name);
		LoginUserResponse loginResponse = new LoginUserResponse();
		if(null != loginDetails){
			loginResponse.setConfirmPwd(loginDetails.getConfirmPwd());
			loginResponse.setLoggedInTime(loginDetails.getLoggedInTime());
			loginResponse.setPassword(loginDetails.getPwd());
			loginResponse.setUserName(loginDetails.getUserName());
			loginResponse.setUserEmail(loginDetails.getUserEmail());
		}
		LOGGER.info("Service : get registered user by name ended");
		return loginResponse;
	}
	
	@Override
	public LoginResponse saveLoginDetails(LoginRequest loginRequest) {
		LOGGER.info("Service : saving user details started");
		UserLogin loggedUser =  new UserLogin();
		BeanUtils.copyProperties(loginRequest, loggedUser);
		UserLogin savedDetails = loginRepository.save(loggedUser);
		LoginResponse loginResponse = new LoginResponse();
		if(null != savedDetails){
			loginResponse.setMessage("Your Login request has saved succesfully");
		}
		LOGGER.info("Service : saving user details ended");
		return loginResponse;	
	}
	
	@Override
	public LoginResponse checkUserLogin(LoginRequest loginRequest){
		UserLogin loginDetails = loginRepository.findByUserName(loginRequest.getUserName());
		LoginResponse loginResponse = new LoginResponse();
		if(null != loginDetails){
			if(loginRequest.getUserName().equalsIgnoreCase(loginDetails.getUserName())
					&& loginRequest.getPwd().equalsIgnoreCase(loginDetails.getPwd())){
			loginResponse.setMessage("Your have saved authenticated");
			}
		}
		return loginResponse;
	}
}
