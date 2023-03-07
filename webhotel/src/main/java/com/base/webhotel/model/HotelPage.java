package com.base.webhotel.model;

import org.springframework.data.annotation.Id;

import lombok.Data;

@Data
public class HotelPage {
    
    @Id
    private String name;
    private String landingPageUrl;
}
