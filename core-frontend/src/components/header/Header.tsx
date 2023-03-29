import { MouseEventHandler } from "react";
import { useStore } from "zustand";
import { useSettingsStore } from "../../App";
import "./Header.scss";


function Header() {

    const { settings, changeHeaderColor } = useSettingsStore();
    return (
        <div className="header d-flex justify-content-center align-items-center p-2 flex-row" style={{backgroundColor: !!settings.headerColor ? settings.headerColor: ''}}>
            <div className="p-4"><h5><a className="nav-item" href="/create-testimonials">Add testimonial</a></h5></div>
            <div className="p-4"><h5><a className="nav-item" href="/list-testimonials">View testimonials</a></h5></div>
        </div>
    );

}


export default Header;
