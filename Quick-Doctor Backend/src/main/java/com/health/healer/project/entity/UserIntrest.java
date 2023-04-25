package com.health.healer.project.entity;


import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

//
//@Entity
//@Table(name = "user_intrest")
//@JsonIgnoreProperties(value = { "handler", "hibernateLazyInitializer", "feildHandler" })
public class UserIntrest {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int ui_id;
	private String u_bp;
	private String u_sugar;

	@Override
	public String toString() {
		return "UserIntrest [ui_id=" + ui_id + ", u_bp=" + u_bp + ", u_sugar=" + u_sugar + "]";
	}

	public int getUi_id() {
		return ui_id;
	}

	public void setUi_id(int ui_id) {
		this.ui_id = ui_id;
	}

	public String getU_bp() {
		return u_bp;
	}

	public void setU_bp(String u_bp) {
		this.u_bp = u_bp;
	}

	public String getU_sugar() {
		return u_sugar;
	}

	public void setU_sugar(String u_sugar) {
		this.u_sugar = u_sugar;
	}

}
