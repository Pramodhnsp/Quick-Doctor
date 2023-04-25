package com.health.healer.project.serviceImp;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.health.healer.project.entity.Image;
import com.health.healer.project.entity.ImageUtility;
import com.health.healer.project.repo.ImageRepo;
import com.health.healer.project.service.ImageService;
import com.mysql.cj.util.StringUtils;

@Service
public class ImageServiceImplementation implements  ImageService{

	@Autowired
	ImageRepo imrepo;
	
	@Override
	public Image addimage(MultipartFile image) 
	{
		Image I = new Image();
		String filename = StringUtils.cleanpath(image.getOriginalFilename());
		if (filename.contains("..")) {
			System.out.println("Not a valid file");
		}
		try {
			I.setImage(ImageUtility.compressImage(image.getBytes()));
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		return imrepo.save(I);
	}
 
}
