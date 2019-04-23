package com.achalmhof.dev.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class EnquireReplyRequest{

	@JsonProperty("request_status")
	private String request_status;
	@JsonProperty("id")
	private long id;
	/**
	 * @return the request_status
	 */
	public String getRequest_status() {
		return request_status;
	}
	/**
	 * @param request_status the request_status to set
	 */
	public void setRequest_status(String request_status) {
		this.request_status = request_status;
	}
	/**
	 * @return the id
	 */
	public long getId() {
		return id;
	}
	/**
	 * @param id the id to set
	 */
	public void setId(long id) {
		this.id = id;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "EnquireReplyRequest [request_status=" + request_status + ", id=" + id + "]";
	}
	
	
	
	}
