import React, { useState, useEffect } from "react";
import { Color, SketchPicker } from "react-color";
import { useSettingsStore } from "../../App";
import { IHotelPageComponent, IHotelPageSettings } from "../../model/HotelPageComponent";
import './../../App.scss'

interface IProps {
    hotelPageSettings: IHotelPageSettings,
    handleEdit: (settings: IHotelPageSettings) => void
}

const GeneralSettingsEditComponent: React.FC<IProps> = ({hotelPageSettings, handleEdit}) => {
    const [showHeaderColorPalet, setShowHeaderColorPalet] = useState(false);
    const [hotelPageSettingsState, setHotelPageSettingsState] = useState(hotelPageSettings);
    const {settings, changeHeaderColor} = useSettingsStore();

    useEffect(() => {
        setHotelPageSettingsState(hotelPageSettings);
    }, [hotelPageSettings]);

    const handleHeaderColorChange = (e: any,evt:any) => {
        handleColorChange(e,evt, "headerColor");
    }

    const handleColorChange = (e: any, evt: any, id: string) => {
       /* setHotelPageSettingsState({
            ...hotelPageSettingsState,
            [id]: e.hex,
        })*/
        changeHeaderColor(e.hex);
    }

    const handleOnSave = () => {
        handleEdit(hotelPageSettingsState);
    }

    return (
        <div className="edit-component-container">
            <h1>test</h1>
            <div className="d-flex ">
                <button className="btn btn-primary align-self-start" onClick={() => setShowHeaderColorPalet(!showHeaderColorPalet)}>
                    {showHeaderColorPalet ? 'Hide header color' : 'Edit header color'}
                </button>
                {showHeaderColorPalet && <SketchPicker color={hotelPageSettingsState.headerColor} onChange={handleHeaderColorChange} />}
            </div>
            <button className="btn btn-secondary" onClick={handleOnSave}>Save testimonials</button>
        </div>
    )
}

export default GeneralSettingsEditComponent;
