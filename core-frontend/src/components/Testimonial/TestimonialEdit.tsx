import React, { MouseEventHandler } from "react";
import './../../App.scss';
import { IHotelPageComponent } from "../../model/HotelPageComponent";
import { ITestimonial, ITestimonialsComponent as IState } from "../../model/Testimonials";
import GeneralValuesEditComponent from "../edit-page/GeneralValuesEditComponent";

interface IProps {
    testimonialComponent: IHotelPageComponent
    handleEdit: (editedComponent: IHotelPageComponent) => void
}


class TestimonialEdit extends React.Component<IProps, IState>{

    componentDidMount(): void {
        this.setState(this.props.testimonialComponent)
    }
    render(): React.ReactNode {
        return (
            <div>
                <GeneralValuesEditComponent editComponentHeaderText="Testimonials" component={{ ...this.state }} handleChange={this.handleChange.bind(this)}></GeneralValuesEditComponent>
                {this.state?.testimonials.map((testimonial, index) => {
                    return <div>
                        
                        <form className="form-group" id={index + ""}>
                            <div className="form-group">
                                <label htmlFor="username">Name:</label>
                                <input className="form-control" type="text" id="name" name="name" placeholder="Your cool username" value={testimonial.name} onChange={this.handleChange.bind(this)} />

                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Country</label>
                                <input className="form-control" type="text" id="country" name="country" placeholder="name@example.com" value={testimonial.country} onChange={this.handleChange.bind(this)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="rating">Rating</label>
                                <input className="form-control" type="number" id="rating" name="rating" placeholder="name@example.com" value={testimonial.rating} onChange={this.handleChange.bind(this)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Testimonial</label>
                                <textarea className="form-control" id="testimonial" name="testimonial" placeholder="name@example.com" value={testimonial.testimonial} onChange={this.handleChange.bind(this)} />
                            </div>
                        </form>
                    </div>
                })}
                <button className="btn btn-secondary" onClick={this.handleOnAdd.bind(this)}>Add testimonial</button>
                <button className="btn btn-secondary" onClick={this.handleOnSave.bind(this)}>Save testimonials</button>
            </div>
        )
    }

    handleOnAdd(): MouseEventHandler<HTMLButtonElement> | void {

        const newTestimonial: ITestimonial = {
            id: new Date().getTime() + "",
            country: "",
            name: "",
            rating: 10,
            testimonial: ""

        }

        this.setState({
            ...this.state,
            testimonials: this.state.testimonials.concat(newTestimonial)
        })
    }
    handleOnSave(): MouseEventHandler<HTMLButtonElement> | void {
        this.props.handleEdit(this.state);
    }
    handleChange(evt: any) {
        const value = evt.target.value;

        //The values for the generic fields such as heading dont have a index
        const testimonialIndex: number = !!evt.target?.form?.id || evt.target?.form?.id === "0" ? parseInt(evt.target.form.id) : -1;
        if (testimonialIndex > -1) {


            this.setState({
                ...this.state,
                testimonials: this.state.testimonials.map((testimonial, index) => {
                    if (index === testimonialIndex) {
                        testimonial = {
                            ...testimonial,
                            [evt.target.name]: value
                        }
                    }
                    return testimonial
                })
            })
        }else{
            this.setState({
                ...this.state,
                [evt.target.name]: value
            })
        }
        /*const temp = {
            ...this.state.testimonials[0],
            [evt.target.name]: value
        }*/
    }
}

export default TestimonialEdit;