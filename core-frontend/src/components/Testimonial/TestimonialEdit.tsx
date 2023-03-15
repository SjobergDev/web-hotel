import React from "react";
import { ITestimonialsComponent as IState } from "../../model/Testimonials";

interface IProps{

}


class TestimonialEdit extends React.Component<IProps,IState>{

    render(): React.ReactNode {
        return(
            <h1>Edited testimonial</h1>
        )
    }
}

export default TestimonialEdit;