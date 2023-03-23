import React from "react";
import axios from 'axios';
import CustomAxiosHttp from "../../services/CustomAxiosHttp";
import { HotelPageComponentEnum, IHotelPage, IHotelPage as IState} from "../../model/HotelPageComponent";
import LandingPageMediaDisplay from "../LandingPage/LandingPageMediaDisplay";
import { ILandingPageMediaComponent } from "../../model/LandingPageMediaComponent";
import { ITestimonialsComponent } from "../../model/Testimonials";
import TestimonialDisplay from "../Testimonial/TestimonialDisplay";
import './../../App.scss'

interface IProps{
    id: string
}

class DynamicPage extends React.Component<IProps, IState>{

    constructor(props: IProps) {
        super(props);
        this.setState({});
        this.initPageData();
    }

    initPageData() {
        CustomAxiosHttp.get<IHotelPage>("api/hotel-pages/" + this.props.id).then(result => {
            this.setState(result);
        }).catch(e => {
            console.log(e);
        })
    }
    render() {
        return <div>
            {this.state?.components?.map(comp => {
                switch(comp.type){
                    case HotelPageComponentEnum[HotelPageComponentEnum.landing_page_media_component]: {
                        return <LandingPageMediaDisplay component={comp as ILandingPageMediaComponent}/>
                    }case HotelPageComponentEnum[HotelPageComponentEnum.testimonial_component]: {
                        return <div className="component-container"><TestimonialDisplay component={comp as ITestimonialsComponent}/></div>
                    }default: {
                        return <h1>cant find component type {comp.type}</h1>
                    }
                }
            })}
        </div>
    }

}

export default DynamicPage;