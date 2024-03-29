package com.base.webhotel.model.page_components;

import lombok.Data;

@Data
public class MediaTextComponent extends HotelPageComponent {
    
    private String mediaUrl;
    private String text;
    private String header;

    private int mediaMaxHeight;
}
