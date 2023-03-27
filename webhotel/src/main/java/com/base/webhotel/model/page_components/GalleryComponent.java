package com.base.webhotel.model.page_components;

import java.util.List;

import lombok.Data;

@Data
public class GalleryComponent extends HotelPageComponent {
    
    private List<String> imageUrls;
    private int maxImageHeight;
    private int imagesToDisplay;
}
