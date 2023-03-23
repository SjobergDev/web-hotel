import { IHotelPageComponent } from "../../model/HotelPageComponent";
import './../../App.scss';
import './HotelPageComponentWrapper.scss';

function HotelPageComponentWrapper(props: { children: any, component: IHotelPageComponent, handleDelete: any, handleEdit: (editedComponent: IHotelPageComponent) => void }) {
    return (<div className="component-container edit-component-container">
        <div className="relative">
            <div className="d-flex flex-row-reverse component-tool-wrapper" >
                <button onClick={() => props.handleDelete(props.component)} className="btn btn-danger component-tool-button">Delete</button>
                <button className="btn btn-success component-tool-button">Edit</button>
            </div>

            {props.children}
        </div>
    </div>)
}

export default HotelPageComponentWrapper;