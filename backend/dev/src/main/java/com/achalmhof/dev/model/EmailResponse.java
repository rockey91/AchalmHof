package com.achalmhof.dev.model;

import java.util.Map;

public class EmailResponse {

	private int responseCode;
	private  String responseBody;
	private Map<String, String> headers;
	/**
	 * @return the responseCode
	 */
	public int getResponseCode() {
		return responseCode;
	}
	/**
	 * @param i the responseCode to set
	 */
	public void setResponseCode(int i) {
		this.responseCode = i;
	}
	/**
	 * @return the responseBody
	 */
	public String getResponseBody() {
		return responseBody;
	}
	/**
	 * @param responseBody the responseBody to set
	 */
	public void setResponseBody(String responseBody) {
		this.responseBody = responseBody;
	}
	/**
	 * @return the headers
	 */
	public Map<String, String> getHeaders() {
		return headers;
	}
	/**
	 * @param headers the headers to set
	 */
	public void setHeaders(Map<String, String> headers) {
		this.headers = headers;
	}
	
	
}
