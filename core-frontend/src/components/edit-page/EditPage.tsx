import React from "react";
import CustomAxiosHttp from "../../services/CustomAxiosHttp";
import './../../App.scss';
import { HotelPageComponentEnum, IHotelPage as IState } from "../../model/HotelPageComponent";
import { ITestimonialsComponent } from "../../model/Testimonials";



interface IProps {

}
class EditPage extends React.Component<IProps, IState>{

    constructor(props: IProps) {
        super(props);
        this.state = {
            username: '',
            name: '',
            landingPageUrl: '',
            components: []
        };

        
        this.handleChange.bind(this);
    }

    render() {

        return (
        <div className="container"><h1>Hello {this?.state?.username}</h1>
            <h3> Edit {this?.state?.name}</h3>
            <input name="landingPageUrl" onChange={this.handleChange.bind(this)} className="form-control" type="text" value={this?.state?.landingPageUrl}></input>
            <button onClick={this.handleSave.bind(this)}>Save</button>

            <button onClick={this.addTestimonialComponent.bind(this)}className="btn btn-primary btn-lg"> Add testimonial component</button>
        </div>)
    }
    componentDidMount(){
        this.loadUserPage();
    }

    addTestimonialComponent(){
        const testimonials : ITestimonialsComponent = {
            id: 'test-id',
            testimonials: [],
            type: HotelPageComponentEnum[HotelPageComponentEnum.testimonial_component]
        }
        testimonials.testimonials.push({
            id: 'identifier',
            name: 'aron',
            testimonial: 'This goes pretty well',
            country: 'Colombia',
            rating: 10

        })
        this.state.components.push(testimonials);
    }
    loadUserPage() {

        let user = JSON.parse(localStorage.getItem("user") + "");
        const username = user.username;
        let url = 'api/hotel-pages/by-user/' + username;

     
        CustomAxiosHttp.get<any[]>(url).then(res => {

                console.log(res);
                if (res?.length && res.length > 0) {
                    const page = res[0];
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
    handleSave(evt: any){
        CustomAxiosHttp.post("api/hotel-pages/",this.state);
    }
}

export default EditPage