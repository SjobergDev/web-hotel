import React, { MouseEventHandler } from "react";
import { Color, SketchPicker } from "react-color";
import { IHotelPageComponent, IHotelPageSettings } from "../../model/HotelPageComponent";
import './../../App.scss'
interface IProps {
    hotelPageSettings: IHotelPageSettings,
    handleEdit: (settings: IHotelPageSettings) => void
}
interface IState {
    hotelPageSettings: IHotelPageSettings,
    showHeaderColorPalet: boolean,
}
class GeneralSettingsEditComponent extends React.Component<IProps, IState>{

    constructor(props: IProps) {
        super(props);

        this.handleColorChange.bind(this);
        this.handleHeaderColorChange.bind(this);
        this.props.handleEdit.bind(this);
        debugger;
        this.state = {
            hotelPageSettings: {...this.props.hotelPageSettings},
            showHeaderColorPalet: false
        }
    }
    render(): React.ReactNode {

        return <div className="edit-component-container"><h1>test</h1>
            <div className="d-flex ">
                <button className="btn btn-primary align-self-start" onClick={() => this.setState({ ...this.state, showHeaderColorPalet: !this.state.showHeaderColorPalet })}>{this.state.showHeaderColorPalet ? 'Hide header color' : 'Edit header color'}</button>
                {this.state.showHeaderColorPalet && <SketchPicker color={this.state?.hotelPageSettings?.headerColor} onChange={this.handleHeaderColorChange.bind(this)} />}
            </div>
            <button className="btn btn-secondary" onClick={this.handleOnSave.bind(this)}>Save testimonials</button>
            </div>
    }

    componentDidUpdate(prevProps: Readonly<IProps>): void {
        if(prevProps !== this.props){
            this.setState({
                ...this.state,
                hotelPageSettings: this.props.hotelPageSettings
            })
        }
    }
    handleOnSave(): MouseEventHandler<HTMLButtonElement> | void {
        this.props.handleEdit(this.state.hotelPageSettings);
    }
    handleHeaderColorChange(e: any, evt: any) {
        this.handleColorChange(e, evt, "headerColor");
    }
    handleColorChange(e: any, evt: any, id: string) {
        this.setState({
            ...this.state,
            hotelPageSettings: {
                [id]: e.hex,
            }

        })
    }
}

export default GeneralSettingsEditComponent;