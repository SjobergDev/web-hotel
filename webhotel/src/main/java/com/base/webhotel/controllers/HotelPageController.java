package com.base.webhotel.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.base.webhotel.model.HotelPage;

@RestController
@RequestMapping("/api/hotel-pages/")
public class HotelPageController {
    
    @Autowired
    private MongoTemplate mongoTemplate;
    @GetMapping("/{id}")
    public HotelPage getHotelPage(@PathVariable String id){
        
        return mongoTemplate.findById(id, HotelPage.class);

    }

    @PostMapping("/")
    public HotelPage saveHotelPage(@RequestBody HotelPage hotelPage){
        return mongoTemplate.save(hotelPage);

    }

}
