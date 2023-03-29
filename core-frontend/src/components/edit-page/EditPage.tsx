import React from "react";
import CustomAxiosHttp from "../../services/CustomAxiosHttp";
import './../../App.scss';
import { HotelPageComponentEnum, IHotelPage as IState, IHotelPageComponent, IHotelPageSettings } from "../../model/HotelPageComponent";
import TestimonialEdit from "../Testimonial/TestimonialEdit";
import HotelPageEditComponentWrapper from "../wrapper/HotelPageEditComponentWrapper";
import LandingPageMediaEdit from "../LandingPage/LandingPageMediaEdit";
import MediaTextEditComponent from "../media-text/MediaTextEditComponent";
import GalleryComponentEdit from "../gallery/GalleryComponentEdit";
import { IGalleryComponent } from "../../model/GalleryComponent";
import AddNewPageComponent from "./AddNewPageComponent";
import './EditPage.scss';
import GeneralSettingsEditComponent from "./GeneralSettingsEditComponent";



interface IProps {

}

class EditPage extends React.Component<IProps, IState>{

    constructor(props: IProps) {
        super(props);
        this.state = {
            username: '',
            name: '',
            components: [],
            hotelPageSettings: {}
        };


        this.handleChange.bind(this);
        this.addNewComponentInternal.bind(this);
    }

    render() {

        return (
            <div className="container component-container">
                <GeneralSettingsEditComponent handleEdit={this.handleHotelPageSettingsEdited.bind(this)} hotelPageSettings={{...this.state?.hotelPageSettings}}></GeneralSettingsEditComponent>

                <h1 className="text-center"> Edit {this?.state?.name}</h1>


                {this.state.components.map((component) => {

                    switch (component.type) {
                        case HotelPageComponentEnum[HotelPageComponentEnum.testimonial_component]: {
                            return (
                                <HotelPageEditComponentWrapper key={component.id} component={component} handleMove={this.handleComponentMove.bind(this)}
                                    handleDelete={this.handleComponentRemoved.bind(this)} handleEdit={this.handleComponentEdited.bind(this)}>
                                    <TestimonialEdit testimonialComponent={component} handleEdit={this.handleComponentEdited.bind(this)}></TestimonialEdit>
                                </HotelPageEditComponentWrapper>
                            )

                        } case HotelPageComponentEnum[HotelPageComponentEnum.landing_page_media_component]: {
                            return (
                                <HotelPageEditComponentWrapper handleMove={this.handleComponentMove.bind(this)} key={component.id} component={component}
                                    handleDelete={this.handleComponentRemoved.bind(this)} handleEdit={this.handleComponentEdited.bind(this)}  >
                                    <LandingPageMediaEdit component={component} handleEdit={this.handleComponentEdited.bind(this)}></LandingPageMediaEdit>
                                </HotelPageEditComponentWrapper>
                            )

                        } case HotelPageComponentEnum[HotelPageComponentEnum.media_text_component]: {
                            return (
                                <HotelPageEditComponentWrapper handleMove={this.handleComponentMove.bind(this)} key={component.id} component={component}
                                    handleDelete={this.handleComponentRemoved.bind(this)} handleEdit={this.handleComponentEdited.bind(this)}  >
                                    <MediaTextEditComponent component={component} handleEdit={this.handleComponentEdited.bind(this)} />
                                </HotelPageEditComponentWrapper>
                            )

                        } case HotelPageComponentEnum[HotelPageComponentEnum.gallery_component]: {
                            return (
                                <HotelPageEditComponentWrapper handleMove={this.handleComponentMove.bind(this)} key={component.id} component={component}
                                    handleDelete={this.handleComponentRemoved.bind(this)} handleEdit={this.handleComponentEdited.bind(this)}  >
                                    <GalleryComponentEdit component={component as IGalleryComponent} handleEdit={this.handleComponentEdited.bind(this)} />
                                </HotelPageEditComponentWrapper>
                            )

                        } default: {
                            return <h1>No component found</h1>
                        }
                    }
                })}
                <AddNewPageComponent addNewComponent={this.addNewComponentInternal.bind(this)} />
                <div style={{ width: "100%" }}>
                    <button className={"save-changes-btn btn btn-success"} onClick={this.handleSave.bind(this)}>Save Changes</button>
                </div>
            </div>)
    }
    handleComponentRemoved(componentToRemove: IHotelPageComponent) {
        this.setState(
            {
                ...this.state,
                components: this.state.components.filter(component => {
                    return component.id !== componentToRemove.id
                })
            }
        )

    }
    handleHotelPageSettingsEdited(settings: IHotelPageSettings){
        this.setState(
            {
                ...this.state,
                hotelPageSettings: settings
            }

        )
    }
    handleComponentEdited(editedComponent: IHotelPageComponent) {
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

    private handleComponentMove(component: IHotelPageComponent, up: boolean) {
        let index = 0;

        index = this.state.components.findIndex(c => {
            return c.id === component.id;
        })
        const newArr = this.state.components.filter((c, i) => {
            return component.id !== c.id
        });

        const upDownModifier = up ? -1 : 1;
        newArr.splice(index + upDownModifier, 0, component);
        console.log(newArr)
        this.setState(
            {
                ...this.state,
                components: newArr
            }
        )
    }
    componentDidMount() {
        this.loadUserPage();
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

    loadUserPage() {

        let user = JSON.parse(localStorage.getItem("user") + "");
        const username = user.username;
        let url = 'api/hotel-pages/by-user/' + username;


        CustomAxiosHttp.get<any[]>(url).then(res => {
            debugger;
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