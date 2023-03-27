import { IHotelPageComponent } from "./HotelPageComponent";

export interface IGalleryComponent extends IHotelPageComponent{
    imageUrls: string[],
    maxImageHeight?: number,
    imagesToDisplay: number 
}