import React from "react";
import axios from 'axios';
import LandingPage from "../LandingPage/LandingPage";

interface IProps {
    id: string
}

export interface DynamicPageModel {
    name: string,
    landingPageUrl: string
}

class DynamicPage extends React.Component<IProps, DynamicPageModel>{

    constructor(props: IProps) {
        super(props);
        this.state = {
            name: '',
            landingPageUrl: ''
        }
        this.initPageData();
    }

    initPageData() {
        axios.get("http://localhost:8080/api/hotel-pages/" + this.props.id).then(result => {
            this.setState(result.data);
        }).catch(e => {
            debugger
        })
    }
    render() {
        return <div>
        <LandingPage pageModel={this.state}/>
        </div>
    }

}

export default DynamicPage;