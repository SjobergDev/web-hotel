import { IHotelPageComponent } from "../../model/HotelPageComponent";
import './../../App.scss';
import './HotelPageEditComponentWrapper.scss';

function HotelPageEditComponentWrapper(props: { children: any, component: IHotelPageComponent, handleDelete: any, handleMove: any, handleEdit: (editedComponent: IHotelPageComponent, up: boolean) => void }) {
    return (<div className="component-container edit-component-container">
        <div className="relative">
            <div className="d-flex flex-row-reverse component-tool-wrapper" >
                <button onClick={() => props.handleDelete(props.component)} className="btn btn-danger component-tool-button">Delete</button>
                <button onClick={() => props.handleMove(props.component, true)} className="btn btn-secondary component-tool-button">UP</button>
                <button onClick={() => props.handleMove(props.component, false)} className="btn btn-secondary component-tool-button">DOWN</button>

            </div>

            {props.children}
        </div>
    </div>)
}

export default HotelPageEditComponentWrapper;