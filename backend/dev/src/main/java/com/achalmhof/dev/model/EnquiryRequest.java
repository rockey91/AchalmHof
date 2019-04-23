package com.achalmhof.dev.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class EnquiryRequest {

	@JsonProperty("pc_name")
	private String name;
	@JsonProperty("email_address")
	private String emailId;
	@JsonProperty("event_type")
	private String eventType;
	@JsonProperty("event_date")
	private String eventDate;
	@JsonProperty("subject")
	private String eventSubject;
	@JsonProperty("guests_count")
	private int noOfGuests;
	@JsonProperty("mobile_number")
	private String mobileNumber;
	@JsonProperty("message")
	private String message;
	@JsonProperty("request_status")
	private String requestStatus;
	@JsonProperty("venue_id")
	private String venueId;

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
	/**
	 * @return the message
	 */
	public String getMessage() {
		return message;
	}
	/**
	 * @param message the message to set
	 */
	public void setMessage(String message) {
		this.message = message;
	}
	/**
	 * @return the requestStatus
	 */
	public String getRequestStatus() {
		return requestStatus;
	}
	/**
	 * @param requestStatus the requestStatus to set
	 */
	public void setRequestStatus(String requestStatus) {
		this.requestStatus = requestStatus;
	}
	/**
	 * @return the venueId
	 */
	public String getVenueId() {
		return venueId;
	}
	/**
	 * @param venueId the venueId to set
	 */
	public void setVenueId(String venueId) {
		this.venueId = venueId;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "EnquiryRequest [name=" + name + ", emailId=" + emailId + ", eventType=" + eventType + ", eventDate="
				+ eventDate + ", eventSubject=" + eventSubject + ", noOfGuests=" + noOfGuests + ", mobileNumber="
				+ mobileNumber + ", message=" + message + ", requestStatus=" + requestStatus + ", venueId=" + venueId
				+ "]";
	}
	
}
