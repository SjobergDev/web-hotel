import React from "react";
import CustomAxiosHttp from "../../services/CustomAxiosHttp";
import './../../App.scss';
import { HotelPageComponentEnum, IHotelPage as IState, IHotelPageComponent } from "../../model/HotelPageComponent";
import { ITestimonialsComponent } from "../../model/Testimonials";
import TestimonialEdit from "../Testimonial/TestimonialEdit";
import HotelPageComponentWrapper from "../wrapper/HotelPageComponentWrapper";
import { ILandingPageMediaComponent } from "../../model/LandingPageMediaComponent";
import LandingPageMediaEdit from "../LandingPage/LandingPageMediaEdit";



interface IProps {

}
class EditPage extends React.Component<IProps, IState>{

    constructor(props: IProps) {
        super(props);
        this.state = {
            username: '',
            name: '',
            components: []
        };


        this.handleChange.bind(this);
        this.addNewComponentInternal.bind(this);
    }

    render() {

        return (
            <div className="container">
                <h1 className="text-center"> Edit {this?.state?.name}</h1>
                <button onClick={this.handleSave.bind(this)}>Save</button>

                <button onClick={this.addTestimonialComponent.bind(this)} className="btn btn-primary btn-lg"> Add testimonial component</button>
                <button onClick={this.addLandingPageComponent.bind(this)} className="btn btn-primary btn-lg"> Add landing page component</button>

                {this.state.components.map((component) => {

                    switch (component.type) {
                        case HotelPageComponentEnum[HotelPageComponentEnum.testimonial_component]: {
                            return (
                                <HotelPageComponentWrapper key={component.id} component={component}
                                    handleDelete={this.handleComponentRemoved.bind(this)} handleEdit={this.handleComponentEdited.bind(this)}>
                                    <TestimonialEdit testimonialComponent={component} handleEdit={this.handleComponentEdited.bind(this)}></TestimonialEdit>
                                </HotelPageComponentWrapper>
                            )

                        }case HotelPageComponentEnum[HotelPageComponentEnum.landing_page_media_component]: {
                            return (
                                <HotelPageComponentWrapper key={component.id} component={component}
                                    handleDelete={this.handleComponentRemoved.bind(this)} handleEdit={this.handleComponentEdited.bind(this)} >
                                    <LandingPageMediaEdit component={component} handleEdit={this.handleComponentEdited.bind(this)}></LandingPageMediaEdit>
                                </HotelPageComponentWrapper>
                            )

                        } default: {
                            return <h1>No component found</h1>
                        }
                    }
                })}
            </div>)
    }
    handleComponentRemoved(componentToRemove: IHotelPageComponent) {
        debugger;
        this.setState(
            {
                ...this.state,
                components: this.state.components.filter(component => {
                    return component.id !== componentToRemove.id
                })
            }
        )

    }
    handleComponentEdited(editedComponent: IHotelPageComponent) {
        debugger;
        this.setState(
            {
                ...this.state,
                components: this.state.components.map(component => {
                    if (component.id === editedComponent.id) {
                        return editedComponent;
                    }
                    return component;
                })
            }

        )
    }
    componentDidMount() {
        this.loadUserPage();
    }

    addLandingPageComponent() {
        const landingPageMediaComponent: ILandingPageMediaComponent = {
            id: this.generateComponentId(),
            type: HotelPageComponentEnum[HotelPageComponentEnum.landing_page_media_component],
            landingPageUrl: ''
        }

        this.addNewComponentInternal(landingPageMediaComponent);
    }
    addTestimonialComponent() {
        const testimonials: ITestimonialsComponent = {
            id: this.generateComponentId(),
            testimonials: [],
            type: HotelPageComponentEnum[HotelPageComponentEnum.testimonial_component]
        }
        testimonials.testimonials.push({
            id: 'id',
            name: 'aron',
            testimonial: 'This goes pretty well',
            country: 'Colombia',
            rating: 10

        })
        this.addNewComponentInternal(testimonials);
    }

    addNewComponentInternal(component: IHotelPageComponent) {
        const newEntryArr: IHotelPageComponent[] = [];
        newEntryArr.push(component);

        this.setState(
            {
                ...this.state,
                components: this.state.components.concat(newEntryArr)
            }
        )
    }
    generateComponentId() {
        return 'ID_' + new Date().getTime();
    }
    loadUserPage() {

        let user = JSON.parse(localStorage.getItem("user") + "");
        const username = user.username;
        let url = 'api/hotel-pages/by-user/' + username;


        CustomAxiosHttp.get<any[]>(url).then(res => {

            console.log(res);
            if (res?.length && res.length > 0) {
                this.setState(
                    res[0]
                );
            }
        }
        ).catch(e => {
            console.error(e);
        });

    }
    handleChange(evt: any) {
        const value = evt.target.value;
        this.setState({
            ...this.state,

            [evt.target.name]: value
        }
        );
    }
    handleSave(evt: any) {
        CustomAxiosHttp.post("api/hotel-pages/", this.state);
    }
}

export default EditPage