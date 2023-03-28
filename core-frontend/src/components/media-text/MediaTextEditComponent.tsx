import React, { MouseEventHandler } from "react";
import './../../App.scss';
import { IHotelPageComponent } from "../../model/HotelPageComponent";
import { IMediaTextComponent as IState } from "../../model/MediaTextComponent";
import GeneralValuesEditComponent from "../edit-page/GeneralValuesEditComponent";

interface IProps {
    component: IHotelPageComponent
    handleEdit: (editedComponent: IHotelPageComponent) => void
}


class MediaTextEditComponent extends React.Component<IProps, IState>{

    componentDidMount(): void {
        this.setState(this.props.component)
    }
    render(): React.ReactNode {
        return (
            <div>
                <h3>Media Text Component</h3>

                <GeneralValuesEditComponent component={{ ...this.state }} handleChange={this.handleChange.bind(this)}></GeneralValuesEditComponent>
                <form className="form-group">
                <div className="form-group">
                        <label htmlFor="password">Header</label>
                        <input className="form-control" type="text" id="header" name="header" placeholder="Your awsome header" value={this.state?.header} onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Text</label>
                        <input className="form-control" type="text" id="text" name="text" placeholder="Insert text here" value={this.state?.text} onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mediaUrl">Media Url:</label>
                        <input className="form-control" type="text" id="mediaUrl" name="mediaUrl" placeholder="URL" value={this.state?.mediaUrl} onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mediaMaxHeight">Max height</label>
                        <input className="form-control" type="number" id="mediaMaxHeight" name="mediaMaxHeight" placeholder="Max height in PX" value={this.state?.mediaMaxHeight} onChange={this.handleChange.bind(this)} />
                    </div>
                </form>

                <button className="btn btn-secondary" onClick={this.handleOnSave.bind(this)}>Save changes</button>
            </div>
        )
    }


    handleOnSave(): MouseEventHandler<HTMLButtonElement> | void {
        this.props.handleEdit(this.state);
    }
    handleChange(evt: any) {
        const value = evt.target.value;
        this.setState({
            ...this.state,
            [evt.target.name]: value
        });
    }
}

export default MediaTextEditComponent;