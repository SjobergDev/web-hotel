import React from "react";
import { IHotelPageComponent } from "../../model/HotelPageComponent";
import { ILandingPageMediaComponent, ILandingPageMediaComponent as IState } from "../../model/LandingPageMediaComponent";

interface IProps {
    component: IHotelPageComponent
    handleEdit: (editedComponent: IHotelPageComponent) => void
}

class LandingPageMediaEdit extends React.Component<IProps, IState>{
    render(): React.ReactNode {
        return (
            <div>
                <h1> edit the media por favor</h1>
                <input className="form-control" type="text" id="landingPageUrl" name="landingPageUrl" placeholder="Insert media URL" value={this.state?.landingPageUrl} onChange={this.handleChange.bind(this)} />
                <button className="btn btn-success component-tool-button" onClick={() => this.props.handleEdit(this.state)}>Save changes</button>
            </div>
        )
    }
    componentDidMount(): void {
        this.setState(this.props.component);
    }
    handleChange(evt: any) {
        debugger;
        const value = evt.target.value;
        this.setState({
            ...this.state,

            [evt.target.name]: value
        }
        );
    }
}

export default LandingPageMediaEdit;