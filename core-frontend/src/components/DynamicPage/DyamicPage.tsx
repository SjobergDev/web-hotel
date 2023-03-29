import React, { useEffect, useState } from "react";
import CustomAxiosHttp from "../../services/CustomAxiosHttp";
import { HotelPageComponentEnum, IHotelPage} from "../../model/HotelPageComponent";
import LandingPageMediaDisplay from "../LandingPage/LandingPageMediaDisplay";
import { ILandingPageMediaComponent } from "../../model/LandingPageMediaComponent";
import { ITestimonialsComponent } from "../../model/Testimonials";
import TestimonialDisplay from "../Testimonial/TestimonialDisplay";
import './../../App.scss'
import MediaTextDisplayComponent from "../media-text/MediaTextDisplayComponent";
import { IMediaTextComponent } from "../../model/MediaTextComponent";
import { IGalleryComponent } from "../../model/GalleryComponent";
import GalleryComponentDisplay from "../gallery/GalleryComponentDisplay";

interface IProps{
    id: string
}

const DynamicPage:  React.FC<IProps> = ({id}) =>{
    const [hotelPage, setHotelPage] = useState<IHotelPage>();
    useEffect(() =>{
        debugger;
        initPageData();
    }, [])


    const initPageData = () => {
        CustomAxiosHttp.get<IHotelPage>("api/hotel-pages/" + id).then(result => {
            setHotelPage(result);
        }).catch(e => {
            console.log(e);
        })
    }
    
        return (<div>
            {hotelPage?.components?.map(comp => {
                switch(comp.type){
                    case HotelPageComponentEnum[HotelPageComponentEnum.landing_page_media_component]: {
                        return <LandingPageMediaDisplay component={comp as ILandingPageMediaComponent}/>
                    }case HotelPageComponentEnum[HotelPageComponentEnum.testimonial_component]: {
                        return <div className="component-container container"><TestimonialDisplay component={comp as ITestimonialsComponent}/></div>
                    }case HotelPageComponentEnum[HotelPageComponentEnum.media_text_component]: {
                        return <div className="component-container container"><MediaTextDisplayComponent component={comp as IMediaTextComponent}/></div>
                    }case HotelPageComponentEnum[HotelPageComponentEnum.gallery_component]: {
                        return <div className="component-container container"><GalleryComponentDisplay component={comp as IGalleryComponent}/></div>
                    }
                    default: {
                        return <h1>cant find component type {comp.type}</h1>
                    }
                }
            })}
        </div>)
    

}

export default DynamicPage;