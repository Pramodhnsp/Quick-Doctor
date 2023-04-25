package com.health.healer.project.entity;

import java.util.Arrays;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table(name = "Doctor_SignUp")
public class Doctor {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int d_id;
	@Column(nullable = false)
	private String d_name;
	@Column(nullable = false, unique = true)
	private long d_ph_no;
	@Column(nullable = false, unique = true)
	private String d_e_mail;
	@Column(nullable = false)
	private String d_password;
	@Column(nullable = false)
	private String d_spec;
	@Column(nullable = false)
	private String d_age;
	@Column(nullable = false, unique = true)
	private String d_licence;
	@Lob
	@Column(columnDefinition = "MEDIUMBLOB", length = 16777215)
	private byte[] d_image;

	@Override
	public String toString() {
		return "Doctor [d_id=" + d_id + ", d_name=" + d_name + ", d_ph_no=" + d_ph_no + ", d_e_mail=" + d_e_mail
				+ ", d_password=" + d_password + ", d_spec=" + d_spec + ", d_age=" + d_age + ", d_licence=" + d_licence
				+ ", d_image=" + Arrays.toString(d_image) + "]";
	}

	public int getD_id() {
		return d_id;
	}

	public void setD_id(int d_id) {
		this.d_id = d_id;
	}

	public String getD_name() {
		return d_name;
	}

	public void setD_name(String d_name) {
		this.d_name = d_name;
	}

	public long getD_ph_no() {
		return d_ph_no;
	}

	public void setD_ph_no(long d_ph_no) {
		this.d_ph_no = d_ph_no;
	}

	public String getD_e_mail() {
		return d_e_mail;
	}

	public void setD_e_mail(String d_e_mail) {
		this.d_e_mail = d_e_mail;
	}

	public String getD_password() {
		return d_password;
	}

	public void setD_password(String d_password) {
		this.d_password = d_password;
	}

	public String getD_spec() {
		return d_spec;
	}

	public void setD_spec(String d_spec) {
		this.d_spec = d_spec;
	}

	public String getD_age() {
		return d_age;
	}

	public void setD_age(String d_age) {
		this.d_age = d_age;
	}

	public String getD_licence() {
		return d_licence;
	}

	public void setD_licence(String d_licence) {
		this.d_licence = d_licence;
	}

	public byte[] getD_image() {
		return d_image;
	}

	public void setD_image(byte[] d_image) {
		this.d_image = d_image;
	}

}
