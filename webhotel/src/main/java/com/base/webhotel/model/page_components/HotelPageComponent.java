package com.base.webhotel.model.page_components;

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
  @Type(value = TestimonialComponent.class, name = "testimonial_component"),
  @Type(value = LandingPageMediaComponent.class, name = "landing_page_media_component"),
  @Type(value = MediaTextComponent.class, name = "media_text_component"),
  @Type(value = GalleryComponent.class, name = "gallery_component")
})
@Data
public abstract class HotelPageComponent {
    
    private String id;

}
