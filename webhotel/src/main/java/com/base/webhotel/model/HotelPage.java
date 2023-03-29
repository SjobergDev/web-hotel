package com.base.webhotel.model;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;

import com.base.webhotel.model.page_components.HotelPageComponent;

import lombok.Data;

@Data
public class HotelPage {
    
    @Id
    private String name;
    private String username;
    List<HotelPageComponent> components = new ArrayList<>();
    private HotelPageSettings hotelPageSettings;
}
