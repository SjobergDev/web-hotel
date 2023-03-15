export interface IHotelPageComponent{
    id: string
    type: string
    //class: string
}
export enum HotelPageComponentEnum{
    testimonial_component
}

export interface IHotelPage{
    
    name: string,
    landingPageUrl: string,
    username: string
    components: IHotelPageComponent[];
}
export{}