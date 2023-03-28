import React from "react";
import { IHotelPageComponent } from "../../model/HotelPageComponent";
import { ILandingPageMediaComponent, ILandingPageMediaComponent as IState } from "../../model/LandingPageMediaComponent";
import GeneralValuesEditComponent from "../edit-page/GeneralValuesEditComponent";

interface IProps {
    component: IHotelPageComponent
    handleEdit: (editedComponent: IHotelPageComponent) => void
}

class LandingPageMediaEdit extends React.Component<IProps, IState>{
    render(): React.ReactNode {
        return (
            <div>
                <form className="form-group">
                    <GeneralValuesEditComponent component={{...this.state}} handleChange={this.handleChange.bind(this)}></GeneralValuesEditComponent>
                    <label htmlFor="landingPageUrl">Landingpage url</label>
                    <input className="form-control" type="text" id="landingPageUrl" name="landingPageUrl" placeholder="Insert media URL" value={this.state?.landingPageUrl} onChange={this.handleChange.bind(this)} />

                  
                </form>
                <button className="btn btn-success component-tool-button" onClick={() => this.props.handleEdit(this.state)}>Save changes</button>
            </div>
        )
    }
    constructor(props: IProps){
        super(props);
        this.state = this.props.component as ILandingPageMediaComponent;
    }
    handleChange(evt: any) {
        const value = evt.target.value;
        this.setState({
            ...this.state,

            [evt.target.name]: value
        }
        );
    }
}

export default LandingPageMediaEdit;