package com.health.healer.project.serviceImp;

import java.io.IOException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import com.health.healer.project.entity.ImageUtility;
import com.health.healer.project.entity.Product;
import com.health.healer.project.repo.ProductRepo;
import com.health.healer.project.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {
	@Autowired
	ProductRepo repo;

	@Override
	public Product addProduct(MultipartFile product_pic, String product_name, String product_lic, int product_price,
			String product_Desc, int product_qty, int product_rating, int mid) {

		Product p = new Product();
		String filename = StringUtils.cleanPath(product_pic.getOriginalFilename());
		if (filename.contains("..")) {
			System.out.println("Not a valid file");
		}
		try {
			p.setProduct_pic(ImageUtility.compressImage(product_pic.getBytes()));
			p.setProduct_Desc(product_Desc);
			p.setProduct_lic(product_lic);
			p.setProduct_name(product_name);
			p.setProduct_price(product_price);
			p.setProduct_qty(product_qty);
			p.setProduct_rating(product_rating);
			p.setMid(mid);
		} catch (IOException e) {
			e.printStackTrace();
		}

		return repo.save(p);

	}

	@Override
	public Product updateProduct(Product p) {
		Product p1 = repo.findById(p.getPid()).orElse(null);
		p1.setProduct_lic(p.getProduct_lic());
		p1.setProduct_name(p.getProduct_name());
		p1.setProduct_price(p.getProduct_price());
		p1.setProduct_Desc(p.getProduct_Desc());
		return repo.save(p1);
	}

	@Override
	public Product deleteProduct(int pid) {
		Product p1 = repo.findById(pid).orElse(null);
		repo.deleteById(pid);
		return p1;
	}

	@Override
	public Product productById(int pid) {

		return repo.findById(pid).orElse(null);
	}

	@Override
	public Object finByName(String product_name) {
		Object p2 = finByName(product_name);
		if (p2 instanceof Product) {
			return p2;
		}
		return null;
	}
	
	@Override
	public List<Product> getall()
	{
		return repo.findAll();		
	}
}
