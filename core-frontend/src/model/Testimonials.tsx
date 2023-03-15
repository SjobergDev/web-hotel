import { IHotelPageComponent } from "./HotelPageComponent";

export interface ITestimonialsComponent extends IHotelPageComponent{
    id: string
    testimonials: ITestimonial[]
}

export interface ITestimonial  {
    id: string
    testimonial: string,
    country: string,
    rating: number,
    name: string
}

export  {};