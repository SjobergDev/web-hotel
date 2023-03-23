package com.base.webhotel.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.base.webhotel.model.HotelPage;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/api/hotel-pages/")
public class HotelPageController {
    
    @Autowired
    private MongoTemplate mongoTemplate;

    @GetMapping("/{id}")
    public HotelPage getHotelPageById(@PathVariable String id){
        
        return mongoTemplate.findById(id, HotelPage.class);

    }

    @GetMapping("/by-user/{username}")
    public List<HotelPage> getHotelPageByUser(@PathVariable String username){
        
        Query q = new Query();
        q.addCriteria(Criteria.where("username").is(username));
        return mongoTemplate.find(q,HotelPage.class);

    }

    @PostMapping("/")
    public HotelPage saveHotelPage(@RequestBody String hotelPageString) throws Exception{
        ObjectMapper mapper = new ObjectMapper();
        
        try {
            HotelPage hotelPage = mapper.readValue(hotelPageString,HotelPage.class);    
            return mongoTemplate.save(hotelPage);
        } catch (Exception e) {
           throw e;
        }
    }
}
