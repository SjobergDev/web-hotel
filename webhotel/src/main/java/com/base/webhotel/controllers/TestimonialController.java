package com.base.webhotel.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.base.webhotel.model.Testimonial;


@RestController
public class TestimonialController {
    
    @Autowired
    private MongoTemplate mongoTemplate;

    @GetMapping("/api/testimonials/{id}")
    public Testimonial getTestimonial(@PathVariable String id){
        
        return mongoTemplate.findById(id, Testimonial.class);
    }

    
    @GetMapping("/api/testimonials")
    public List<Testimonial> getTestimonials(){
        return mongoTemplate.findAll(Testimonial.class);
    }

    @PostMapping("/api/testimonials")
    public Testimonial postTestimonial(@RequestBody Testimonial testimonial){
        Testimonial res = mongoTemplate.save(testimonial);
        return res;
    }
}
