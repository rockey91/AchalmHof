package com.achalmhof.dev.appointment;

import java.util.List;

import com.achalmhof.dev.model.AppointmentRequest;
import com.achalmhof.dev.model.AppointmentResponse;

public interface AppointmentService {

	public List<AppointmentResponse> getListofAppointments();
	
	public AppointmentResponse getAppointmentByName(String name);
	
	public AppointmentResponse saveAppointmentDetails(AppointmentRequest appointmentRequest);
}
