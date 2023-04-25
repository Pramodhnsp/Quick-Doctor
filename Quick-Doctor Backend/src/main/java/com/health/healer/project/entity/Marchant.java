package com.health.healer.project.entity;

import java.util.Arrays;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class Marchant {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int m_id;
	@Column(nullable = false)
	private String m_name;
	@Column(nullable = false, unique = true)
	private String m_email_id;
	@Column(nullable = false)
	private String m_password;
	@Column(nullable = false, unique = true)
	private long m_ph_no;
	@Lob
	@Column(columnDefinition = "MEDIUMBLOB", length = 16777215)
	private byte[] u_image;

	@Override
	public String toString() {
		return "Marchant [m_id=" + m_id + ", m_name=" + m_name + ", m_email_id=" + m_email_id + ", m_password="
				+ m_password + ", m_ph_no=" + m_ph_no + ", u_image=" + Arrays.toString(u_image) + "]";
	}

	public int getM_id() {
		return m_id;
	}

	public void setM_id(int m_id) {
		this.m_id = m_id;
	}

	public String getM_name() {
		return m_name;
	}

	public void setM_name(String m_name) {
		this.m_name = m_name;
	}

	public String getM_email_id() {
		return m_email_id;
	}

	public void setM_email_id(String m_email_id) {
		this.m_email_id = m_email_id;
	}

	public String getM_password() {
		return m_password;
	}

	public void setM_password(String m_password) {
		this.m_password = m_password;
	}

	public long getM_ph_no() {
		return m_ph_no;
	}

	public void setM_ph_no(long m_ph_no) {
		this.m_ph_no = m_ph_no;
	}

	public byte[] getU_image() {
		return u_image;
	}

	public void setU_image(byte[] u_image) {
		this.u_image = u_image;
	}

}
