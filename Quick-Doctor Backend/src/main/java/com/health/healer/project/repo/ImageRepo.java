package com.health.healer.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.health.healer.project.entity.Image;

@Repository
public interface ImageRepo extends JpaRepository<Image, Integer>{

}
