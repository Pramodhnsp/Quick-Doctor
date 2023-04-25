package com.health.healer.project.entity;

import com.fasterxml.jackson.annotation.JsonFormat;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;


import java.sql.Time;
import java.util.Date;


@Entity
@Table(name = "patient_schedule")
public class Schedule {


	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int s_id;
	private int d_id;
	private String u_email_id;
	private String d_email_id;

	@Column(name = "date_reserved"  )
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	@Temporal(TemporalType.DATE)
	private Date date_reserved;

	@Column(name = "time_reserved_start" )
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "HH:mm")
	@Temporal(TemporalType.TIME)
	private Date timeReservedStart;

	@Column(name = "time_reserved_end"  )
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "HH:mm")
	@Temporal(TemporalType.TIME)
	private Date timeReservedEnd;



	@Override
	public String toString() {
		return "Schedule [s_id=" + s_id + ", d_id=" + d_id + ", u_email_id=" + u_email_id + ", d_email_id=" + d_email_id
				+ ", date_reserved=" + date_reserved + ", timeReservedStart=" + timeReservedStart + ", timeReservedEnd="
				+ timeReservedEnd + "]";
	}



	public int getS_id() {
		return s_id;
	}



	public void setS_id(int s_id) {
		this.s_id = s_id;
	}



	public int getD_id() {
		return d_id;
	}



	public void setD_id(int d_id) {
		this.d_id = d_id;
	}



	public String getU_email_id() {
		return u_email_id;
	}



	public void setU_email_id(String u_email_id) {
		this.u_email_id = u_email_id;
	}



	public String getD_email_id() {
		return d_email_id;
	}



	public void setD_email_id(String d_email_id) {
		this.d_email_id = d_email_id;
	}



	public Date getDate_reserved() {
		return date_reserved;
	}



	public void setDate_reserved(Date date_reserved) {
		this.date_reserved = date_reserved;
	}



	public Date getTimeReservedStart() {
		return timeReservedStart;
	}



	public void setTimeReservedStart(Date timeReservedStart) {
		this.timeReservedStart = timeReservedStart;
	}



	public Date getTimeReservedEnd() {
		return timeReservedEnd;
	}



	public void setTimeReservedEnd(Date timeReservedEnd) {
		this.timeReservedEnd = timeReservedEnd;
	}
	
	
}
