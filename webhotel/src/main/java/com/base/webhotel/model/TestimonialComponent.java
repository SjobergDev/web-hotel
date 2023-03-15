package com.base.webhotel.model;

import java.util.ArrayList;
import java.util.List;

import lombok.Data;

@Data
public class TestimonialComponent extends HotelPageComponent{
    
    List<Testimonial> testimonials = new ArrayList<>();
}
