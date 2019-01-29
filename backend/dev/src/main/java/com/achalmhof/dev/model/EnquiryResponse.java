package com.achalmhof.dev.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class EnquiryResponse {

	@JsonProperty("name")
	private String name;
	@JsonProperty("emailId")
	private String emailId;
	@JsonProperty("eventType")
	private String eventType;
	@JsonProperty("eventDate")
	private String eventDate;
	@JsonProperty("eventSubject")
	private String eventSubject;
	@JsonProperty("noOfGuests")
	private int noOfGuests;
	@JsonProperty("mobileNumber")
	private String mobileNumber;
	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}
	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}
	/**
	 * @return the emailId
	 */
	public String getEmailId() {
		return emailId;
	}
	/**
	 * @param emailId the emailId to set
	 */
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	/**
	 * @return the eventType
	 */
	public String getEventType() {
		return eventType;
	}
	/**
	 * @param eventType the eventType to set
	 */
	public void setEventType(String eventType) {
		this.eventType = eventType;
	}
	/**
	 * @return the eventDate
	 */
	public String getEventDate() {
		return eventDate;
	}
	/**
	 * @param eventDate the eventDate to set
	 */
	public void setEventDate(String eventDate) {
		this.eventDate = eventDate;
	}
	/**
	 * @return the eventSubject
	 */
	public String getEventSubject() {
		return eventSubject;
	}
	/**
	 * @param eventSubject the eventSubject to set
	 */
	public void setEventSubject(String eventSubject) {
		this.eventSubject = eventSubject;
	}
	/**
	 * @return the noOfGuests
	 */
	public int getNoOfGuests() {
		return noOfGuests;
	}
	/**
	 * @param noOfGuests the noOfGuests to set
	 */
	public void setNoOfGuests(int noOfGuests) {
		this.noOfGuests = noOfGuests;
	}
	/**
	 * @return the mobileNumber
	 */
	public String getMobileNumber() {
		return mobileNumber;
	}
	/**
	 * @param mobileNumber the mobileNumber to set
	 */
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "RegisteredUserDetails [name=" + name + ", emailId=" + emailId + ", eventType=" + eventType
				+ ", eventDate=" + eventDate + ", eventSubject=" + eventSubject + ", noOfGuests=" + noOfGuests
				+ ", mobileNumber=" + mobileNumber + "]";
	}
	
	
}
