import { IHotelPageComponent } from "../../model/HotelPageComponent";
import './../../App.scss';

function HotelPageComponentWrapper(props: {children: any,component: IHotelPageComponent, handleDelete: any}){
    return (<div>
        <div className="d-flex flex-row-reverse"><button onClick={() =>props.handleDelete(props.component)}className="btn btn-danger">Delete</button></div>
    {props.children} 
    <h1>end</h1></div>)
}

export default HotelPageComponentWrapper;