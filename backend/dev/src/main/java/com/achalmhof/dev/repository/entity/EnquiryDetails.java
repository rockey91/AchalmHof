package com.achalmhof.dev.repository.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user_registration")
public class EnquiryDetails implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private long id;
	private String name;
	private String emailId;
	private String eventType;
	private String eventDate;
	private String eventSubject;
	private int noOfGuests;
	private String mobileNumber;

	public EnquiryDetails(){
		
	}
	
	/**
	 * @param name
	 * @param emailId
	 * @param eventType
	 * @param eventDate
	 * @param eventSubject
	 * @param noOfGuests
	 * @param mobileNumber
	 */
	public EnquiryDetails(String name, String emailId, String eventType, String eventDate, String eventSubject,
			int noOfGuests, String mobileNumber) {
		super();
		this.name = name;
		this.emailId = emailId;
		this.eventType = eventType;
		this.eventDate = eventDate;
		this.eventSubject = eventSubject;
		this.noOfGuests = noOfGuests;
		this.mobileNumber = mobileNumber;
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
	 * @return the name
	 */
	@Column(name = "name", nullable = false)
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
	@Column(name = "email_id", nullable = false)
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
	@Column(name = "event_type", nullable = false)
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
	@Column(name = "event_date", nullable = false)
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
	@Column(name = "event_subject", nullable = true)
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
	 * @return the noOfguests
	 */
	@Column(name = "no_of_guests", nullable = true)
	public int getNoOfGuests() {
		return noOfGuests;
	}
	/**
	 * @param noOfguests the noOfguests to set
	 */
	public void setNoOfGuests(int noOfGuests) {
		this.noOfGuests = noOfGuests;
	}
	/**
	 * @return the mobileNumber
	 */
	@Column(name = "mobile_Number", nullable = false)
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
		return "RegistrationDetails [id=" + id + ", name=" + name + ", emailId=" + emailId + ", eventType=" + eventType
				+ ", eventDate=" + eventDate + ", eventSubject=" + eventSubject + ", noOfGuests=" + noOfGuests
				+ ", mobileNumber=" + mobileNumber + "]";
	}
	
	
	
}
