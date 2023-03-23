package com.base.webhotel.model;

import java.util.ArrayList;
import java.util.List;

import com.base.webhotel.model.page_components.HotelPageComponent;

import lombok.Data;

@Data
public class TestimonialComponent extends HotelPageComponent{
    
    List<Testimonial> testimonials = new ArrayList<>();
}
