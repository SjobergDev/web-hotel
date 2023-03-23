export interface IHotelPageComponent{
    id: string
    type: string
}
export enum HotelPageComponentEnum{
    testimonial_component,
    landing_page_media_component,
    media_text_component
}

export interface IHotelPage{
    
    name: string,
    username: string
    components: IHotelPageComponent[];
}
export{}