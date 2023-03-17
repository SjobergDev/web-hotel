import React, { MouseEventHandler } from "react";
import './../../App.scss';
import { IHotelPageComponent } from "../../model/HotelPageComponent";
import { ITestimonialsComponent as IState, ITestimonialsComponent } from "../../model/Testimonials";

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
                <h3>Testimonials</h3>

                {this.state?.testimonials.map((testimonial, index) => {
                    return <div>
                        <form className="form-group" id={index + ""}>
                            <div className="form-group">
                                <label htmlFor="username">Name:</label>
                                <input className="form-control" type="text" id="name" name="name" placeholder="Your cool username" value={testimonial.name} onChange={this.handleChange.bind(this)} />

                            </div>
                            <div className="form-group">
                                <label htmlFor="password">country</label>
                                <input className="form-control" type="text" id="country" name="country" placeholder="name@example.com" value={testimonial.country} onChange={this.handleChange.bind(this)} />
                            </div>
                        </form>
                    </div>
                })}

                <button className="btn btn-secondary" onClick={this.handleOnSave.bind(this)}>Save testimonial</button>
            </div>
        )
    }
    handleOnSave(): MouseEventHandler<HTMLButtonElement> | void {
        this.props.handleEdit(this.state);
    }
    handleChange(evt: any) {
        const value = evt.target.value;
        const testimonialIndex: number = parseInt(evt.target.form.id);
        this.setState({
            ...this.state,
            testimonials: this.state.testimonials.map((testimonial, index) => {
                if (index == testimonialIndex) {
                    testimonial = {
                        ...testimonial,
                        [evt.target.name]: value
                    }
                }
                return testimonial
            })
        })
        /*const temp = {
            ...this.state.testimonials[0],
            [evt.target.name]: value
        }*/
    }
}

export default TestimonialEdit;