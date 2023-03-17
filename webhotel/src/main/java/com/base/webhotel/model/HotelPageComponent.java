package com.base.webhotel.model;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.annotation.JsonSubTypes.Type;

import lombok.Data;

//https://www.baeldung.com/jackson-inheritance
@JsonTypeInfo(
  use = JsonTypeInfo.Id.NAME, 
  include = JsonTypeInfo.As.PROPERTY, 
  property = "type")
@JsonSubTypes({ 
  @Type(value = TestimonialComponent.class, name = "testimonial_component")
})
@Data
public abstract class HotelPageComponent {
    
    private String id;

}
