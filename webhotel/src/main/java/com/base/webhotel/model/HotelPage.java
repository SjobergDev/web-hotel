package com.base.webhotel.model;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;

import lombok.Data;

@Data
public class HotelPage {
    
    @Id
    private String name;
    private String landingPageUrl;
    private String username;
    List<HotelPageComponent> components = new ArrayList<>();
}
