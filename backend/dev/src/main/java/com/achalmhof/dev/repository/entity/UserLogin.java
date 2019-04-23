package com.achalmhof.dev.repository.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user_login")
public class UserLogin implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private long id;
	private String userName;
	private String userEmail;
	private String pwd;
	private String confirmPwd;
	private String loggedInTime;
	
	public UserLogin(){
		
	}
	
	public UserLogin(String userName, String userEmail, String pwd, String confirmPwd, String loggedInTime){
		super();
		this.userName = userName;
		this.userEmail = userEmail;
		this.pwd = pwd;
		this.confirmPwd = confirmPwd;
		this.loggedInTime = loggedInTime;
	}

	/**
	 * @return the id
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(long id) {
		this.id = id;
	}

	/**
	 * @return the userName
	 */
	@Column(name = "userName", nullable = false)
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
	 * @return the userEmail
	 */
	@Column(name = "userEmail", nullable = false)
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
	 * @return the pwd
	 */
	@Column(name = "pwd", nullable = false)
	public String getPwd() {
		return pwd;
	}

	/**
	 * @param pwd the pwd to set
	 */
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	/**
	 * @return the confirmPwd
	 */
	@Column(name = "confirmpwd", nullable = false)
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
	@Column(name = "loggedInTime", nullable = false)
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
		return "UserLogin [id=" + id + ", userName=" + userName + ", userEmail=" + userEmail + ", pwd=" + pwd
				+ ", confirmPwd=" + confirmPwd + ", loggedInTime=" + loggedInTime + "]";
	}
	
	

}
