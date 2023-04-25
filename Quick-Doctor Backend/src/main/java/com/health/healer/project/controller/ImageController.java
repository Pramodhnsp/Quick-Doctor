package com.health.healer.project.controller;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.health.healer.project.entity.Image;
import com.health.healer.project.repo.ImageRepo;


@RestController
@CrossOrigin
public class ImageController 
{
	@Autowired
	ImageRepo imrepo;
	
	@PostMapping("/addImage")
	public String uploadImage(@RequestParam("file") MultipartFile file) throws IOException {
        Image image = new Image();
        image.setImage(file.getBytes());
        imrepo.save(image);
        return "redirect:/";
    }
	
	@GetMapping("/image/{id}")
	public ResponseEntity<byte[]> getImage(@PathVariable int id){
		Optional<Image> imageOptional = imrepo.findById(id);
		if(imageOptional.isPresent()) {
			Image image = imageOptional.get();
			HttpHeaders headers = new HttpHeaders();
			headers.setContentType(MediaType.ALL);
			headers.setContentDisposition(ContentDisposition.inline().build());
			System.out.println("ghsvdcfcdtsg");
			return new ResponseEntity<>(image.getImage(),headers,HttpStatus.OK);
		}
		return ResponseEntity.notFound().build();
	}
	
	@GetMapping("/getallimages")
	public List<Image> findall()
	{
		System.out.println("blaah");
		return imrepo.findAll();
	}
}
