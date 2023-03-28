import React from "react";
import { IHotelPageComponent } from "../../model/HotelPageComponent";

interface IProps{
    component: IHotelPageComponent,
    handleChange: (evt: any) => void,
    editComponentHeaderText: string
}
class GeneralValuesEditComponent extends React.Component<IProps, IHotelPageComponent> {

    constructor(props: IProps) {
        super(props);
        this.state = { ...props.component };
    }
    render(): React.ReactNode {
        return (
                <div>
                    <h3>{this.props.editComponentHeaderText}</h3>
                <label htmlFor="landingPageUrl">Heading</label>
                <input className="form-control" type="text" id="heading" name="heading" placeholder="Insert Heading" value={this.props?.component?.heading} onChange={this.props.handleChange} />
                <label htmlFor="landingPageUrl">Sub heading</label>
                <input className="form-control" type="text" id="subHeading" name="subHeading" placeholder="Insert Subheading" value={this.props?.component?.subHeading} onChange={this.props.handleChange} />
                </div>)                
    }
}

export default GeneralValuesEditComponent