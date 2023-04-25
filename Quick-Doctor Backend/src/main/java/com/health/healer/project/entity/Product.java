package com.health.healer.project.entity;

import java.util.Arrays;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int pid;
	@Column(nullable = false)
	private String product_name;
	@Column(nullable = true)
	private String product_lic;
	@Column(nullable = true)
	private int product_price;
	@Column(nullable = true)
	private String product_Desc;
	@Column(nullable = true)
	private long product_qty;
	@Column(nullable = true)
	private int product_rating;
	@Column(nullable = false)
	private int mid;
	

	

	@Lob
	@Column(columnDefinition = "MEDIUMBLOB" ,length=16777215)
	private byte[] product_pic;

	public int getMid() {
		return mid;
	}

	public void setMid(int mid) {
		this.mid = mid;
	}

	public int getPid() {
		return pid;
	}

	public void setPid(int pid) {
		this.pid = pid;
	}

	public String getProduct_name() {
		return product_name;
	}

	public void setProduct_name(String product_name) {
		this.product_name = product_name;
	}

	public String getProduct_lic() {
		return product_lic;
	}

	public void setProduct_lic(String product_lic) {
		this.product_lic = product_lic;
	}

	public int getProduct_price() {
		return product_price;
	}

	public void setProduct_price(int product_price) {
		this.product_price = product_price;
	}

	public String getProduct_Desc() {
		return product_Desc;
	}

	public void setProduct_Desc(String product_Desc) {
		this.product_Desc = product_Desc;
	}

	public long getProduct_qty() {
		return product_qty;
	}

	public void setProduct_qty(long product_qty) {
		this.product_qty = product_qty;
	}

	public int getProduct_rating() {
		return product_rating;
	}

	public void setProduct_rating(int product_rating) {
		this.product_rating = product_rating;
	}

	public byte[] getProduct_pic() {
		return product_pic;
	}

	public void setProduct_pic(byte[] product_pic) {
		this.product_pic = product_pic;
	}

	@Override
	public String toString() {
		return "Product [pid=" + pid + ", product_name=" + product_name + ", product_lic=" + product_lic
				+ ", product_price=" + product_price + ", product_Desc=" + product_Desc + ", product_qty=" + product_qty
				+ ", product_rating=" + product_rating + ", mid=" + mid + ", product_pic="
				+ Arrays.toString(product_pic) + "]";
	}

}
