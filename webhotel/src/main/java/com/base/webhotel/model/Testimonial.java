package com.base.webhotel.model;

import java.util.Date;

import org.springframework.data.annotation.Id;

import lombok.Data;

@Data
public class Testimonial {
    @Id
    private String id;
    private String testimonial;
    private String country;
    private double rating;
    private Date date;
    private String name;

    
}
