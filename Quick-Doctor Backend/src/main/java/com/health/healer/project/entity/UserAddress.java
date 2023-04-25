package com.health.healer.project.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "user_address")
@JsonIgnoreProperties(value = { "handler", "hibernateLazyInitializer", "feildHandler" })
public class UserAddress {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int ua_id;
	@Column(nullable = false)
	private String street;
	@Column(nullable = false)
	private String area;
	@Column(nullable = false)
	private String door_no;
	@Column(nullable = false)
	private String city;
	@Column(nullable = false)
	private String state;
	@Column(nullable = false)
	private long pincode;
	@Column(nullable = false)
	private String country;

	@Override
	public String toString() {
		return "UserAddress [ua_id=" + ua_id + ", street=" + street + ", area=" + area + ", door_no=" + door_no
				+ ", city=" + city + ", state=" + state + ", pincode=" + pincode + ", country=" + country + "]";
	}

	public int getUa_id() {
		return ua_id;
	}

	public void setUa_id(int ua_id) {
		this.ua_id = ua_id;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getDoor_no() {
		return door_no;
	}

	public void setDoor_no(String door_no) {
		this.door_no = door_no;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public long getPincode() {
		return pincode;
	}

	public void setPincode(long pincode) {
		this.pincode = pincode;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

}
