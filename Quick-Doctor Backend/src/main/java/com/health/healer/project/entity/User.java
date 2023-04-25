package com.health.healer.project.entity;

import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "user_signup")
@JsonIgnoreProperties(value = { "handler", "hibernateLazyInitializer", "feildHandler" })
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int u_id;
	@Column(nullable = false, unique = true)
	private String u_user_name;
	@Column(nullable = false)
	private String u_gender;
	@Column(nullable = false , unique = true)
	private String u_email_id;
	@Column(nullable = false)
	private String u_password;
	@Column(nullable = false)
	private int u_age;
	@Column(nullable = false,unique = true)
	private long u_ph_no;
	@Lob
	@Column(columnDefinition = "MEDIUMBLOB", length = 16777215)
	private byte[] u_image;

	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name = "ua_id")
	private UserAddress UserAddress;

	@Override
	public String toString() {
		return "User [u_id=" + u_id + ", u_user_name=" + u_user_name + ", u_gender=" + u_gender + ", u_email_id="
				+ u_email_id + ", u_password=" + u_password + ", u_age=" + u_age + ", u_ph_no=" + u_ph_no + ", u_image="
				+ Arrays.toString(u_image) + ", UserAddress=" + UserAddress + "]";
	}

	public int getU_id() {
		return u_id;
	}

	public void setU_id(int u_id) {
		this.u_id = u_id;
	}

	public String getU_user_name() {
		return u_user_name;
	}

	public void setU_user_name(String u_user_name) {
		this.u_user_name = u_user_name;
	}

	public String getU_gender() {
		return u_gender;
	}

	public void setU_gender(String u_gender) {
		this.u_gender = u_gender;
	}

	public String getU_email_id() {
		return u_email_id;
	}

	public void setU_email_id(String u_email_id) {
		this.u_email_id = u_email_id;
	}

	public String getU_password() {
		return u_password;
	}

	public void setU_password(String u_password) {
		this.u_password = u_password;
	}

	public int getU_age() {
		return u_age;
	}

	public void setU_age(int u_age) {
		this.u_age = u_age;
	}

	public long getU_ph_no() {
		return u_ph_no;
	}

	public void setU_ph_no(long u_ph_no) {
		this.u_ph_no = u_ph_no;
	}

	public byte[] getU_image() {
		return u_image;
	}

	public void setU_image(byte[] u_image) {
		this.u_image = u_image;
	}

	public UserAddress getUserAddress() {
		return UserAddress;
	}

	public void setUserAddress(UserAddress userAddress) {
		UserAddress = userAddress;
	}

}
