export interface IHotelPageComponent{
    id: string
    type: string,
    heading?: string,
    subHeading?: string
}
export enum HotelPageComponentEnum{
    testimonial_component,
    landing_page_media_component,
    media_text_component,
    gallery_component
}
export interface IHotelPageSettings{
    headerColor?: string
}

export interface IHotelPage{
    
    name: string,
    username: string
    components: IHotelPageComponent[];
    hotelPageSettings: IHotelPageSettings
}
export{}