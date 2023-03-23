import { IHotelPageComponent } from "./HotelPageComponent";

export interface IMediaTextComponent extends IHotelPageComponent{
    mediaUrl: string;
    text: string,
    header: string
}