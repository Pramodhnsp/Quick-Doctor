package com.health.healer.project.service;

import org.springframework.web.multipart.MultipartFile;

import com.health.healer.project.entity.Image;

public interface ImageService 
{
	Image addimage(MultipartFile file);

}
