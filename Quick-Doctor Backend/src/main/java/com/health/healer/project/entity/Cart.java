package com.health.healer.project.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Cart 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int c_id;
	@Column(nullable = false)
	private int mid;
	@Column(nullable = false)
	private String m_name;
	@Column(nullable = false)
	private int pid;
	@Column(nullable = false)
	private int u_id;
	@Column(nullable = false)
	private String u_user_name;
	@Column(nullable = false)
	private String product_Name;
	@Column(nullable = false)
	private int product_price;
	@Column(nullable = false)
	private int quantity;
	@Column(nullable = false)
	private String b_address;
	
	
	public int getC_id() {
		return c_id;
	}
	public void setC_id(int c_id) {
		this.c_id = c_id;
	}
	public int getMid() {
		return mid;
	}
	public void setMid(int mid) {
		this.mid = mid;
	}
	public String getM_name() {
		return m_name;
	}
	public void setM_name(String m_name) {
		this.m_name = m_name;
	}
	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
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
	public String getProduct_Name() {
		return product_Name;
	}
	public void setProduct_Name(String product_Name) {
		this.product_Name = product_Name;
	}
	public int getProduct_price() {
		return product_price;
	}
	public void setProduct_price(int product_price) {
		this.product_price = product_price;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public String getB_address() {
		return b_address;
	}
	public void setB_address(String b_address) {
		this.b_address = b_address;
	}
	@Override
	public String toString() {
		return "Cart [c_id=" + c_id + ", mid=" + mid + ", m_name=" + m_name + ", pid=" + pid + ", u_id=" + u_id
				+ ", u_user_name=" + u_user_name + ", product_Name=" + product_Name + ", product_price=" + product_price
				+ ", quantity=" + quantity + ", b_address=" + b_address + "]";
	}
	
	
	

	
	

}
