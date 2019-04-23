package com.achalmhof.dev.login;

import com.achalmhof.dev.model.LoginRequest;
import com.achalmhof.dev.model.LoginResponse;
import com.achalmhof.dev.model.LoginUserResponse;

public interface LoginService {

	public LoginResponse saveLoginDetails(LoginRequest loginRequest);
	
	public LoginUserResponse getRegisteredUserByName(String name);
	
	public LoginResponse checkUserLogin(LoginRequest loginRequest);

}
