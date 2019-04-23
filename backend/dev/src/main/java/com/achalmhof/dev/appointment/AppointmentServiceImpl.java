package com.achalmhof.dev.appointment;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import com.achalmhof.dev.model.AppointmentRequest;
import com.achalmhof.dev.model.AppointmentResponse;
import com.achalmhof.dev.repository.AppointmentRepository;
import com.achalmhof.dev.repository.entity.AppointmentDetails;

@Service
public class AppointmentServiceImpl implements AppointmentService{

    private static final Logger LOGGER = LoggerFactory.getLogger(AppointmentServiceImpl.class);

    private AppointmentRepository appointmentRepository;

    /**
     * @param appointmentRepository
     *            the AppointmentRepository to set
     */
    @Autowired
    public void setAppointmentRepository(AppointmentRepository appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }
	@Override
	@Cacheable(value = "appointmentcache")
	public List<AppointmentResponse> getListofAppointments() {
		LOGGER.info("Service : get List of appointments started");
		List<AppointmentDetails> appointmentDetails = appointmentRepository.findAll();
		List<AppointmentResponse> appointments = new ArrayList<>();
		if(!CollectionUtils.isEmpty(appointmentDetails)){
			appointmentDetails.forEach(appointment -> {
				AppointmentResponse appointmentInfo = new AppointmentResponse();
				appointmentInfo.setName(appointment.getName());
				appointmentInfo.setLocation(appointment.getLocation());
				appointmentInfo.setMessage(appointment.getMessage());
				appointmentInfo.setDate(appointment.getDate());
				appointmentInfo.setTime(appointment.getTime());
				appointments.add(appointmentInfo);
			});
		}
		LOGGER.info("Service : get List of appointments ended");
		return appointments;
	}
	@Override
	public AppointmentResponse getAppointmentByName(String name) {
		LOGGER.info("Service : get appointment by name started");
		AppointmentDetails appointment = appointmentRepository.findByName(name);
		AppointmentResponse appointmentInfo = new AppointmentResponse();
		if(null != appointment){
			appointmentInfo.setName(appointment.getName());
			appointmentInfo.setLocation(appointment.getLocation());
			appointmentInfo.setMessage(appointment.getMessage());
			appointmentInfo.setDate(appointment.getDate());
			appointmentInfo.setTime(appointment.getTime());
		}
		LOGGER.info("Service : get appointment by name ended");
		return appointmentInfo;
	}
	
	@Override
	public AppointmentResponse saveAppointmentDetails(AppointmentRequest appointmentRequest) {
		LOGGER.info("Service : save appointment details started");
		AppointmentDetails appointment =  new AppointmentDetails();
		BeanUtils.copyProperties(appointmentRequest, appointment);
		AppointmentDetails savedDetails = appointmentRepository.save(appointment);
		AppointmentResponse savedAppointment = new AppointmentResponse();
		if(null != savedDetails){
			savedAppointment.setName(savedDetails.getName());
			savedAppointment.setLocation(savedDetails.getLocation());
			savedAppointment.setMessage(savedDetails.getMessage());
			savedAppointment.setDate(savedDetails.getDate());
			savedAppointment.setTime(savedDetails.getTime());
		}
		LOGGER.info("Service : save appointment details ended");
		return savedAppointment;
	}
	
	@Override
	@CachePut(value = "appointmentcache")
	public List<AppointmentResponse> saveAllAppointmentDetails(List<AppointmentRequest> appointmentRequest) {
		LOGGER.info("Service : save appointment details started");
		List<AppointmentDetails> appointmentlist =  new ArrayList<>();
		for(AppointmentRequest appointment : appointmentRequest){
			AppointmentDetails appointmentDetails = new AppointmentDetails();
			BeanUtils.copyProperties(appointment, appointmentDetails);
			appointmentlist.add(appointmentDetails);
		}
		List<AppointmentDetails> savedDetails = appointmentRepository.saveAll(appointmentlist);
		List<AppointmentResponse> savedAppointment = new ArrayList<>();
		if(!CollectionUtils.isEmpty(savedDetails)){
			savedDetails.forEach(saved -> {
				AppointmentResponse savedResponse = new AppointmentResponse();
				savedResponse.setName(saved.getName());
				savedResponse.setLocation(saved.getLocation());
				savedResponse.setMessage(saved.getMessage());
				savedResponse.setDate(saved.getDate());
				savedResponse.setTime(saved.getTime());
				savedAppointment.add(savedResponse);
			});
		}

		LOGGER.info("Service : save appointment details ended");
		return savedAppointment;
	}

}
