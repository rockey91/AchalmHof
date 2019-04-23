package com.achalmhof.dev.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class LoginUserResponse {

	@JsonProperty("userEmail")
	private String userEmail;
	@JsonProperty("user")
	private String userName;
	@JsonProperty("pwd")
	private String password;
	@JsonProperty("confirmPwd")
	private String confirmPwd;
	@JsonProperty("loggedInTime")
	private String loggedInTime;

	
	/**
	 * @return the userEmail
	 */
	public String getUserEmail() {
		return userEmail;
	}
	/**
	 * @param userEmail the userEmail to set
	 */
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	/**
	 * @return the userName
	 */
	public String getUserName() {
		return userName;
	}
	/**
	 * @param userName the userName to set
	 */
	public void setUserName(String userName) {
		this.userName = userName;
	}
	/**
	 * @return the password
	 */
	public String getPassword() {
		return password;
	}
	/**
	 * @param password the password to set
	 */
	public void setPassword(String password) {
		this.password = password;
	}
	/**
	 * @return the confirmPwd
	 */
	public String getConfirmPwd() {
		return confirmPwd;
	}
	/**
	 * @param confirmPwd the confirmPwd to set
	 */
	public void setConfirmPwd(String confirmPwd) {
		this.confirmPwd = confirmPwd;
	}
	/**
	 * @return the loggedInTime
	 */
	public String getLoggedInTime() {
		return loggedInTime;
	}
	/**
	 * @param loggedInTime the loggedInTime to set
	 */
	public void setLoggedInTime(String loggedInTime) {
		this.loggedInTime = loggedInTime;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "LoginUserResponse [userEmail=" + userEmail + ", userName=" + userName + ", password=" + password
				+ ", confirmPwd=" + confirmPwd + ", loggedInTime=" + loggedInTime + "]";
	}

	
}
