package com.achalmhof.dev.repository.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "admin_meetings")
public class MeetingDetails implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private long id;
	private String meetingName;
	private String meetingDate;
	private String meetingTime;
	private String location;
	private String message;
	
	public MeetingDetails(){
		
	}
	
	/**
	 * 
	 * @param name
	 * @param date
	 * @param time
	 * @param location
	 * @param message
	 */
	public MeetingDetails(String meetingName, String meetingDate, String meetingTime, String location, String message){
		this.meetingName = meetingName;
		this.meetingDate = meetingDate;
		this.message = message;
		this.meetingTime = meetingTime;
		this.location = location;
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
	 * @return the meetingName
	 */
	@Column(name = "meetingName", nullable = true)
	public String getMeetingName() {
		return meetingName;
	}

	/**
	 * @param meetingName the meetingName to set
	 */
	public void setMeetingName(String meetingName) {
		this.meetingName = meetingName;
	}

	/**
	 * @return the meetingDate
	 */
	@Column(name = "meetingDate", nullable = true)
	public String getMeetingDate() {
		return meetingDate;
	}

	/**
	 * @param meetingDate the meetingDate to set
	 */
	public void setMeetingDate(String meetingDate) {
		this.meetingDate = meetingDate;
	}

	/**
	 * @return the meetingTime
	 */
	@Column(name = "meetingTime", nullable = true)
	public String getMeetingTime() {
		return meetingTime;
	}

	/**
	 * @param meetingTime the meetingTime to set
	 */
	public void setMeetingTime(String meetingTime) {
		this.meetingTime = meetingTime;
	}

	/**
	 * @return the location
	 */
	@Column(name = "location", nullable = true)
	public String getLocation() {
		return location;
	}

	/**
	 * @param location the location to set
	 */
	public void setLocation(String location) {
		this.location = location;
	}

	/**
	 * @return the message
	 */
	@Column(name = "message", nullable = true)
	public String getMessage() {
		return message;
	}

	/**
	 * @param message the message to set
	 */
	public void setMessage(String message) {
		this.message = message;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "MeetingDetails [id=" + id + ", meetingName=" + meetingName + ", meetingDate=" + meetingDate
				+ ", meetingTime=" + meetingTime + ", location=" + location + ", message=" + message + "]";
	}


}
